import { TOGGLE_STATE } from "../constants/action-types";

function middleWare({ getState, dispatch }) {
  return function(next){
    return function(action){

    

    return next(action);
    }
  }
}

export default middleWare;