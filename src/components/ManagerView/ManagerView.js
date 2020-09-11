import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

//components
import Roadmap from "../Roadmap/Roadmap";
import UserList from "../UserList/UserList";

//test data
import { coursesTestData } from "../DeveloperView/coursesTestData";

//styles
import "./ManagerView.scss";

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    width: "100%",
    minWidth: "240px",
    maxWidth: "300px",

    [theme.breakpoints.down('sm')]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      maxWidth: "unset"
    }
  },
  managerPanelContainer: {
    display: 'flex',
    marginTop: "20px",

    [theme.breakpoints.down('sm')]: {
      margin: "20px 30px 0 30px",
      flexDirection: "column"
    }
  },
  managerBlock: {
    width: "100%",
    marginBottom: "30px",
    fontWeight: "bold",

    [theme.breakpoints.down('sm')]: {
      width: "auto",
      margin: 0
    }
  }
}));

const ManagerView = () => {
  const classes = useStyles();

  const getUserRoadmap = (userId) => {
    const result = coursesTestData.filter(
      (roadmap) => roadmap.employee_id === userId
    )[0];
    return result.roadmap;
  };

  const [currentRoadmap, setRoadmap] = useState(() => getUserRoadmap(0));

  const userRoadmapInit = (userId) => {
    let userRoadmap = getUserRoadmap(userId);
    setRoadmap(userRoadmap);
  };

  const getUsersData = () => {
    return [
      {
        id: 0,
        name: "Вася",
      },
      {
        id: 1,
        name: "Петя",
      }
    ];
  };

  return (
    <div className={classes.managerPanelContainer}>
      <div className={classes.sideMenu}>
        <div className={classes.managerBlock}>
          <span>Менеджер: Иванов И. И.</span>
        </div>
        <UserList
          usersData={getUsersData()}
          currentUserId={(userId) => userRoadmapInit(userId)}
        />
      </div>
      <div className="adminPanelContent">
        <Roadmap
          roadmapTitle={currentRoadmap.roadmap_title}
          coursesTestData={currentRoadmap.roadmap_info}
          handleState={() => {}}
          managerView
        />
      </div>
    </div>
  );
};

export default ManagerView;
