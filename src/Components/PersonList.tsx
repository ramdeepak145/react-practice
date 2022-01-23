import React from 'react';

type PersonListProps = {
    nameslist: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return(
         <div>
      {props.nameslist.map(name =>{
          return(
            <h2>{name.first}{name.last}</h2>
          )
    })}
    </div>
    );
};