import { useState } from "react"
import { ModalSelect } from './ModalSelect';
import { ModalResults } from "./ModalResults";

import '../styles/header.css'

export function Header(props) {    
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const handleOpenSelect = () => setIsOpenSelect(true);
    const handleCloseSelect = () => setIsOpenSelect(false);
    const [data, setData] = useState([]);

    function getData() {
        let tempData = [];
        tempData.push(["Iterações", "Erro"])
        fetch("http://localhost:8080/grafico")
        .then(response => {
                response.json()
                .then(data => {
                    data.forEach(item => {
                        tempData.push([item.pos, item.mediaErroRede])                    
                    })
                
            })                   
        }) 
        .then(setData(tempData)) 
        .then(tempData)
        .catch(function(err) {
            console.error('Failed retrieving information', err);
        })
   
       //  console.log(trainingParameters); 
     }

    const [isOpenResults, setIsOpenResults] = useState(false);
    const handleOpenResults = () => {
        getData();
        setTimeout(() => {  
            props.showResults();        
            setIsOpenResults(true);
        }, 250);
        
    };
    const handleCloseResults = () => setIsOpenResults(false);

    function handleFileChosenTraining(input) {
        console.log("TREINO")
        const file = input.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
            const file = event.target.result;
            const allLines = file.split(/\r\n|\n/);
            // Reading line by line
            allLines.forEach((line) => {
                props.handleListTraining(line)
            });
        };
    
        // Caso ocorra um erro aparece um alert
        reader.onerror = (event) => {
            alert(event.target.error.name);
        };
    
        reader.readAsText(file);    
    }

    function handleFileChosenTest(input) {
        console.log("TESTE")
        const file = input.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
            const file = event.target.result;
            const allLines = file.split(/\r\n|\n/);
            // Reading line by line
            allLines.forEach((line) => {
                props.handleListTest(line)
            });
        };
    
        // Caso ocorra um erro aparece um alert
        reader.onerror = (event) => {
            alert(event.target.error.name);
        };
    
        reader.readAsText(file);    
    }

    function handleTrainingHeader() {
        const inputLayer = document.getElementById("input-layer").value;
        const outputLayer = document.getElementById("output-layer").value;
        const hiddenLayer = document.getElementById("hidden-layer").value;
        if (inputLayer && outputLayer && hiddenLayer) {            
            const errorValue = document.getElementById("error-value").value;;
            const numberIterations = document.getElementById("number-iterations").value;;
            const learningRate = document.getElementById("learning-rate").value;;
            
            if (errorValue && numberIterations && learningRate) {
                const transferFunction = document.querySelector("input[name='function']:checked").value;

                const calculationParameters = {
                    inputLayer: inputLayer,
                    outputLayer: outputLayer,
                    hiddenLayer: hiddenLayer,
                    errorValue: errorValue,
                    numberIterations: numberIterations,
                    learningRate: learningRate,
                    transferFunction: transferFunction
                } 

                // console.log(calculationParameters);

                props.handleTraining(calculationParameters);

            } else {
                console.log("ERRO: valor do erro | numero de iterações | N -> campo em BRANCO");
            }
        } else {
            console.log("ERRO: configuração de números de neurôneos -> campo em BRANCO");
        }
        

        // props.handleTraining();
    }

    return (
        <header>
            <div className="box-top">
                <img src="./images/logo-fipp.png" alt="logo fipp" className="box-top-image"/>
                <div className="box-top-text">
                    <h1>
                        Inteligência Artificial
                    </h1>
                    <h2>
                        Redes Neurais
                    </h2>
                </div>                
            </div>
            <div className="box-inputs">
                <div className="box-input-1">
                    <label className="title">Configurar números de neurôneos:</label>
                    <label className="my-label">
                        Camada de Entrada:
                        <input type="text" defaultValue={6} id="input-layer" className="input-disabled" disabled/>
                    </label>
                    <label className="my-label">
                        Camada de Saída:
                        <input type="text" defaultValue={5} id="output-layer" className="input-disabled" disabled/>
                    </label>
                    <label className="my-label">
                        Camada Oculta:
                        <input type="text" placeholder="5" id="hidden-layer" className="input-enabled"/>
                    </label>
                </div>
                <div className="box-input-2">
                    <label>
                        Valor do Erro:
                        <input type="text" id="error-value" placeholder="0,00001" />
                    </label>
                    <label>
                        Número de Iterações:
                        <input type="text" id="number-iterations" placeholder="2000" />
                    </label>
                </div>
                <div className="box-input-3">
                    <label>
                        N:
                        <input type="text" id="learning-rate" placeholder="0,02" />
                    </label>
                </div>
                <div className="box-input-4">
                    <label className="title">
                        Função de Transferência:
                    </label>
                    <label className="my-label">
                        <input type="radio" name="function" value={1} defaultChecked/>
                        Linear
                    </label>
                    <label className="my-label">
                        <input type="radio" name="function" value={2}/>
                        Logística
                    </label>
                    <label className="my-label">
                        <input type="radio" name="function" value={3}/>
                        Hiperbórica
                    </label>
                </div>
            </div>
            <div className="box-bottom">           
                <form>
                    <div>
                        <label htmlFor="fileTraining" className="button-press">
                            <img src="./icons/directory.png" alt="enviar arquivo" />
                            arquivo treino
                        </label>
                        <input type="file" name="fileTraining" id="fileTraining" accept='.csv'
                        onChange={e => handleFileChosenTraining(e)}/>
                    </div>
                </form>
                <button onClick={handleOpenSelect} className="button-press">
                    <img  src="./icons/chose.png" alt="enviar arquivo" />
                    Escolher Colunas
                </button>  
                <form>
                    <div>
                        <label htmlFor="fileTest" className="button-press">
                            <img src="./icons/directory.png" alt="enviar arquivo" />
                            arquivo teste
                        </label>
                        <input type="file" name="fileTest" id="fileTest" accept='.csv'
                        onChange={e => handleFileChosenTest(e)}/>
                    </div>
                </form>
                <button onClick={handleOpenResults} className="button-press">
                    <img src="./icons/bar-graph.png" alt="enviar arquivo"/>
                    Gerar Resultados
                </button>              
            </div>
            <ModalSelect
            isOpenSelect = {isOpenSelect}
            handleTrainingHeader = {handleTrainingHeader}
            handleCloseSelect = {handleCloseSelect}
            columns = {props.columns}
            setSelectedColumns = {props.setSelectedColumns}            
            />  
            <ModalResults 
            isOpenResults = {isOpenResults}
            handleCloseResults = {handleCloseResults}
            results = {props.results}
            data = {data}
            /> 
        </header>
    )
}