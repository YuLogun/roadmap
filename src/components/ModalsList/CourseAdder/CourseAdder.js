import React, { useEffect, useState } from 'react';

//components
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './CourseAdder.styles';

const CourseAdder = ({
    isOpen, onCancel, onSubmit
}) => {
    const classes = useStyles();

    const [isLoading, setData] = useState(true);
    const [courseLink, setCourseLink] = useState('');
    // const [userList, setUsers] = React.useState([]);
    // const [presetsList, setPresets] = React.useState([]);

    // useEffect(() => {
    //     fetch('http://influx-roadmap.herokuapp.com/api/presets', presetsRequestOptions)
    //         .then(res => res.json())
    //         .then(data => {
    //             setPresets(data.data);
    //             setData(false);
    //             console.log(data.data);
    //         });
    // }, [])

    // const presetsRequestOptions = {
    //     method: 'GET',
    //     headers: {
    //         "Authorization": "Bearer 10|0xb75qbdLjI6cUQfLCI2jgCsA2NjNY0rNKAw2uP7"
    //     }
    // }
    // debugger;
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
                        />
                    </form>
                </div>
                <div className={classes.modalFooter}>
                    <Button 
                        variant="contained"
                        onClick={onCancel}
                    >
                        Отмена
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={(e) => { onSubmit(e, courseLink) }}
                    >
                        Отправить
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
