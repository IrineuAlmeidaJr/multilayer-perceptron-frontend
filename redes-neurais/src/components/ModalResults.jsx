import Modal from '@mui/material/Modal';
import { Chart } from "react-google-charts";

import '../styles/windows-bar.css'
import '../styles/modal-results.css'
import { useState } from 'react';

export function ModalResults(props) {
    const [sectionView, setSectionView] = useState(1);

    return (
        <Modal
        open={props.isOpenResults}
        onClose={props.handleCloseResults}
        >
            <div className="body-results">                
                <div className="windows-bar-1024">
                    <div className="bar-box-name">    
                        <h1>Resultado</h1>
                    </div>
                    <div className="bar-box-buttons">
                        <button className="minimize" onClick={() => console.log(Entrou)}>
                            -
                        </button>
                        <button className="maximize">
                            ▫
                        </button>
                        <button className="close" onClick={() => props.handleCloseResults()}>
                            x
                        </button>
                    </div>            
                </div>            
                <div className='central-results'>
                    {
                        props.results?.length > 0 ?
                        <div>
                            <h1>Resultado</h1>  
                            {/* {
                                props.results.map(item => 
                                    <p>
                                        {item}
                                    </p>    
                                )
                            } */}
                        </div>                         
                        :
                        // <p><strong>Atenção</strong>: carregue um aquivo .csv e escolha 2 colunas</p>
                        <div>
                            <div className="box-bottom-results">  
                                <button onClick={e => setSectionView(1)} className="button-press">
                                    <img  src="./icons/bar-graph.png" alt="gráfico" />
                                    gráfico
                                </button> 
                                <button onClick={e => setSectionView(2)} className="button-press">
                                    <img  src="./icons/matrix.png" alt="matriz de confusão" />
                                    matriz confusão
                                </button>                                 
                            </div>

                            {
                                sectionView == 1 ?
                                <Chart
                                className='graph-section'
                                chartType="Line"
                                data={[
                                    ["Iterações", "Erro"], 
                                    [1, 4], 
                                    [2, 3],
                                    [3, 2],
                                    [4, 1],
                                    [5, 0.9],
                                    [6, 0.5],
                                    [7, 0.3],
                                    [8, 0.25],
                                    [9, 0.2],
                                    [10, 0.15],
                                    [11, 0.1],
                                    [12, 0.05],
                                    [13, 0.01],
                                ]}
                                width="99%"
                                height="600px"
                                legendToggle
                                /> 
                                :
                                <div>
                                    <p> Matrix de Confusão </p>
                                </div>
                            }                            
                        </div>  
                    }
                                                         
                </div>
            </div>   
      </Modal>
    )
}