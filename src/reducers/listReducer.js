import {
  FETCH_IMAGES,
  TOGGLE_COMPARE
} from '../actions';

const initialState = {
  images: []
}

const setImages = (state, images) => {
  return { ...state, images: images }
}

const toggleCompare = (state, id) => {
  state.images.forEach(image=> {
    if(image.id === id) {image.compare = !image.compare}
  })
  return { ...state, images: state.images }
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return setImages(state, action.payload.images);
    case TOGGLE_COMPARE:
      return toggleCompare(state, action.payload.id)
    default:
      return state;
  }
};


export default listReducer
