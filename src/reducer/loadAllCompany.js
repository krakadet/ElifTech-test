import {GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS} from '../constans'

const initialState = {
    data: [],
    isLoading: false,
    error: ''

};

export default (company = initialState, action) => {
    const {type, payload} = action;

        switch (type){
            case GET_DATA_REQUEST:
                return {...company, isLoading:true  };

            case GET_DATA_SUCCESS:
                return{...company, data: payload, isLoading:false };

            case GET_DATA_FAILURE:
                return{...company, isLoading: false, error:'something wrong' }

            default:
        }
    return company
}