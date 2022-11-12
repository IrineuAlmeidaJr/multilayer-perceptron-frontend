import { useState } from "react"
import { ModalSelect } from './ModalSelect';
import { ModalResults } from "./ModalResults";

import '../styles/header.css'

export function Header(props) {    
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const handleOpenSelect = () => setIsOpenSelect(true);
    const handleCloseSelect = () => setIsOpenSelect(false);

    const [isOpenResults, setIsOpenResults] = useState(false);
    const handleOpenResults = () => {
        props.showResults();
        setIsOpenResults(true);
    };
    const handleCloseResults = () => setIsOpenResults(false);

    function handleFileChosen(input) {
        const file = input.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
            const file = event.target.result;
            const allLines = file.split(/\r\n|\n/);
            // Reading line by line
            allLines.forEach((line) => {
                props.handleTest(line)
            });
        };
    
        // Caso ocorra um erro aparece um alert
        reader.onerror = (event) => {
            alert(event.target.error.name);
        };
    
        reader.readAsText(file);
    
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
                        <input type="text" defaultValue={6}  className="input-disabled" disabled/>
                    </label>
                    <label className="my-label">
                        Camada de Saída:
                        <input type="text" defaultValue={6} className="input-disabled" disabled/>
                    </label>
                    <label className="my-label">
                        Camada de Oculta:
                        <input type="text" placeholder="5" className="input-enabled"/>
                    </label>
                </div>
                <div className="box-input-2">
                    <label>
                        Valor do Erro:
                        <input type="text" placeholder="0,00001" />
                    </label>
                    <label>
                        Número de Iterações:
                        <input type="text" placeholder="2000" />
                    </label>
                </div>
                <div className="box-input-3">
                    <label>
                        N:
                        <input  type="text" placeholder="0,2" />
                    </label>
                </div>
                <div className="box-input-4">
                    <label className="title">
                        Função de Transferência:
                    </label>
                    <label className="my-label">
                        <input type="radio" name="funcao" value={1} defaultChecked/>
                        Linear
                    </label>
                    <label className="my-label">
                        <input type="radio" name="funcao" value={2}/>
                        Logística
                    </label>
                    <label className="my-label">
                        <input type="radio" name="funcao" value={3}/>
                        Hiperbórica
                    </label>
                </div>
            </div>
            <div className="box-bottom">           
                <form>
                    <div>
                        <label htmlFor="arquivo" className="button-press">
                            <img src="./icons/directory.png" alt="enviar arquivo" />
                            Enviar arquivo
                        </label>
                        <input type="file" name="arquivo" id="arquivo" accept='.csv'
                        onChange={e => handleFileChosen(e)}/>
                    </div>
                </form>
                <button onClick={handleOpenSelect} className="button-press">
                    <img  src="./icons/chose.png" alt="enviar arquivo" />
                    Escolher Colunas
                </button>  
                <button onClick={handleOpenResults} className="button-press">
                    <img src="./icons/bar-graph.png" alt="enviar arquivo"/>
                    Gerar Resultados
                </button>              
            </div>
            <ModalSelect
            isOpenSelect = {isOpenSelect}
            handleCloseSelect = {handleCloseSelect}
            columns = {props.columns}
            setSelectedColumns = {props.setSelectedColumns}
            />  
            <ModalResults 
            isOpenResults = {isOpenResults}
            handleCloseResults = {handleCloseResults}
            /> 
        </header>
    )
}