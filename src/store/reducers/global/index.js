import { SET_NAME } from "../../actions";
import { Input } from "native-base";

const initialState = {
    name : '',
};

const globalExample = (state=initialState, action) => {
    switch(action.type){
        case SET_NAME : 
            return {
                ...state, name : action.payload
            };
        default : 
            return state;
    }
};

export default globalExample;