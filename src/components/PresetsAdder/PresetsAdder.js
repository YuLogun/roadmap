import React, { useState } from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

import { useStyles } from './PresetsAdder.styles';

const PresetsAdder = (
    { onCancel, onSubmit }
) => {
    const classes = useStyles();

    const [iPresetName, setIPresetName] = useState('');
    const [iPresetCurrentTech, setIPresetCurrentTech] = useState('');
    const [techList, setTechList] = useState([ ]);

    const enterTechHandler = (e, value) => {
        if (e.key === 'Enter' && e.target.value.length > 0) {
            let tempPresetsList = techList;
            tempPresetsList.push(value);
            setTechList(tempPresetsList);

            e.target.value = '';
            return setIPresetCurrentTech('');
        }
    }

    const deleteTechItem = (e, index) => {
        setTechList(techList.filter((tech, tIndex) => tIndex !== index));
    }

    return (
        <div className={classes.presetsAdderContainer}>
            <div className={classes.presetsAdderHeader}>
                <ArrowBackIosIcon onClick={onCancel}/>
                <div className={classes.presetAdderTitle}>
                    <span>Создание роадмапа</span>
                </div>
            </div>
            <div className={classes.presetsAdderBody}>
                <form className={classes.formBody}>
                    <div className={classes.formInputs}>
                        <TextField
                            className={classes.formField}
                            label="Название роадмапа"
                            onChange={(e) => setIPresetName(e.target.value)}
                        />
                        <TextField
                            className={classes.formField}
                            label="Название технологий"
                            onChange={(e) => setIPresetCurrentTech(e.target.value)}
                            onKeyPress={(e) => enterTechHandler(e, iPresetCurrentTech)}
                            helperText='Для добавления технологии нажмите "Enter"'
                        />
                        <div className={classes.techTags}>
                            {
                                techList.length > 0 ? (
                                    techList.map((tech, index) => (
                                        <Chip
                                            label={tech}
                                            onDelete={(e) => deleteTechItem(e, index)}
                                            className={classes.techTagItem}
                                        />
                                    ))
                                ) : (
                                    <div></div>
                                )
                            }
                        </div>
                    </div>
                    <div className={classes.formButtons}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => onSubmit(e, iPresetName, techList)}
                        >
                            ОК
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PresetsAdder;