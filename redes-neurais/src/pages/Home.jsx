import { useState } from "react"
import { Header } from "../components/Header"
import { TableElements } from "../components/TableElements"

import "../styles/home.css"
import "../styles/windows-bar.css"

export function Home() {
  const [listTests, setListTests] = useState([]);

  function handleTest(element) {
    const arrayElement = element.split(',')
    setListTests((listTests) => [...listTests, arrayElement])    
    // console.log(arrayElement)
    // Fazer aqui a divisão do arquivo só para testar o algoritmo 
  }

  // Essa função é só para teste
  function showData() {
    // console.log("Números de Elementos -> "+ listTests.length)
    // console.log("TESTE -> " + listTests[0][0])
    // listTests.forEach((element) => console.log(element))  
    console.log("Números de Elementos -> "+ (listTests.length-2))  
  }

  return (
    <div className="box-body">
      <div className="windows-bar-956">
        <div className="bar-box-name">        
          <img src="./images/brain.png"  alt="imagem de celebro" />
          <h1>Redes Neurais 1.0</h1>
        </div>
        <div className="bar-box-buttons">
          <button 
          className="minimize"
          onClick={showData}>
            -
          </button>
          <button className="maximize">
            ▫
          </button>
          <button className="close">
            x
          </button>
        </div>
        
      </div>
      <div className="box-center">
        <Header
        handleTest = {handleTest}
        />
        <div className="box-table">
          <TableElements
          listTests = {listTests}
          />
        </div>
      </div>   
    </div>
  )
}

