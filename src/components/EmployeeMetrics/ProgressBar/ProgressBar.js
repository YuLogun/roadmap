import React from 'react';

import { useStyles } from './ProgressBar.styles';

const ProgressBar = ({
  valuePercent,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <p className={classes.label}>{valuePercent} %</p>
      <div className={classes.progressWrapper}>
        <div
          className={classes.progressResult}
          style={{ width: `${valuePercent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar