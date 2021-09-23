export const FETCH_IMAGES= 'FETCH_IMAGES';
export const TOGGLE_COMPARE= 'TOGGLE_COMPARE';

export const fetchImages = (data) => async dispatch => {
  dispatch({ type: FETCH_IMAGES, payload: {images: data}});
};

export const toggleCompare = (id) => async dispatch => {
  debugger
  dispatch({ type: TOGGLE_COMPARE, payload: {id: id}});
};

