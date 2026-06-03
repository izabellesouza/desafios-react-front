import { useEffect, useState } from "react"
import axios from "axios"

function RemoverProduto() {
    const [produtos, setProdutos] = useState([])

    function buscarProdutos() {
        axios
            .get("http://localhost:3000/produtos")
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function removerProduto(id) {
        axios
            .delete(`http://localhost:3000/produtos/${id}`)
            .then(() => {
                alert("Produto removido com sucesso!")
                buscarProdutos()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        buscarProdutos()
    }, [])

    return (
        <div>
            <h2>Remover Produto</h2>

            {produtos.map((produto) => (
                <div key={produto.id}>
                    <span>
                        {produto.nome} - R$ {produto.preco}
                    </span>

                    <button onClick={() => removerProduto(produto.id)}>
                        Remover
                    </button>
                </div>
            ))}
        </div>
    )
}

export default RemoverProduto