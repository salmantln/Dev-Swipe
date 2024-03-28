// import React, { useRef, useEffect } from 'react';
// // import { usePlacesWidget } from "react-google-autocomplete";
// import AutoComplete from "react-google-autocomplete";
// const LocationInput = () => {
//   const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input

// //   const { ref } = usePlacesWidget({
// //     apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // Ensure your API key is correctly referenced
// //     onPlaceSelected: (place) => {
// //       console.log(place);
// //     },
// //     // Additional options...
// //   });

// //   useEffect(() => {
// //     // Assign the ref from usePlacesWidget to the input element
// //     if (inputRef.current) {
// //       ref(inputRef.current);
// //     }
// //   }, [ref]);

//   return (
//     <AutoComplete
//     className=''
//     apiKey={YOUR_GOOGLE_MAPS_API_KEY}
//     onPlaceSelected={(place) => console.log(place)}
//   />
//   );
// };

// export default LocationInput;
