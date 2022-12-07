import { data } from "autoprefixer";

export function ConfusionMatrix(props) {


    return (
        <>
        
            { (() => {
                const sizeClass = props.confusionMatrix.classes.length+1;
                // const style =`w-full m-4 py-4 grid grid-cols-${sizeClass} gap-2 justify-items-center 
                // bg-[#cfcfcf]`
                const style =`w-full m-4 py-4 grid grid-cols-6 gap-2 justify-items-center 
                bg-[#cfcfcf]`

                return (
                    <div className="flex flex-col justify-center items-center px-4">
                        <ol className={style}>
                            <li></li>
                            {                            
                                props.confusionMatrix.classes.map((itemCol) =>
                                    <li
                                    className="
                                    bg-[#0e4397]
                                    text-white
                                    w-full 
                                    flex 
                                    justify-center 
                                    justify-items-center
                                    font-bold
                                    "> 
                                        {itemCol}
                                    </li>
                                ) 
                            }

                            {
                                (() => {
                                    let data = [];
                                    let colMatrix = props.confusionMatrix.matriz[0].length;                                                                
                                        for(let i=0; i < colMatrix; i++) {
                                            data.push(
                                                <li 
                                                className="
                                                bg-[#0e4397]
                                                text-white
                                                w-full 
                                                flex 
                                                justify-center 
                                                justify-items-center
                                                font-bold
                                                "> 
                                                    {props.confusionMatrix.classes[i]}
                                                </li>
                                            )
                                            for (let j=0; j < colMatrix; j++) {
                                                if (i == j) {
                                                    data.push( 
                                                        <li
                                                        className="
                                                        font-bold
                                                        bg-[#d6e4ec]
                                                        w-full 
                                                        flex 
                                                        justify-center 
                                                        justify-items-center
                                                        "> 
                                                            {props.confusionMatrix.matriz[i][j]}
                                                        </li>
                                                    )
                                                } else {
                                                    data.push( 
                                                        <li
                                                        className="
                                                        bg-slate-50
                                                        w-full 
                                                        flex 
                                                        justify-center 
                                                        justify-items-center
                                                        "> 
                                                            {props.confusionMatrix.matriz[i][j]}
                                                        </li>
                                                    )
                                                }
                                                
                                            }                                      
                                        }                                                              
                                    return data;  
                                })()                         
                            }
                        </ol>
        
                        <h3 className="text-lg uppercase font-semibold">
                            Taxa de Acurácia: <span>{props.confusionMatrix.acuracia.toFixed(2)}%</span>
                        </h3>
        
                        
                        
                    </div>
                )
            })()}
        </>
    )

}