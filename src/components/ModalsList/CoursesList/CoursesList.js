import React, { useState } from 'react';

//components
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import { useStyles } from './CoursesList.styles';

const CoursesList = ({
    isOpen, onCancel, onSubmit, coursesList
}) => {
    const classes = useStyles();
    
    // const [email, setEmail] = useState('');

    console.log(coursesList);

    const body = (
        <div className={classes.formWindow}>
                <div className={classes.modalHeader}>
                    <span className={classes.headerText}>Список курсов</span>
                </div>
                <div className={classes.modalBody}>
                    {
                        coursesList ? (
                            coursesList.map(courseData => (
                                <div className={classes.courseListItem + ' course-list-item'}>
                                    <div className={classes.listItemDesc}>
                                        <span className={classes.courseTitle}>{courseData.name}</span>
                                        <a href={courseData.source}>Ссылка</a>
                                    </div>
                                    {
                                        // <div className={classes.completableBlock}>
                                        //     {
                                        //         courseData.completed_at ? (
                                        //             <div className={classes.starIconBlock + ' starIconBlockStyle'}>
                                        //                 <StarBorderIcon className={classes.markIcon}/>
                                        //                 <StarIcon className={classes.markIconFull + ' completedStar'}/>
                                        //             </div>
                                        //         ) : (
                                        //             <div className={classes.starIconBlock + ' starIconBlockStyle'}>
                                        //                 <StarBorderIcon className={classes.markIcon}/>
                                        //                 <StarIcon className={classes.markIconCompleted + ' completedStar'}/>
                                        //             </div>
                                        //         )
                                        //     }
                                        //     <span className={classes.markForCourseCompleted}>{courseData.employee_rating}</span>
                                        // </div>
                                    }
                                </div>
                            ))
                        ) : (
                            <div>Loading...</div>
                        )
                    }
                </div>
                <div className={classes.modalFooter}>
                    {/* <Button 
                        variant="contained" 
                        color="primary"
                        // onClick={(e) => { onSubmit(e, email) }}
                    >
                        Отправить
                    </Button> */}
                </div>
                
            </div>
      );

      return (
        <div>
          <Modal
            open={isOpen}
            onClose={onCancel}
            className={classes.modalWindow}
          >
            {
                coursesList ? body : (
                    <div>Loading...</div>
                )
            }
          </Modal>
        </div>
      );
}

export default CoursesList;
