import {
  setPageHeight,
  setPageWidth
} from "actions/page_actions";

const sizePage = () => dispatch => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  dispatch(setPageHeight(height));
  dispatch(setPageWidth(width));
};

export default sizePage;
