import '../styles/table.css'

export function TableElements(props) {

    return (
        <>
            {
                props.listTests.length > 0 &&            
                <table>
                    <thead>
                        <tr>
                            {
                                props.listTests[0].map(item => (
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
                                const end = props.listTests.length - 1
                                for (let i = 1; i < end; i++) {
                                    arr.push(
                                        <tr key={i}>
                                            {
                                                props.listTests[i].map((item) => (
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