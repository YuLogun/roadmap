import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoursesByLevelAndTechnology } from '../../redux/reducer';


import Fab from '@material-ui/core/Fab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import CoursesList from '../ModalsList/CoursesList/CoursesList';

import { useStyles } from './RoadmapLineView.styles';
import './RoadmapLineView.scss';

import { testRoadmapsData } from '../../roadmaps-data'

const RoadmapLineView = (
    { currentRoadmap }
) => {
    const classes = useStyles();

    const currentCoursesList = useSelector(state => state.currentCoursesList);
    const dispatch = useDispatch();

    const [checked, setChecked] = React.useState([0]);
    const [technologyIndex, setTechIndex] = useState(0);
    const [coursesListIsOpen, setCoursesListIsOpen] = useState(false);

    const incTechIndex = () => {
        let temp = technologyIndex;
        setTechIndex(temp++);
    }

    const roadmapMapper = (roadmap) => {
        let result = {
            slug: roadmap.preset.slug,
            name: roadmap.preset.name,
            description: roadmap.preset.description,
            levels: [ ]
        };

        for (let levelName in roadmap.preset.courses) {
            let currentLevel = roadmap.preset.courses[levelName];
            let level = {
                name: levelName,
                technologies: [ ]
            }
            for (let technologyName in currentLevel) {
                let technology = {
                    name: technologyName,
                    courses: currentLevel[technologyName]
                }
                level.technologies.push(technology);
            }
            result.levels.push(level);
        }
        return result;
    }

    const showAllCoursesHandler = (level, technology) => {
        dispatch(getCoursesByLevelAndTechnology(level, technology));
        setCoursesListIsOpen(true);
    }

    const coursesListOnCancelHandler = () => {
        setCoursesListIsOpen(false);
    }

    const roadmap = roadmapMapper(currentRoadmap);
    console.log(roadmap);

    return (
        <div className={classes.roadmapContainer}>
            <CoursesList 
                isOpen={coursesListIsOpen}
                onCancel={coursesListOnCancelHandler}
                coursesList={currentCoursesList}
            />
            {
                roadmap.levels.map(level => {
                    let technologies = level.technologies.map((technology, index) => {
                        return (
                            <div className={classes.technologyBlock}>
                                <div className={classes.roadmapLine}></div>
                                <div className={index % 2 === 0 ? classes.leftSideCourses : classes.rightSideCourses}>
                                    <div className={classes.coursesHeader}>
                                        <span className={classes.coursesTitle}>{technology.name}</span>
                                    </div>
                                    <div className={classes.coursesList}>
                                        {
                                            technology.courses.map((course, index) => (
                                                <div className={classes.courseListItem + ' course-list-item'}>
                                                    <div className={classes.listItemDesc}>
                                                        {/* <span className={classes.courseTitle}>{course.name}</span> */}
                                                        <a className={classes.courseTitle} target="_blank" href={course.source}>{course.name}</a>
                                                    </div>
                                                    {
                                                        <div className={classes.completableBlock}>
                                                            {
                                                                course.completed_at ? (
                                                                    <div className={classes.starIconBlock + ' starIconBlockStyle'}>
                                                                        <StarBorderIcon className={classes.markIcon}/>
                                                                        <StarIcon className={classes.markIconFull + ' completedStar'}/>
                                                                    </div>
                                                                ) : (
                                                                    <div className={classes.starIconBlock + ' starIconBlockStyle'}>
                                                                        <StarBorderIcon className={classes.markIcon}/>
                                                                        <StarIcon className={classes.markIconCompleted + ' completedStar'}/>
                                                                    </div>
                                                                )
                                                            }
                                                            <span className={classes.markForCourseCompleted}>{course.employee_rating}</span>
                                                        </div>
                                                    }
                                                </div>
                                            ))
                                        }
                                        <div 
                                            className={classes.showAllLinkBlock}
                                            onClick={(e) => showAllCoursesHandler(level.name, technology.name)}
                                        >
                                            <span className={classes.showAllLink}>Показать все</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.technologyNameBlock}>
                                    <Fab 
                                        variant="extended"
                                        color="primary"
                                    >
                                    {technology.name}
                                    </Fab>
                                </div>
                            </div>
                        )}
                    );

                    return (
                        <div>
                            <div className={classes.levelTitleBlock}>
                                <span className={classes.levelTitle}>{level.name}</span>
                            </div>
                            {technologies}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default RoadmapLineView