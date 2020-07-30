import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

  const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria {nomeDaCategoria}</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={() => {
              console.log('[nomeDaCategoria]', nomeDaCategoria);
            }}
          />
        </label>

        <button>
          Cadastrar
        </button>

      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;