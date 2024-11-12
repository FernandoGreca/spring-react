import { useState } from 'react';
import './App.css';
import Formulario from '../formulario/Formulario';
import Tabela from '../tabela/Tabela';

function App() {
  
  const [btnCadastrar, setBtnCadastrar] = useState(true);

  return (
    <>
      <div className='container'>
        <Formulario botao={btnCadastrar}></Formulario>
        <Tabela></Tabela>
      </div>
    </>
  )
}

export default App
