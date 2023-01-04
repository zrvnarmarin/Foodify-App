import React, { createContext } from "react";

const LoginContext = createContext({
    user: {
        username: '',
        password: ''
    },
    users: [],
    isUserLogged: false,
    validateForm: (user) => {}
})