import {combineReducers} from 'redux';
import company from './loadAllCompany'



export default combineReducers({
    allCompany: company,

})