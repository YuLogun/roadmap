import { QUERY_ENDPOINT } from '../../constants/api';
import { mapIntensity, mapPresetProgress, mapIntensity1 } from './mappers';
import { getIntensityOfTrainingQuery, getPresetProgressQuery, getIntensityForManagerQuery, getActivityForManagerQuery } from './queries';

export const fetchPresetProgress = async (usersName) => {
  try {
    const response = await fetch(`${QUERY_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        metrics: getPresetProgressQuery(usersName)
      })
    });
    if (response.ok) {
      const result = await response.json();
      return await result.map(mapPresetProgress);
    } else {
      alert('Ошибка запроса');
      return null;
    }
  } catch (e) {
    alert('Неизвестная ошибка');
    console.error(e);
  }
};


export const fetchIntensityOfTraining = async (usersName) => {
  try {
    const response = await fetch(`${QUERY_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        metrics: getIntensityOfTrainingQuery(usersName)
      })
    });
    if (response.ok) {
      const result = await response.json();
      return await result.map(mapIntensity);
    } else {
      alert('Ошибка запроса');
      return null;
    }
  } catch (e) {
    alert('Неизвестная ошибка');
    console.error(e);
  }
};

export const fetchEmployeeMetrics = async (userName) => {
  const [presetProgress, intensityOfTraining] = await Promise.all([
    fetchPresetProgress(userName),
    fetchIntensityOfTraining(userName)
  ]);
  return { presetProgress, intensityOfTraining };
};

export const fetchTestData1 = async (userId) => {
  try {
    const response = await fetch(`${QUERY_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        metrics: getIntensityForManagerQuery(userId)
      })
    });
    if (response.ok) {
      const result = await response.json();
      return await result.map(mapIntensity1);
    } else {
      alert('Ошибка запроса');
      return null;
    }
  } catch (e) {
    alert('Неизвестная ошибка');
    console.error(e);
  }
};

export const fetchTestData2 = async (userName) => {
  try {
    const response = await fetch(`${QUERY_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        metrics: getActivityForManagerQuery(userName)
      })
    });
    if (response.ok) {
      const result = await response.json();
      return await result
      // result.map(mapIntensity1);
    } else {
      alert('Ошибка запроса');
      return null;
    }
  } catch (e) {
    alert('Неизвестная ошибка');
    console.error(e);
  }
};

export const fetchManagerMetrics = async (userId, userName) => {
  const [testData1, testData2] = await Promise.all([
    fetchTestData1(userId),
    fetchTestData2(userId)
  ]);
  return { testData1, testData2 };
}