import React, {useContext, useEffect, useState} from 'react'
import NavBar from "./component/NavBar";
import AppRouter from "./component/AppRouter";
import {BrowserRouter, useHistory} from "react-router-dom";
import {PROJECTS_ROUTE} from "./utils/consts";
import {check} from "./http/userAPI";
import {Context} from "./index";
const App =()=> {
    const {user} = useContext(Context)
    const [loading,setLoading]=useState(true)
    const history = useHistory()
    useEffect(()=>{

        setTimeout(()=>{
            check().then(data=>{
                user.setCurrentUser(data)
                user.setIsAuth(true)
                history.push(PROJECTS_ROUTE)
            }).finally(()=>setLoading(false))
        },2000)

    },[])
  return (
      <BrowserRouter>
          <div>
              <NavBar />
              <AppRouter />
          </div>

      </BrowserRouter>
  );
}

export default App;
