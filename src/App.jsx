import { Link, Routes, Route } from "react-router-dom"
import MensagemAoAbrir from "./components/MensagemAoAbrir"
import ListaProdutos from "./components/ListaProdutos"
import CadastrarProduto from "./components/CadastrarProduto"
import RemoverProduto from "./components/RemoverProduto"

function App() {
  return (
    <div>
      <h1>Desafios React Front</h1>
      <p>Projeto iniciado com React, Vite, Axios e JSON Server.</p>

      <nav>
        <Link to="/">Início</Link> |{" "}
        <Link to="/produtos">Produtos</Link> |{" "}
        <Link to="/cadastro">Cadastrar</Link> |{" "}
        <Link to="/remover">Remover</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MensagemAoAbrir />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/cadastro" element={<CadastrarProduto />} />
        <Route path="/remover" element={<RemoverProduto />} />
      </Routes>
    </div>
  )
}

export default App