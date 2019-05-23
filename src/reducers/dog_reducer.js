const dogsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PHOTO':
      if (action.dogPhoto.status === 'success') {
        return {...state, dogPhotos: [...state.dogPhotos, action.dogPhoto.message], imageReturn: true}
      }
      else {
        return {...state, imageReturn: false}
      }
    default:
      return state
  }
}

export default dogsReducer;
