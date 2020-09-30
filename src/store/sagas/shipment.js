import {
   call,
   put,
   takeLatest
} from 'redux-saga/effects'
import request from '../../utils/request'
import {
   shipmentSuccess,
   shipmentFailed,
   TYPES
} from '../actions/shipment'

function* fetchShipment(action) {

   let url = '/shipments?' + new URLSearchParams (action.payload)

   try {
      const shipment = yield call(request, url);
      yield put(shipmentSuccess(shipment));
   } catch (e) {
      console.error(e.message)
      yield put(shipmentFailed(e.message));
   }
}

export default [
   takeLatest(TYPES.FETCH_SHIPMENT, fetchShipment)
];