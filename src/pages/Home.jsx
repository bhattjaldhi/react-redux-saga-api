import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShipment } from '../store/actions/shipment'

const Home = () => {
  const shipment = useSelector(state => state.home.shipment);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchShipment());
  }, [])

  console.log(shipment)

  return (
    <>
      <h1>Balance: </h1>
    
    </>
  )
}

export default Home;