export const SET_PAGE_HEIGHT = "SET_PAGE_HEIGHT";
export const setPageHeight = (height) => {
  return {
    type: SET_PAGE_HEIGHT,
    payload: height
  };
};

export const SET_PAGE_WIDTH = "SET_PAGE_WIDTH";
export const setPageWidth = (width) => {
  return {
    type: SET_PAGE_WIDTH,
    payload: width
  };
};
