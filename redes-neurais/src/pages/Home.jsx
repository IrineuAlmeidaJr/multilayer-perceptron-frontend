import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { TableElements } from "../components/TableElements"

import "../styles/home.css"
import "../styles/windows-bar.css"

export function Home() {
  const [listTraining, setListTraining] = useState([]);
  const [listTests, setListTests] = useState([]);
  const [columns, setColumns] = useState([]);
  const [calculationParameters, setCalculationParameters]  = useState("");
  const [selectedColumns, setSelectedColumns] = useState([]);

  function handleListTraining(element) {
    const arrayElement = element.split(',')
    setListTraining((listTraining) => [...listTraining, arrayElement])    
    // console.log(arrayElement)
    // Fazer aqui a divisão do arquivo só para testar o algoritmo 
  }

  function handleListTest(element) {
    const arrayElement = element.split(',')
    setListTests((listTests) => [...listTests, arrayElement])    
    // console.log(arrayElement)
    // Fazer aqui a divisão do arquivo só para testar o algoritmo 

  }

  function sendData(trainingParameters) {
     // Mudar URL para local
     const url = "http://localhost:8080/entrada";
     fetch(url,{
         method: "POST",
         headers: {
             'Content-type': 'application/json'
         },
         body: JSON.stringify(trainingParameters)
     })
     .then()
     .catch(function(err) {
         console.error('Failed retrieving information', err);
     })
  }

  function sendTest(testParameters) {
    // Mudar URL para local
    const url = "http://localhost:8080/matriz";
    fetch(url,{
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(testParameters)
    })
    .then()
    .catch(function(err) {
        console.error('Failed retrieving information', err);
    })
  }

  function handleTraining(parameters) {
    let numberColSelected = 0
    selectedColumns.forEach(item => item && numberColSelected++);
    if (numberColSelected > 1) {
      let endLine = listTraining.length;
      let endCollumns = listTraining[0].length;
      let items = []
      let listSelecetedItems = [];
      for(let lin=0; lin < endLine; lin++) {
        items = [];
        for(let col=0; col < endCollumns; col++) {
          selectedColumns[col] && items.push(listTraining[lin][col]);
        }
        // [endCollumns-1 => é a última coluna que guarda as classes
        items.push(listTraining[lin][endCollumns-1]);
        listSelecetedItems.push(items);   
      }

      setCalculationParameters(parameters);
      
      const trainingParameters = {
        calculationParameters: parameters,
        trainingData: listSelecetedItems
      };

      sendData(trainingParameters);
      
    } else {
      console.log("Selecione ao menos duas colunas")
    }
  }

  function handleTests() {
    if ((listTests.length-2) > 0) {
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
          // endCollumns-1 => é a última coluna que guarda as classes
          items.push(listTests[lin][endCollumns-1]);
          listSelecetedItems.push(items);   
        }
        
        const testParameters = {
          calculationParameters: calculationParameters,
          trainingData: listSelecetedItems
        };

        sendTest(testParameters);
        
      } else {
        console.log("Selecione ao menos duas colunas")
      }
    }    
  }

  // Essa função é só para teste
  function showData() {
    if ( listTests?.[0]) {
      handleTests();
    }    
    console.log("Números arquivos Treino -> "+ (listTraining.length-1))
    console.log("Números arquivos Teste -> "+ (listTests.length))
  }

  useEffect(() => {
    if (listTraining?.[0]) {
      let tempArray = [];
      let numberOfCollumns = listTraining[0].length - 1;
      for (let i=0; i < numberOfCollumns; i++) {
        tempArray.push(listTraining[0][i]);
      }
      setColumns(tempArray);
    }  
  }, [listTraining])

  // Esse useEffect faz com que quando carregar novo arquivo ele já faça o calculo da 
  // matriz de confusão
  // useEffect(() => {
  //   if ( listTests?.[0]) {
  //     handleTests();
  //   }   
  // }, [listTests])

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
        handleListTraining = {handleListTraining}
        handleListTest = {handleListTest}
        handleTraining = {handleTraining}
        handleTests = {handleTests}
        setListTests = {setListTests}
        columns = {columns}
        setSelectedColumns = {setSelectedColumns}
        />
        <div className="box-table">
          <TableElements
          listTraining = {listTraining}
          listTests={listTests}
          />
        </div>
      </div>   
    </div>
  )
}

