import React, { createContext } from "react";

const ApartmentContext = createContext({
    apartments: [],
    currentlySelectedApartment: {},
    addApartment: (apartment) => {},
    removeApartment: (id) => {},
    showCurrentlySelectedApartment: (apartment) => {}
})

export default ApartmentContext;