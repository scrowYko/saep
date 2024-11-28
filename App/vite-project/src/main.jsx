import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cadastro from './pages/cadastro_usuario'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gerenciamento from './pages/gerenciar_tarefa';
import Tarefas from './pages/cadastro_tarefas';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Gerenciamento />} />
        <Route path="/usuario" element={<Cadastro />} />
        <Route path="/tarefa" element={<Tarefas />} />
      </Routes>
    </Router>
  </StrictMode>
);