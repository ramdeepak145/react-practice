import React, { ProfilerProps } from 'react';
import { AuthLogin } from './AuthLogin';
import {ProfileProps} from './Profile';

type PrivateProps={
    isLoggedin:boolean
    Component:React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedin,Component}:PrivateProps) => {
  if(isLoggedin){
      return <Component name="ram"/>
  }
  else{
      return <AuthLogin/>
  }
};
