import React, {useEffect, useState} from "react"; 3.5
import Recipe from "./Recepie";
import './App.css';
import './index'

const App = () => {

  const APP_ID = "bfdf193b";
  const APP_KEY = "5c5d7d014071db05235a8fe4b8981836";

const [recipies, setRecipies] = useState([]);

  useEffect( ()  => {}, []);


  const getRecipies = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
  const data = await response.json();
  setRecipies(data.hits);
  console.log(data.hits);
  };
  
return (
<div className="App">
  <form className="search-form">
    <input className="search-bar" type="text" />
    <button className="search-button" type="submit"> 
    search
     </button>
    </form>
    {recipies.map(recipe => (
    <recipe />
    ))}
</div>
 );
};
export default App;