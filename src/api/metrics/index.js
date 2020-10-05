import { QUERY_ENDPOINT } from '../../constants/api';
import { mapIntensity, mapPresetProgress } from './mappers';
import { getIntensityOfTrainingQuery, getPresetProgressQuery } from './queries';

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