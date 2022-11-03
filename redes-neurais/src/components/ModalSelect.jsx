import Modal from '@mui/material/Modal';

import { WindowsBar } from './WindowsBar';

import '../styles/modal-select.css'

export function ModalSelect(props) {

    return (
        <Modal
        open={props.isOpen}
        onClose={props.handleClose}
        >
            <div className="body">
                <WindowsBar
                text={"Selecionar Colunas"}
                image={""}
                size={300}
                handleClose={props.handleClose}
                />
            
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