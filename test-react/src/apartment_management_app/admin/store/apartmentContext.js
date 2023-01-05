import React, { createContext } from "react";

const ApartmentContext = createContext({
    addApartment: (apartment) => {},
    removeApartment: (id) => {}
})

export default ApartmentContext;