import React, { useEffect, useState } from "react";
import { CardHistory } from "./components/cardHistory";
import { api } from "./services/api.js"

function App() {
    const [n, setN] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [historico, setHistorico] = useState([]);
    const [tempo, setTempo] = useState(null);

    useEffect(() => {
        const historicoArmazenado = localStorage.getItem("desafioWebFullStackBridgeHistorico");
        if (historicoArmazenado) {
            setHistorico(JSON.parse(historicoArmazenado));
        }
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        if (Number(n) > 1) {
            setResultado("Carregando!");
            setTempo("Carregando!");
            api.post('/dividers', {"n":Number(n)})
                .then((response) => {   setResultado(response.data.resultado);
                                        setTempo(response.data.tempo);
                                        setHistorico([{"valor":n, "resposta": response.data.resultado, "tempo": response.data.tempo}, ...historico]);
                                    });
        }
    } 

    function handleLimparHistorico(event) {
        event.preventDefault();
        setHistorico([])
    }

    function handleSalvarHistorico(event) {
        event.preventDefault();
        localStorage.setItem("desafioWebFullStackBridgeHistorico",JSON.stringify(historico));
    }

    function handleRemoveCard(event, index) {
        event.preventDefault();
        let historicoAux = [...historico];
        historicoAux.splice(index, 1);
        setHistorico(historicoAux);
    }

    return (
        <div className="bg-[#282c34]">
            <div className="text-center h-screen flex">
                <section className="basis-3/4 text-3xl flex items-center justify-center text-white">
                    <div>
                        <form onSubmit={handleSubmit}>
                            
                            <div className="max-w-md m-10 text-justify">
                                <label className="text-xl">Insira um número para calcular o número de inteiros positivos n menores que k, para os quais n e n + 1 têm o mesmo número de divisores positivos: </label>
                            </div>
                            <input
                                className="
                                    bg-transparent
                                    p-2
                                    rounded-l-2xl
                                    border-2
                                    border-sky-700
                                    hover:outline
                                    outline-sky-800
                                    outline-offset
                                    outline-2
                                    shadow-sm
                                    shadow-blue-500/50
                                    text-center"
                                type="number"
                                name="numero"
                                onChange={event => setN(event.target.value)}
                            />
                            <button className="
                                            rounded-r-2xl
                                            p-2
                                            bg-sky-700
                                            border-2
                                            border-sky-700
                                            hover:outline
                                            outline-sky-800
                                            outline-offset
                                            outline-2
                                            shadow-sm
                                            shadow-blue-500/50
                                            " 
                                    type="submit">Calcular</button>
                                    <p className="text-xl text-red-500 fixed ">
                                        {n > 2 || n == null ? " ": "Valor inválido"}
                                    </p>
                        </form>
                        <section className="m-10">
                            <section>
                                {!resultado ? "" :"Resposta: " + resultado}
                            </section>
                            <section className="text-base">
                                {!tempo ? "" :"Tempo de execução: " + tempo + " ms"}
                            </section>
                        </section>
                    </div>
                </section>
                <section style={{maxHeight: "90vh"}} className="basis-1/4 overflow-auto flex-col">
                    <div>
                        {historico.map((item, index) =>
                            <CardHistory
                                valor={item.valor}
                                resposta={item.resposta}
                                tempo={item.tempo}
                                index={index}
                                exclusao={handleRemoveCard}
                            />)
                        }
                    </div>
                    <div className="fixed bottom-5 right-4">
                        <button className="btn-primary m-5" onClick={handleSalvarHistorico}>Salvar histórico</button>
                        <button className="btn-primary m-5" onClick={handleLimparHistorico}>Limpar histórico</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
