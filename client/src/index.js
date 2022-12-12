import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ProjectStore from "./store/ProjectStore";
import 'beautiful-react-diagrams/styles.css';

export const Context = createContext(null)
ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            projects:new ProjectStore(),
        }
    }>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
