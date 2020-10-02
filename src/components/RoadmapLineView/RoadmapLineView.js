import React, { useState } from 'react';


import Fab from '@material-ui/core/Fab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import { useStyles } from './RoadmapLineView.styles';
import './RoadmapLineView.scss';

import { testRoadmapsData } from '../../roadmaps-data'

const RoadmapLineView = (
    { currentRoadmap }
) => {
    const classes = useStyles();

    // const [currentRoadmap, setCurrentRoadmap] = useState(testRoadmapsData[0]);
    // conts currentRoadmap = 

    const [checked, setChecked] = React.useState([0]);
    const [technologyIndex, setTechIndex] = useState(0);

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

    const roadmap = roadmapMapper(currentRoadmap);
    console.log(roadmap);

    return (
        <div className={classes.roadmapContainer}>
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
                                                        <span className={classes.courseTitle}>{course.name}</span>
                                                        <a href={course.source}>Ссылка</a>
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
                                        <div className={classes.showAllLinkBlock}>
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




                // roadmap.levels.map(level => {
                //     let levelHeader = (
                //         <div className={classes.levelTitle}>
                //             <h1>{level.name}</h1>
                //         </div>
                //     );

                //     let technologies = level.technologies.map(technology => (
                //         <div className={classes.technologyBlock}>
                //             <div className={classes.roadmapLine}></div>
                //             <div className={classes.coursesListBlock}>
                //                 <List className={classes.root}>
                //                     {[0, 1, 2, 3].map((value) => {
                //                         const labelId = `checkbox-list-label-${value}`;

                //                         return (
                //                         <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                //                             <ListItemIcon>
                //                             <Checkbox
                //                                 edge="start"
                //                                 checked={checked.indexOf(value) !== -1}
                //                                 tabIndex={-1}
                //                                 disableRipple
                //                                 inputProps={{ 'aria-labelledby': labelId }}
                //                             />
                //                             </ListItemIcon>
                //                             <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                //                         </ListItem>
                //                         );
                //                     })}
                //                 </List>
                //             </div>
                //             <div className={classes.technologyNameBlock}>
                //                 <span className={classes.technologyTitle}>{technology.name}</span>
                //             </div>
                //         </div>
                //     ));

                //     return levelHeader + technologies
                // })
            }
            {/* <div className={classes.levelTitle}>
                <h1>Junior</h1>
            </div>
            <div className={classes.technologyBlock}>
                <div className={classes.roadmapLine}></div>
                <div className={classes.coursesListBlock}>
                    <List className={classes.root}>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItem>
                            );
                        })}
                    </List>
                </div>
                <div className={classes.technologyNameBlock}>
                    <span className={classes.technologyTitle}>Технология 1</span>
                </div>
            </div>
            <div className={classes.technologyBlock}>
                <div className={classes.roadmapLine}></div>
                <div className={classes.coursesListBlock}>
                    <List className={classes.root}>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItem>
                            );
                        })}
                    </List>
                </div>
                <div className={classes.technologyNameBlock}>
                    <span className={classes.technologyTitle}>Технология 2</span>
                </div>
            </div>
            <div className={classes.technologyBlock}>
                <div className={classes.roadmapLine}></div>
                <div className={classes.coursesListBlock}>
                    <List className={classes.root}>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItem>
                            );
                        })}
                    </List>
                </div>
                <div className={classes.technologyNameBlock}>
                    <span className={classes.technologyTitle}>Технология 3</span>
                </div>
            </div>
            <div className={classes.levelTitle}>
                <h1>Middle</h1>
            </div>
            <div className={classes.technologyBlock}>
                <div className={classes.roadmapLine}></div>
                <div className={classes.coursesListBlock}>
                    <List className={classes.root}>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItem>
                            );
                        })}
                    </List>
                </div>
                <div className={classes.technologyNameBlock}>
                    <span className={classes.technologyTitle}>Технология 5</span>
                </div>
            </div> */}
        </div>
    )
}

export default RoadmapLineView