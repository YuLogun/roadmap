import React, { useEffect, useState } from 'react';
import { getDevelopers, getAllPresets, setCurrentPreset, savePresetOnDeveloper, savePreset } from '../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PresetSetter from '../ModalsList/PresetSetter/PresetSetter';
import PresetsAdder from '../PresetsAdder/PresetsAdder'

//styles
import { useStyles } from './PresetsList.styles';
import './PresetsList.styles.scss';

const PresetsList = ({ currentUsername }) => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState(-1);
  const [presetModalIsOpen, setPresetModalOpen] = useState(false);
  const [presetAdderIsOpen, setPresetAdderOpen] = useState(false);

//   const developersList = useSelector(state => state.developersList);
  const presetsList = useSelector(state => state.presetsList);
  const employeeList = useSelector(state => state.developersList);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPresets());
  }, []);

//   Функция для выбора пользователя в списке
  const handleListItemClick = (event, username) => {
    setSelectedUser(username);
    currentUsername(username);
  };

  const initCurrentPreset = (e, preset) => {
    setPresetModalOpen(true);
    dispatch(setCurrentPreset(preset))
  }

  const onCancelPresetSetterModal = () => {
    setPresetModalOpen(false);
  }

  const onSubmitPresetSetterModal = (e, username, preset) => {
    dispatch(savePresetOnDeveloper(username, preset.slug));
    setPresetModalOpen(false);
  }

  const onCancelPresetAdder = () => {
    // debugger;
    setPresetAdderOpen(false);
  }

  const onSubmitPresetAdder = (e, presetName, techList) => {
    dispatch(savePreset(presetName, "", techList));
    setPresetAdderOpen(false);
  }

  return (
    <div>
      <PresetSetter
        isOpen={presetModalIsOpen}
        onCancel={onCancelPresetSetterModal}
        onSubmit={onSubmitPresetSetterModal}
        employeeList={employeeList}
      />
      {
        presetAdderIsOpen ? (
          <PresetsAdder
            onCancel={onCancelPresetAdder}
            onSubmit={onSubmitPresetAdder}
          />
        ) : (
          <div className="wideScreenList">
            <div className="presetListHeaderBlock">
              <span className="presetListHeaderTitle">Роадмапы</span>
            </div>
            <div className="presetNavBlock">
              <div className="presetFinderBlock">
                <svg className="finderIcon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.80357 12.1429C10.0088 12.1429 12.6071 9.64844 12.6071 6.57143C12.6071 3.49441 10.0088 1 6.80357 1C3.59835 1 1 3.49441 1 6.57143C1 9.64844 3.59835 12.1429 6.80357 12.1429Z" stroke="#858585"/>
                  <path d="M11.3174 10.9048L14.5416 14" stroke="#858585" stroke-linecap="square"/>
                </svg>
                <input className="finderInput" type="text" placeholder="Найти роадмап"/>
              </div>
              <div className="presetBtnBlock">
                <Button 
                  variant="contained"
                  color="primary"
                  onClick={(e) => setPresetAdderOpen(true)}
                  className={classes.navButtonElem + " navButtonElem"}
                >
                    <span className="navButtonTitle">Создать</span>
                </Button>
              </div>
            </div>
            {/* <div className={classes.userListHeader}>
                <div className={classes.finderInputBlock}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Найти по имени / должности" className={classes.finderInputField} />
                        </Grid>
                        <Grid item>
                            <SearchIcon />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.adderButtonBlock}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      onClick={(e) => setPresetAdderOpen(true)}
                    >
                        Добавить +
                    </Button>
                </div>
            </div> */}
            <div className="presetListBlock">
            <div className={classes.presetsList}>
            {
                presetsList ? (
                    presetsList.map((presetData, index) => (
                        <Card
                          className={classes.presetItem}
                          onClick={(e) => initCurrentPreset(e, presetData)}
                        >
                            <CardContent>
                                <div className={classes.emptyCardIcon}></div>
                                <Typography variant="body2" component="p">
                                    {presetData.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                  <div>Loading...</div>
                )
            }
            </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default PresetsList;
