import * as types from './action-types';

export default {
    increment(){
        return {type:types.INCREMENT}
    },
    increment_saga(){
        return {type:types.INCREMENT_SAGA}
    },
    increment_async(){
        return function(dispatch,getState){
            setTimeout(function(){
                dispatch({type:types.INCREMENT})
            },1000)
        }
    }
}