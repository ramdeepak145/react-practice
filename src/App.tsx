import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Oscar } from './Components/Oscar';
import { Heading } from './Components/Heading';
import { Status } from './Components/Status';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Style } from './Components/Style';
import { Login } from './Components/State/Login';
import { User } from './Components/State/User';
import { Counter } from './Components/State/Counter';
import { Private } from './Components/Auth/Private';
import { Profile } from './Components/Auth/Profile';

function App() {

  const PersonName = {
    first: "ram",
    last: "deepak",
  }

  const NameList = [
    {
      first: "ram",
      last: "deepak",
    },
    {
      first: "manoj",
      last: "bhargav",
    }
  ]

  return (
    <div className="App">
      <Greet name={"Ram"} mssg={20} islogin={false} />
      <Person names={PersonName} />
      <PersonList nameslist={NameList}/>
      <Oscar>
        <Heading>
          Oscar goes to me
        </Heading>
      </Oscar>
      <Status status="error"/>
      <Button 
        handleClick={(event)=>{
          console.log("Button Clicked",event);
        }}
      />
      <Input value="" handleChange={(event)=>{
        console.log(event);
      }}/>
      <Style style={{border:"1px solid black",padding:"1rem"}}/>
      <Login/>
      <User />
      <Counter/>
      <Private isLoggedin={true} Component={Profile}/>
    </div>
  );
}

export default App;
