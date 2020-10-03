import React, { useState } from 'react';

//components
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './CourseAdder.styles';

const CourseAdder = ({
    isOpen, onCancel, onSubmit
}) => {
    const classes = useStyles();
    
    const [courseLink, setCourseLink] = useState('');

    const body = (
        <div className={classes.formWindow}>
                <div className={classes.modalHeader}>
                    <span className={classes.headerText}>Предложить курс</span>
                </div>
                <div className={classes.modalBody}>
                    <form className={classes.formControl}>
                        <TextField 
                            label="Ссылка"
                            onChange={(e) => setCourseLink(e.target.value)}
                            className={classes.inputField}
                        />
                    </form>
                </div>
                <div className={classes.modalFooter}>
                    {/* <Button 
                        variant="contained"
                        onClick={onCancel}
                    >
                        Отмена
                    </Button> */}
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={(e) => { onSubmit(e, courseLink) }}
                    >
                        Предложить
                    </Button>
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
            {body}
          </Modal>
        </div>
      );
}

export default CourseAdder;
