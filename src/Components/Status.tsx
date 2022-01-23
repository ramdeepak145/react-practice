import React from 'react';

type StatusProps={
    status:string
}


export const Status = (props:StatusProps) => {
    let update;
  
      if(props.status==="loading"){
          update="loading.."
      }
      else if(props.status==='error'){
        update="error occurs"
      }
      return <div>
          <h2>Status update- {update}</h2>
  </div>;
};
