import { useState, useEffect } from 'react'
import './styles/index.css'
import yarnData from "./yarnStock.json"

function App() {
  const [yarnStock, setYarnStock] = useState(yarnData);
  const [filteredData, setFilteredData] = useState([]);
  const [stock, setStock] = useState(1);
  const imgPath ="/assets/images/";

  return (
    <>
    
      <label for="cars">Искам да изплета:</label>
        <select onChange={(e)=>{setStock(e.target.value)}} name="cars" id="cars" form="carform">
          <option value="1">Бебешко одеяло</option>
          <option value="1">Шал</option>
          <option value="2">Детско одеяло</option>
          <option value="3">Голямо одеяло</option>
          <option value="4">Много голямо одеяло</option>
        </select>

        


    <div className="container">

       {yarnStock.map(item => (
        item.stock>=stock ?  
        <figure key={item.id} className="product-container">
          <img
            src={imgPath + item.id + ".jpg"} 
            alt={item.id}
            onError={(e) => { 
              e.currentTarget.onerror = null; // Prevents looping if both formats are missing
              e.currentTarget.src = imgPath + item.id + '.webp'; 
            }}
          />
          <figcaption className={item.stock>=3? "big-blanket" : ""}>{item.id} 
          </figcaption>
         </figure>: ""
         
      ))}
      </div>
    </>
  )
}

export default App
