
import '../styles/windows-bar.css'

export function WindowsBar(props) {
    const personStyle = `flex
    items-center
    justify-between
    w-[${props.size}px]
    h-8
    px-2 
    rounded-t-sm     
    bg-gradient-to-r 
    from-[#00008a]
    to-[#0e7dbc]
    border-x-4
    border-t-4
    border-[#bdbdbd]
    border-t-[#bbbbbb]
    border-l-[#ababab]
    border-r-[#5e5e5e]
    `

    return (
        <div
        className={personStyle}>
            <div className="bar-box-name">    
                <h1>{props.text}</h1>
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
    )
}