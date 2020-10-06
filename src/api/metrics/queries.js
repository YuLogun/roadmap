export const getPresetProgressQuery = usersName => `
  SELECT 
    distinct users.id,
    users.email,
    presets.name, 
    employee_roadmaps.manager_id,
    count(distinct preset_courses.course_id) as number_of_all_courses,
    count(distinct ec.course_id) as number_of_completed_courses,
    count(distinct ec.technology_id) as number_of_completed_technologies,
    count(distinct public.course_technologies.technology_id) as number_of_all_technologies,
    case when count(distinct preset_courses.course_id)::decimal(2)!=0 then 
      round(count(distinct ec.course_id)/count(distinct preset_courses.course_id)::decimal(2),3) end as share_of_completed_courses,
    case when count(distinct public.course_technologies.technology_id)::decimal(2)!=0 then 
      round(count(distinct ec.technology_id)/count(distinct public.course_technologies.technology_id)::decimal(2),3) end as share_of_completed_technologies
  FROM users
    left join companies on users.company_id=companies.id
    left join employee_roadmaps on users.id=employee_roadmaps.employee_id
    left join public.preset_courses on employee_roadmaps.preset_id =public.preset_courses.preset_id
    left join (select users.id,public.employee_course_completions.course_id,rating,technology_id,completed_at
      from users
        left join public.employee_course_completions on public.employee_course_completions.employee_id=users.id
        left join public.course_technologies on public.course_technologies.course_id=public.employee_course_completions.course_id
        where role='employee'
    ) as ec
        on ec.course_id=preset_courses.course_id
    left join public.course_technologies on public.course_technologies.course_id=preset_courses.course_id
    left join presets on presets.id= employee_roadmaps.preset_id
  WHERE users.role='employee' and users.username = '${usersName}'
  GROUP BY users.id,presets.name,employee_roadmaps.manager_id
`;

export const getIntensityOfTrainingQuery = userName => `
  select 
    distinct f.id,
    f.email,
    f.name, 
    speed_technology,
    speed_course,
    round(avg(speed_technology):: decimal(2),3) as avg_speed_technology,
    round(avg(speed_course)::decimal(2),3) as avg_speed_course,
    case when avg(speed_technology)::decimal(2)!=0 then round(speed_technology/avg(speed_technology)::decimal(2),3) 
      end as development_speed_technology_intensity,
    case when avg(speed_course)::decimal(2)!=0 then round (speed_course/avg(speed_course)::decimal(2),3) 
      end as development_speed_course_intensity
  FROM
    (SELECT 
      distinct users.id,
      users.email,
      presets.name,
      round(count(distinct ec.technology_id)::decimal(2)/6::decimal(2),2) as speed_technology,
      round(count(distinct ec.course_id)::decimal(2)/6::decimal(2),2) as speed_course
    FROM users
    left join companies on users.company_id=companies.id
    left join employee_roadmaps on users.id=employee_roadmaps.employee_id
    left join public.preset_courses on employee_roadmaps.preset_id =public.preset_courses.preset_id
    left join (select users.id,
      public.employee_course_completions.course_id,
      rating,
      technology_id
      from users
      left join public.employee_course_completions on public.employee_course_completions.employee_id=users.id
      left join public.course_technologies on public.course_technologies.course_id=public.employee_course_completions.course_id
      where role='employee'
      ) as ec
      on ec.course_id=preset_courses.course_id
    left join public.course_technologies on public.course_technologies.course_id=preset_courses.course_id
    left join presets on presets.id=employee_roadmaps.preset_id
    where users.role='employee' and users.username = '${userName}'
    group by users.id, presets.name) as f
  group by f.name,f.id,speed_technology,speed_course,f.email
  order by f.id,f.name
`;

export const getActivityForManagerQuery = userId => `
WITH not_active AS (
	select users.company_id
	,public.employee_roadmaps.manager_id
	,count(users.id) from users
	full outer join
		employee_course_completions 
		on users.id = employee_course_completions.employee_id
	left join public.employee_roadmaps on public.employee_roadmaps.employee_id=users.id
	where users.role='employee'
	group by
		users.id,users.company_id,public.employee_roadmaps.manager_id
	having sum(employee_course_completions.id) is null
),
active AS (
	select users.company_id,public.employee_roadmaps.manager_id,count(users.id) from users
	full outer join
		employee_course_completions 
		on users.id = employee_course_completions.employee_id
	left join public.employee_roadmaps on public.employee_roadmaps.employee_id=users.id	
	where users.role='employee'
	group by
		users.id,users.company_id,manager_id
	having sum(employee_course_completions.id) is not null
)

select *
from(
select not_active.company_id,not_active.manager_id,'not_active' as status, count(*) 
from not_active
group by not_active.company_id,not_active.manager_id
union 
select active.company_id,active.manager_id,'active'as status, count(*) 
	from active
	group by active.company_id,active.manager_id
) as f
where manager_id = ${userId}
order by f.company_id,manager_id
`;

export const getIntensityForManagerQuery = userId => `
with s as (
  select distinct f.id,f.email,
  f.manager_id,speed_technology,speed_course,
  round(avg(speed_technology):: decimal(2),3) as avg_speed_technology,
  round(avg(speed_course)::decimal(2),3) as avg_speed_course,
  case when avg(speed_technology)::decimal(2)!=0 then round(speed_technology/avg(speed_technology)::decimal(2),3) end as development_speed_technology_intensity,
  case when avg(speed_course)::decimal(2)!=0 then round (speed_course/avg(speed_course)::decimal(2),3) end as development_speed_course_intensity
  from
  (SELECT distinct users.id,users.email,
  employee_roadmaps.manager_id,
  round(count(distinct ec.technology_id)::decimal(2)/6::decimal(2),2) as speed_technology,
  round(count(distinct ec.course_id)::decimal(2)/6::decimal(2),2) as speed_course
  FROM users
  left join companies on users.company_id=companies.id
  left join employee_roadmaps on users.id=employee_roadmaps.employee_id
  left join public.preset_courses on employee_roadmaps.preset_id =public.preset_courses.preset_id
  left join (select users.id,public.employee_course_completions.course_id,rating,technology_id
        from users
        left join public.employee_course_completions on public.employee_course_completions.employee_id=users.id
        left join public.course_technologies on public.course_technologies.course_id=public.employee_course_completions.course_id
        where role='employee'
        ) as ec
          on ec.course_id=preset_courses.course_id
  left join public.course_technologies on public.course_technologies.course_id=preset_courses.course_id
  where users.role='employee' 
  group by users.id,employee_roadmaps.manager_id) as f
  group by f.manager_id,f.id,speed_technology,speed_course,f.email
  order by f.id,f.manager_id)
  select manager_id, count(distinct id), development_speed_course_intensity from s
  where manager_id = 1
  group by manager_id, development_speed_course_intensity
`;