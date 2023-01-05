import React, { createContext } from "react";

const ApartmentContext = createContext({
    addApartment: (apartment) => {},
})

export default ApartmentContext;