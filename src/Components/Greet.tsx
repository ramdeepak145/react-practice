import React from 'react';

type GreetProps = {
  
        name: string
        mssg: number
        islogin: boolean
}


export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>{props.islogin ? "{props.name} {props.mssg}" : "welcome"}</h2>
        </div>);
};
