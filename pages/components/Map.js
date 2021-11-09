import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl';
import { useEffect } from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VsaTIwMDEiLCJhIjoiY2t2c2ducG8xMDFnbTJ2cDliYzhibnpteSJ9.kKpDvtw1czW2qCA26hRWAA';
 const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29, 39.39],
        zoom: 3 , 
        });
        });
      return (
        <Wrapper id = 'map'>

         
        </Wrapper>
      ) 
 }
 
 export default Map
 const Wrapper = tw.div`
flex-1
`
 