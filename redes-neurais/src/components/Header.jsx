
export function Header() {

    return (
        <header className="h-80 px-1 pt-2">
            <div className="flex justify-between">
                <img 
                src="./images/logo-fipp.png" 
                alt="logo fipp" 
                className="
                w-44
                "/>
                <div className="flex flex-col justify-center items-center mr-[30%]">
                    <h1 className="text-xl  font-semibold uppercase">
                        Inteligência Artificial
                    </h1>
                    <h2 className="text-lg font-semibold uppercase text-green-700">
                        Redes Neurais
                    </h2>
                </div>                
            </div>
            <div className="flex justify-between">
                <div className="w-[340px] mt-2 flex flex-col gap-2">
                    <label className="font-semibold">Configurar números de neurôneos:</label>
                    <label className="flex justify-between">
                        Camada de Entrada:
                        <input 
                        type="text" 
                        value={6} 
                        disabled
                        className="
                        border-2
                        border-r-[#cfcfcf]
                        border-b-[#cfcfcf]
                        border-t-[#1f1f1f]
                        border-l-[#1f1f1f]
                        bg-[#bdbdbd] 
                        w-44
                        px-2
                        py-1" 
                        />
                    </label>
                    <label className="flex justify-between">
                        Camada de Saída:
                        <input 
                        type="text" 
                        value={6} 
                        disabled
                        className="
                        border-2
                        border-r-[#cfcfcf]
                        border-b-[#cfcfcf]
                        border-t-[#1f1f1f]
                        border-l-[#1f1f1f]
                        bg-[#bdbdbd] 
                        w-44
                        px-2
                        py-1" 
                        />
                    </label>
                    <label className="flex justify-between">
                        Camada de Oculta:
                        <input 
                        type="text" 
                        placeholder="5"
                        className="
                        border-2
                        border-r-[#cfcfcf]
                        border-b-[#cfcfcf]
                        border-t-[#1f1f1f]
                        border-l-[#1f1f1f]
                        bg-white
                        focus:outline-none 
                        w-44
                        px-2
                        py-1"
                        />
                    </label>
                </div>
                <div className="w-48 mt-4 flex flex-col gap-2">
                    <label className="flex flex-col justify-between font-semibold">
                        Valor do Erro:
                        <input 
                        type="text"
                        placeholder="0,00001"
                        className="
                        w-44
                        px-2
                        py-1
                        border-2
                        border-r-[#cfcfcf]
                        border-b-[#cfcfcf]
                        border-t-[#1f1f1f]
                        border-l-[#1f1f1f]
                        bg-white
                        focus:outline-none"
                        />
                    </label>
                    <label className="mt-5 flex flex-col justify-between font-semibold">
                        Número de Iterações:
                        <input 
                        type="text"
                        placeholder="2000"
                        className="
                        w-44
                        px-2
                        py-1
                        border-2
                        border-r-[#cfcfcf]
                        border-b-[#cfcfcf]
                        border-t-[#1f1f1f]
                        border-l-[#1f1f1f]
                        bg-white
                        focus:outline-none"
                        />
                    </label>
                </div>
                <div className="w-24 mt-4 flex flex-col gap-2">
                    <label className="flex flex-col justify-between font-semibold">
                        N:
                        <input 
                        type="text"
                        placeholder="0,2"
                        className="
                        border-2
                        border-r-[#cfcfcf]
                        border-b-[#cfcfcf]
                        border-t-[#1f1f1f]
                        border-l-[#1f1f1f]
                        bg-white
                        focus:outline-none 
                        w-20
                        px-2
                        py-1"
                        />
                    </label>
                </div>
                <div className="w-[240px] mt-4 flex flex-col gap-2">
                    <label className="font-semibold">
                        Função de Transferência:
                    </label>
                    <label>
                        <input 
                        className="mt-2 mr-2"
                        type="radio" 
                        name="funcao" 
                        value={1}
                        checked/>
                        {"Linear"}
                    </label>
                    <label>
                        <input 
                        className="mr-2"
                        type="radio"  
                        name="funcao" 
                        value={2}/>
                        {"Logística"}
                    </label>
                    <label>
                        <input 
                        className="mr-2"
                        type="radio"  
                        name="funcao" 
                        value={3}/>
                        {"Hiperbórica"}
                    </label>
                </div>
            </div>
            <form>
                <div className="flex justify-center">
                    <label 
                    for="arquivo"
                    className="
                    flex
                    items-center
                    justify-center
                    block
                    mt-3
                    px-5
                    py-3
                    h-10
                    w-52
                    font-semibold
                    text-sm
                    uppercase
                    cursor-pointer
                    bg-[#bdbdbd] 
                    border-2
                    border-t-[#cfcfcf]
                    hover:border-t-[#1f1f1f]
                    border-l-[#cfcfcf]
                    hover:border-l-[#1f1f1f]
                    border-r-[#1f1f1f]
                    hover:border-r-[#cfcfcf]
                    border-b-[#1f1f1f]
                    hover:border-b-[#cfcfcf]
                    ">
                        <img 
                        src="./icons/directory.png" 
                        alt="enviar arquivo"
                        className="w-6 h-6 mr-2"/>
                        Enviar arquivo
                    </label>
                    <input type="file" name="arquivo" id="arquivo" className="hidden"/>
                </div>
            </form>
                
        </header>
    )
}