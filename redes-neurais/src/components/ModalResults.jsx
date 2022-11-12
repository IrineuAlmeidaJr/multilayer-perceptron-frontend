import Modal from '@mui/material/Modal';
import { Fragment } from 'react';

import '../styles/windows-bar.css'
import '../styles/modal-results.css'

export function ModalResults(props) {

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
                            {
                                props.results.map(item => 
                                    <p>
                                        {item}
                                    </p>    
                                )
                            }
                        </div>                         
                        :
                        <p><strong>Atenção</strong>: carregue um aquivo .csv e escolha 2 colunas</p>   
                    }
                                                         
                </div>
            </div>   
      </Modal>
    )
}