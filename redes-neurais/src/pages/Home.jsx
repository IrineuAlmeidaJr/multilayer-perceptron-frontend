import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { TableElements } from "../components/TableElements"

import "../styles/home.css"
import "../styles/windows-bar.css"

export function Home() {
  const [listTests, setListTests] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [results, setResults] = useState([]);

  function handleTest(element) {
    const arrayElement = element.split(',')
    setListTests((listTests) => [...listTests, arrayElement])    
    // console.log(arrayElement)
    // Fazer aqui a divisão do arquivo só para testar o algoritmo 
  }

  function showResults() {
    let numberColSelected = 0
    selectedColumns.forEach(item => item && numberColSelected++);
    if (numberColSelected > 1) {
      let endLine = listTests.length;
      let endCollumns = listTests[0].length;
      let items = []
      let listSelecetedItems = [];
      for(let lin=0; lin < endLine; lin++) {
        items = [];
        for(let col=0; col < endCollumns; col++) {
          selectedColumns[col] && items.push(listTests[lin][col]);
        }
        // [endCollumns-1 => é a última coluna que guarda as classes
        items.push(listTests[lin][endCollumns-1]);
        listSelecetedItems.push(items);   
      }
      // --> Para Teste e ver se está selecionando correto
      // listSelecetedItems.forEach(item => console.log(item));
      setResults(listSelecetedItems);
      listSelecetedItems.forEach(item => console.log(item));
      // ---> PRÓXIMO: pegar essa lista e jogar para o backend
      
    } else {
      console.log("Selecione ao menos duas colunas")
    }
  }

  // Essa função é só para teste
  function showData() {
    // console.log("Números de Elementos -> "+ listTests.length)
    // console.log("TESTE -> " + listTests[0][0])
    // listTests.forEach((element) => console.log(element))  
    console.log("Números de Elementos -> "+ (listTests.length-2))  
  }

  useEffect(() => {
    if (listTests?.[0]) {
      let tempArray = [];
      let numberOfCollumns = listTests[0].length - 1;
      for (let i=0; i < numberOfCollumns; i++) {
        tempArray.push(listTests[0][i]);
      }
      setColumns(tempArray);
    }         
  }, [listTests])

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
        showResults = {showResults}
        columns = {columns}
        setSelectedColumns = {setSelectedColumns}
        results = {results}
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

