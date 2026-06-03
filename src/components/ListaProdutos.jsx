import { useEffect, useState } from "react"
import axios from "axios"

function ListaProdutos() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:3000/produtos")
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h2>Lista de Produtos</h2>

            {produtos.map((produto) => (
                <div key={produto.id}>
                    <p>
                        {produto.nome} - R$ {produto.preco}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ListaProdutos