import { useState, useEffect } from 'react'
import './styles/index.css'
import yarnData from "./yarnStock.json"
import languageBG from "./langBG.json"
import languageEN from "./langEN.json"

function App() {
  const [yarnStock, setYarnStock] = useState(yarnData);
  const [chosenKnitType, setChosenKnitType] = useState([]);
  const [stock, setStock] = useState(1);
  const imgPath ="src/assets/images/";
  const [language, setLanguage] = useState(languageBG);
  const [search, setSearch] = useState('');

  const handleKnitTypeOption = (value) => {
    
  }

  return (
    <>
    <div onClick={()=>setLanguage(languageEN)} className="languagepicker">
      EN
    </div>
    <div className="knittypecontainer">
    <label for="knittype">{language.knittypelabel}</label>
        <div onClick={(e)=>{
                    const value = e.target.getAttribute('data-value'); // Retrieve the value
                    setStock(value); // Set stock or perform other actions
                    e.stopPropagation();}
        } name="knittype" id="knittype" form="knittypeform">
        {language.knittypeoptions.map(item=> (
          <div className={"option " + (stock==item.value ? "selected" : "")} data-value={item.value}>{item.name}</div>
        ))}
        </div>
    </div>

    <div className="search">
      <input type="text"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}></input>
    </div>

    <div className="container">

       {yarnStock.map(item => (
        item.stock>=stock && item.color.includes(search) ?  
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
