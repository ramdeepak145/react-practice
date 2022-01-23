import React from 'react';

type StyleProps={
    style:React.CSSProperties
}


export const Style = (props:StyleProps) => {
  return (<div style={props.style}>
      hello
  </div>);
};
