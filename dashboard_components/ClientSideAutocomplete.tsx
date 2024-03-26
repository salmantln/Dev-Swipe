// components/ClientSideAutocomplete.js

import dynamic from 'next/dynamic';
import React from 'react';

const GooglePlacesAutocomplete = dynamic(() => import('react-google-autocomplete'), {
  ssr: false, // This line is important. It's what prevents server-side rendering.
});

const ClientSideAutocomplete = () => {
  return (
    <GooglePlacesAutocomplete
      apiKey="AIzaSyCLBm1vQj1UmWSnv8EXxYHuxLgcqSQ2KTg"
      onPlaceSelected={(place) => {
        console.log(place);
      }}
      // Pass any other props you need
    />
  );
};

export default ClientSideAutocomplete;
