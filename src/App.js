import { useState } from "react";
import {data} from './data';
import './App.css';

function App() {

  const [person, setPerson] = useState(data);

  const removePerson = (id) => {
    let newData = person.filter (item => item.id!==id);
    setPerson(newData);
  }



return(
  <div>
<div className = "container">
      <h1>Birthday List</h1>
    </div>
    <div className="container">
      <h2>{person.length} Birthdays left</h2>
    </div>
{person.map((element =>{
  const {id, image, name, date, day} = element;
  return(
    <div key={id}> 
    
    <div className="container">
    <div className = "main">
      <img src = {image} width="350px" alt = "person"/>
      <h4> {id}. {name}</h4>
      <p>{date}</p>
      <p>{day}</p>
       <button className = "btn" onClick ={() => removePerson(id)}> Remove</button>
     </div>
     </div>
    </div>
  );
 
}))}
 <div className = "container">
    <button className="btnBig" onClick = {() => setPerson([])}>Delete all</button>
  </div>
</div>
);
}

export default App;
