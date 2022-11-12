import Modal from '@mui/material/Modal';
import { Fragment } from 'react';

import '../styles/modal-select.css'
import '../styles/windows-bar.css'

export function ModalSelect(props) {

    function handleSelected() {
        const myCheckBox = document.querySelectorAll('.mycheckbox')
        let tempIsChecked = [];
        myCheckBox.forEach(item => {
            tempIsChecked.push(item.checked);
        })
        props.setSelectedColumns(tempIsChecked);   
        props.handleCloseSelect();     
    }

    return (
        <Modal
        open={props.isOpenSelect}
        onClose={props.handleCloseSelect}
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
                        <button className="close" onClick={() => props.handleCloseSelect()}>
                            x
                        </button>
                    </div>            
                </div>            
                <div className='central'>
                    {
                        props.columns.length == 0 ?
                        <p><strong>Atenção</strong>: carregar arquivo CSV antes</p>
                        :
                        <div className="box-selected">
                            <div className="list-selected">
                                {
                                    props.columns.map(item => 
                                        <Fragment key={item} >
                                            <label htmlFor={item}>
                                                <input type="checkbox" className="mycheckbox" value={item} />
                                                {item}
                                            </label>
                                        </Fragment>    
                                    )                            
                                }   
                            </div>                            
                            <button onClick={handleSelected} className="button-press">
                                Selecionar
                            </button>    
                        </div>                    
                    }
                                       
                </div>
            </div>   
      </Modal>
    )
}