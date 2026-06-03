import { useEffect, useState } from "react"

function MensagemAoAbrir() {
    const [mensagem, setMensagem] = useState("")

    useEffect(() => {
        setMensagem("Bem-vindo ao projeto de desafios React!")
    }, [])

    return (
        <div>
            <h2>Mensagem ao abrir</h2>
            <p>{mensagem}</p>
        </div>
    )
}

export default MensagemAoAbrir