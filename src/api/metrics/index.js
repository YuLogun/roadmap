import { QUERY_ENDPOINT } from '../../constants/api';
import { mapPresetProgress } from './mappers';

const getPresetProgressQuery = id => `
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
  WHERE users.role='employee' and users.id = ${id} 
  GROUP BY users.id,presets.name,employee_roadmaps.manager_id
`;

export const fetchPresetProgress = async (id) => {
  try {
    const response = await fetch(`${QUERY_ENDPOINT}?query=${encodeURI(getPresetProgressQuery(id))}`);
    if (response.ok) {
      const result = await response.json();
      return await result.map(mapPresetProgress);
    } else {
      alert('Ошибка запроса');
    }
  } catch (e) {
    alert('Неизвестная ошибка');
    console.error(e);
  }
};