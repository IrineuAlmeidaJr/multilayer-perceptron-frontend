import { useEffect } from 'react';
import '../styles/table.css'

export function TableElements(props) {

    return (
        <>
            {
                props.listTraining?.length > 0 &&            
                <table>
                    <thead>
                        <tr>
                            {
                                props.listTraining[0].map(item => (
                                    <th key={item} scope="col">
                                        {item}
                                    </th>
                                    
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            (() => {
                                let listData = props.listTraining;
                                if (props.listTests.length > 0) {
                                    listData = props.listTests;
                                }
                                
                                const arr = [];
                                const end = listData.length - 1
                                for (let i = 1; i < end; i++) {
                                    arr.push(
                                        <tr key={i}>
                                            {
                                                listData[i].map((item) => (
                                                    <td>
                                                        {item}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    );
                                }
                                return arr;
                            })() 
                        }                        
                    </tbody>
                </table>
            }   
        </>
    )
}