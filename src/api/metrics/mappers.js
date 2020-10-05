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