export function CardHistory(props) {
    return(
        <div className="text-xl bg-white h-24 rounded-3xl p-2 pl-5 m-5 flex justify-between">
            <div>
                <p className="text-left">Valor da requisição: {props.valor}</p>
                <p className="text-left">Resposta: {props.resposta}</p> 
                <p className="text-left text-base">Tempo de resposta: {props.tempo}</p> 
            </div>
            <div className="mr-4 cursor-pointer hover:text-red-500 h-7">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}