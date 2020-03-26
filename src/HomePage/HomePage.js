import React from 'react'
import HomePageOne from '../HomePage/HomePageOne'
import HomePageTwo from '../HomePage/HomePageTwo'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const role = useSelector(state=>(state.userReduce.user.role));
  switch(role) {
    case 1:
      return <HomePageOne/>;
    case 2:
      return <HomePageTwo/>
    default: 
      return null
  }
}


export default HomePage