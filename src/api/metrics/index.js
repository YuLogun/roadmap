import { QUERY_ENDPOINT } from '../../constants/api';
import { mapIntensity, mapPresetProgress, mapIntensity1 } from './mappers';
import { getIntensityOfTrainingQuery, getPresetProgressQuery, getIntensityForManagerQuery } from './queries';

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
    debugger;
    if (response.ok) {
      const result = await response.json();
      return await result.map(mapIntensity1);
      // result.map(mapPresetProgress);
    } else {
      alert('Ошибка запроса');
    }
  } catch (e) {
    alert('Неизвестная ошибка');
    console.error(e);
  }
};

export const fetchManagerMetrics = async (userId) => {
  const [testData1, testData2] = await Promise.all([
    fetchTestData1(userId),
    // fetchTestData2(userName)
  ])
  return { testData1, testData2 }
}