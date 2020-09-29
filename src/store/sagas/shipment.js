import { call, put, takeLatest } from 'redux-saga/effects'
import { request } from '../../api'
import { shipmentSuccess, shipmentFailed, TYPES } from '../actions/shipment'

function* fetchShipment(action) {
   try {
      const shipment = yield call(request, '/shipments');
      yield put(shipmentSuccess(shipment));
   } catch (e) {
      console.error(e.message)
      yield put(shipmentFailed(e.message));
   }
}

export default [
   takeLatest(TYPES.FETCH_SHIPMENT, fetchShipment)
];
