import React, { createContext } from "react";

const ApartmentContext = createContext({
    apartments: [],
    addApartment: (apartment) => {},
    removeApartment: (id) => {},
    showCurrentlySelectedApartment: (apartment) => {}
})

export default ApartmentContext;