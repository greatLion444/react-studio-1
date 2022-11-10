import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [items, setItems] = useState([])
  const [sum, totalSum] = useState(0)
  return (
    <div className="App">

        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <p>
          <BakeryItem name={item.name} image={item.image} price={item.price}/>
          <button onClick={() => {setItems([...items, item]); totalSum(sum + item.price)}}>Add To Cart</button>
        </p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
          {items.map((item) => (
            <div>
            <p>{item.name}</p>
            </div>
          ))}
          <p> total =  {sum} </p>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}


export default App;
