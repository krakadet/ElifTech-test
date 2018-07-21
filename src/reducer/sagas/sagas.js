import { takeEvery } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects'
import axios from 'axios'

export function* companyRequest () {
    try {
        const data = yield call(axios.get, `https://eliftechcomp.herokuapp.com/all_companies`, );

        console.log(data)
        const company = data.data;
        console.log(company)
        yield put ({type:'GET_DATA_SUCCESS', payload : company})
    } catch (e) {
        yield put ({type:'GET_DATA_FAILURE'})
    }
}



export default function* rootSaga() {
    yield takeEvery('GET_DATA_REQUEST', companyRequest)
}