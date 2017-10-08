export const SET_ACTIVE_IMAGE_INDEX = "SET_ACTIVE_IMAGE_INDEX";
export const setActiveImageIndex = (index, section) => {
  return {
    type: SET_ACTIVE_IMAGE_INDEX,
    payload: {
      index: index,
      section: section
    }
  };
};
