const setCanvasDraggable = (state, action) => {
  //compute and return the new state
  if(state === undefined) {
    return false;
  }

  if (action.type === 'SET_CANVAS_DRAGGABLE') {
    return action.payload;
  } else {
    return state;
  }
}

export default setCanvasDraggable;
