export const TYPES = {
    FETCH_SHIPMENT: 'FETCH_SHIPMENT',
    SHIPMENT_SUCCESS: 'SHIPMENT_SUCCESS',
    SHIPMENT_FAILED: 'SHIPMENT_FAILED'
}

export const fetchShipment = (payload) => {
    return {
        type: TYPES.FETCH_SHIPMENT,
        payload
    }
}

export const shipmentSuccess = (payload) => {
    return {
        type: TYPES.SHIPMENT_SUCCESS,
        payload
    }
}


export const shipmentFailed = (payload) => {
    return {
        type: TYPES.SHIPMENT_FAILED,
        payload
    }
}