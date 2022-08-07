import React, { useEffect, useState } from "react";
import { CardHistory } from "./components/cardHistory";
import { api } from "./services/api.js"

function App() {
    const [n, setN] = useState(0);
    const [resultado, setResultado] = useState(null);
    const [historico, setHistorico] = useState([]);

    useEffect(() => {
        const historicoArmazenado = localStorage.getItem("desafioWebFullStackBridgeHistorico");
        if (historicoArmazenado) {
            setHistorico(JSON.parse(historicoArmazenado));
        }
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        api.post('/dividers', {"n":Number(n)})
            .then((response) => {   setResultado(response.data.resultado);
                                    setHistorico([{"valor":n, "resposta": resultado}, ...historico]);
                                });
    } 

    function handleLimparHistorico(event) {
        event.preventDefault();
        setHistorico([])
    }

    function handleSalvarHistorico(event) {
        event.preventDefault();
        localStorage.setItem("desafioWebFullStackBridgeHistorico",JSON.stringify(historico));
    }

    function handleRemoveCard(index) {
        console.log(index);
    }

    return (
        <div className="bg-[#282c34]">
            <div className="text-center h-screen flex">
                <section className="basis-3/4 text-3xl flex items-center justify-center">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input
                                className="
                                    bg-transparent
                                    p-2
                                    rounded-l-3xl
                                    border-2
                                    border-sky-700
                                    hover:outline
                                    outline-sky-800
                                    outline-offset
                                    outline-2
                                    shadow-sm
                                    shadow-blue-500/50"
                                type="number"
                                name="numero"
                                value={n}
                                onChange={event => setN(event.target.value)}
                            />
                            <button className="
                                            rounded-r-3xl
                                            p-2
                                            bg-transparent
                                            border-2
                                            border-sky-700
                                            hover:outline
                                            outline-sky-800
                                            outline-offset
                                            outline-2
                                            shadow-sm
                                            shadow-blue-500/50" 
                                    type="submit">Calcular</button>
                        </form>
                        <section className="m-10">
                            <section>
                                {!resultado ? "" :"Resposta: " + resultado}
                            </section>
                            <section className="text-xl">
                                Tempo de execução:
                            </section>
                        </section>
                    </div>
                </section>
                <section className="basis-1/4 overflow-auto flex-col">
                    <button onClick={handleSalvarHistorico}>Salvar histórico</button>
                    <button onClick={handleLimparHistorico}>Limpar histórico</button>
                    {historico.map((item, index) =>
                        <CardHistory
                            valor={item.valor}
                            resposta={item.resposta}
                            tempo=""
                            index={index}
                        />)
                    }
                </section>
            </div>
        </div>
    );
}

export default App;
