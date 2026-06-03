import { useState } from "react"
import axios from "axios"

function CadastrarProduto() {
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")

    function cadastrarProduto(event) {
        event.preventDefault()

        const novoProduto = {
            nome: nome,
            preco: Number(preco)
        }

        axios
            .post("http://localhost:3000/produtos", novoProduto)
            .then(() => {
                alert("Produto cadastrado com sucesso!")
                setNome("")
                setPreco("")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h2>Cadastrar Produto</h2>

            <form onSubmit={cadastrarProduto}>
                <input
                    type="text"
                    placeholder="Nome do produto"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(event) => setPreco(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastrarProduto