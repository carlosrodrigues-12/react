import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCateorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: 'Carlos Rodrigues',
    descricao: 'Descrição',
    cor: '#BCA123',
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }
  
  return (
    <PageDefault>
      
      <h1>Cadastro de Categoria {values.nome}</h1>

      <form onSubmit={(infosDoEvento) => {
        infosDoEvento.preventDefault();
        setCateorias([
          ...categorias,
          {values}
        ]);
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              onChange={(infosDoEvento) => {
                setValue('nome', infosDoEvento.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              onChange={(infosDoEvento) => {
                setValue('descricao', infosDoEvento.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              onChange={(infosDoEvento) => {
                setValues('cor', infosDoEvento.target.value);
              }}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria} ${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;