import MensagemAoAbrir from "./components/MensagemAoAbrir"
import ListaProdutos from "./components/ListaProdutos"
import CadastrarProduto from "./components/CadastrarProduto"
import RemoverProduto from "./components/RemoverProduto"

function App() {
  return (
    <div>
      <h1>Desafios React Front</h1>
      <p>Projeto iniciado com React, Vite, Axios e JSON Server.</p>

      <MensagemAoAbrir />
      <ListaProdutos />
      <CadastrarProduto />
      <RemoverProduto />
    </div>
  )
}

export default App