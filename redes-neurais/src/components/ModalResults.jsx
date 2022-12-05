import Modal from '@mui/material/Modal';
import { Chart } from "react-google-charts";
import { ConfusionMatrix } from "./ConfusionMatrix";

import '../styles/windows-bar.css'
import '../styles/modal-results.css'
import { useEffect, useState } from 'react';

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
                            data={props.graphic}
                            width="99%"
                            height="600px"
                            legendToggle
                            /> 
                            :
                            <div className='flex flex-col flex-1 justify-center'>                                
                                {
                                    props.confusionMatrix?.classes ?                                    
                                    <ConfusionMatrix
                                    confusionMatrix = {props.confusionMatrix}
                                    />
                                    :
                                    <h3 className='mx-4 text-lg font-bold'>
                                        Carregue um arquivo de treino e teste para gerar a matriz de confusão
                                    </h3>
                                }
                            </div>
                        }                            
                    </div>                               
                </div>
            </div>   
      </Modal>
    )
}