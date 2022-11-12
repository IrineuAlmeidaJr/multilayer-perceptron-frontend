import Modal from '@mui/material/Modal';
import { Fragment } from 'react';

import '../styles/windows-bar.css'

export function ModalResults(props) {

    return (
        <Modal
        open={props.isOpenResults}
        onClose={props.handleCloseResults}
        >
            <div className="body">                
                <div className="windows-bar-300">
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
                <div className='central'>
                   <h1>TESTE</h1>                                       
                </div>
            </div>   
      </Modal>
    )
}