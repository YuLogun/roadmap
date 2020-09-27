import React, { useState } from 'react';

//components
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './InviteSender.styles';

const InviteSender = ({
    isOpen, onCancel, onSubmit
}) => {
    const classes = useStyles();
    
    const [email, setEmail] = useState('');

    const body = (
        <div className={classes.formWindow}>
                <div className={classes.modalHeader}>
                    <span className={classes.headerText}>Пригласить сотрудника</span>
                </div>
                <div className={classes.modalBody}>
                    <form className={classes.formControl}>
                        <TextField 
                            label="Почта"
                            onChange={(e) => setEmail(e.target.value)}
                            className={classes.inputField}
                        />
                    </form>
                </div>
                <div className={classes.modalFooter}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={(e) => { onSubmit(e, email) }}
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

export default InviteSender;
