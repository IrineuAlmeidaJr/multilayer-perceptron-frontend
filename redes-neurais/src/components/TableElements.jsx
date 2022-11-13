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
                                const arr = [];
                                const end = props.listTraining.length - 1
                                for (let i = 1; i < end; i++) {
                                    arr.push(
                                        <tr key={i}>
                                            {
                                                props.listTraining[i].map((item) => (
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