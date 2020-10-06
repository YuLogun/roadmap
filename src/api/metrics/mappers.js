const preparePercentValue = value => (parseFloat(value) * 100).toFixed(2);

export const mapPresetProgress = presetProgressResponse => {
  const {
    name,
    share_of_completed_courses,
    share_of_completed_technologies
  } = presetProgressResponse;
  return {
    name,
    shareOfCompletedCoursesPercent: preparePercentValue(share_of_completed_courses),
    shareOfCompletedTechnologiesPercent: preparePercentValue(share_of_completed_technologies),
  };
};

export const mapIntensity = intensityResponse => {
  const {
    name,
    development_speed_course_intensity,
    development_speed_technology_intensity
  } = intensityResponse;
  return {
    name,
    courseIntensity: development_speed_course_intensity,
    technologyIntensity: development_speed_technology_intensity,
  };
};

export const mapIntensity1 = intensityResponse => {
  const {
    manager_id,
    development_speed_course_intensity,
    count
  } = intensityResponse;
  return {
    manager_id,
    courseIntensity: development_speed_course_intensity,
    technologyIntensity: count,
  };
};