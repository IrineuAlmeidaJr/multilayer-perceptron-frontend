import Modal from '@mui/material/Modal';
import { Chart } from "react-google-charts";

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
                            data={props.data}
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
                </div>
            </div>   
      </Modal>
    )
}