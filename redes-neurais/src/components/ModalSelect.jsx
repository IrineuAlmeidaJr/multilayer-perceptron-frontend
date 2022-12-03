import Modal from '@mui/material/Modal';
import { Fragment, useState } from 'react';

import '../styles/windows-bar.css'
import '../styles/modal-select.css'
import { useEffect } from 'react';

export function ModalSelect(props) {
    const [selectedItems, setSelectedItems] = useState([]);

    function handleSelected() {
        const myCheckBox = document.querySelectorAll('.mycheckbox')
        let tempIsChecked = [];
        myCheckBox.forEach(item => {
            tempIsChecked.push(item.checked);
        })
        props.setSelectedColumns(tempIsChecked);             
    }

    function handleTrainingSelect() {
        props.handleTrainingHeader();
        props.handleCloseSelect(); 
    }

    useEffect(() => {
       
        let tempSelected = [];
        
        props.columns.forEach((item) => {
            tempSelected.push({
                class: item,
                isSelected: true
            }) 
        } )

        setSelectedItems(tempSelected);
        console.log("ENTROU SELECTED");
                    
    }, [props.columns])

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
                        <p><strong>Atenção</strong>: carregue arquivo CSV antes</p>
                        :
                        <div className="box-selected">
                            <div className="list-selected">
                                {
                                    selectedItems.map(item => 
                                        <Fragment key={item.class} >
                                            <label htmlFor={item.class}>
                                                <input 
                                                type="checkbox" 
                                                className="mycheckbox"
                                                defaultChecked={item.isSelected}
                                                onChange={() => item.isSelected = !item.isSelected}
                                                value={item.class} />
                                                {item.class}
                                            </label>
                                        </Fragment>    
                                    )                            
                                }   
                            </div>                            
                            <button onClick={handleSelected} className="button-press">
                                Selecionar
                            </button>   
                            <button onClick={handleTrainingSelect} className="button-press">
                                Treinar
                            </button>     
                        </div>                    
                    }
                                       
                </div>
            </div>   
      </Modal>
    )
}