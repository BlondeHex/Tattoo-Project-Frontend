import React from 'react'
import {useEffect, setState} from 'react'
import { Route, Redirect } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

import {GET_USER_REQUEST} from '../constants/api'


const PrivateRoute = ({component: Component, ...rest}) => {
  const [user, setUser] = setState("");
  const [isLoading, setIsLoading] = setState(false);
  const [isError, setIsError] = setState(false);

  const fetchUser = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = Axios.get(GET_USER_REQUEST, {
          headers: { Authorization: Cookies.get("token") }
        })
          setUser(response.user);

      } catch (error){
        setIsError(true)
      }

    setIsLoading(false)
  }


  useEffect( () => {
    fetchUser()
    if (isError) 
      return (
        <Redirect to="/"/>
      )

    if (isLoading) 
      return <div>Is Loading</div>

    return (
      <Route 
        {...rest}
        render = {props =>
          user!== null? (<Component {...props}/>):(<Redirect to="/"/>)
        }
      />
    )
    
  })
}

PrivateRoute.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  component: PropTypes.any.isRequired
};

export default PrivateRoute