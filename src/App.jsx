import { useState, useEffect } from 'react'
import './styles/index.css'
import yarnData from "./yarnStock.json"
import language from "./langBG.json"

function App() {
  const [yarnStock, setYarnStock] = useState(yarnData);
  const [filteredData, setFilteredData] = useState([]);
  const [stock, setStock] = useState(1);
  const imgPath ="src/assets/images/";

  return (
    <>
    <div className="knittypecontainer">
    <label for="knittype">{language.knittypelabel}</label>
        <div onClick={(e)=>{setStock(e.target.value); e.stopPropagation();}} name="knittype" id="knittype" form="knittypeform">
          <option value="1">{language.knittypeoption1}</option>
          <option value=".5">{language.knittypeoption2}</option>
          <option value="2">{language.knittypeoption3}</option>
          <option value="3">{language.knittypeoption4}</option>
          <option value="4">{language.knittypeoption5}</option>
        </div>
        </div>
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
