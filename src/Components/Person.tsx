import React from 'react';

type PersonProps = {
    names: {
        first: string
        last: string
    }
}


export const Person = (props: PersonProps) => {
    return <div>
        <h2>{props.names.first}{props.names.last}</h2>
    </div>;
};
