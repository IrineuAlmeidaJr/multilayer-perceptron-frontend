import Modal from '@mui/material/Modal';

import '../styles/modal-select.css'
import '../styles/windows-bar.css'

export function ModalSelect(props) {

    return (
        <Modal
        open={props.isOpen}
        onClose={props.handleClose}
        >
            <div className="body">                
                <div className="windows-bar-300">
                    <div className="bar-box-name">    
                        <h1>Selecionar Colunas</h1>
                    </div>
                    <div className="bar-box-buttons">
                        <button className="minimize" onClick={() => console.log(Entrou)}>
                            -
                        </button>
                        <button className="maximize">
                            ▫
                        </button>
                        <button className="close" onClick={() => props.handleClose()}>
                            x
                        </button>
                    </div>            
                </div>            
                <div className='central'>
                    Carregar uma lista com as coluna e o usuário que irá selecionar qual quer
                    <p> Para isso utilizar input options dinâmico</p>
                    <input type="checkbox" id="x1" name="x1" value="x1" />
                    <label htmlFor="x1">X1</label><br/>
                    <input type="checkbox" id="x2" name="x2" value="x2" />
                    <label htmlFor="x2">X2</label><br/>
                    <input type="checkbox" id="x3" name="x3" value="x3" />
                    <label htmlFor="x3">X3</label><br/>                   
                </div>
            </div>   
      </Modal>
    )
}