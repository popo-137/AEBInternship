import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserSite from "./site/UserSite";
import ApplicationSite from "./site/ApplicationSite";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserSite(),
        application: new ApplicationSite(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);