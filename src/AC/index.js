import {GET_DATA_REQUEST} from '../constans'


export function loadAllCompany(data) {
    return {
        type: GET_DATA_REQUEST,
        isLoading: false
    }
}