import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style from './style.module.css'

const Saudacao = () => {
  const [data, setData] = useState();
  const [users, setUsers] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  // Atualiza campos de formulário
  const handleName = (e) => setNome(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  // Submete cadastro ou edição
  const handleSubmit = (e) => {
    e.preventDefault();
    editandoId ? updateUser() : postUser();
  };

  // POST: cadastrar novo usuário
  const postUser = () => {
    axios.post('http://localhost:5000/usuarios', { nome, email })
      .then(() => {
        fetchUsers();
        setNome('');
        setEmail('');
      })
      .catch(err => console.log(err));
  };

  // DELETE: remover usuário
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/usuarios/${id}`)
      .then(() => fetchUsers())
      .catch(err => console.log(err));
  };

  // Prepara edição
  const startEditUser = (user) => {
    setEditandoId(user.id);
    setNome(user.nome);
    setEmail(user.email);
  };

  // PUT: atualizar usuário
  const updateUser = () => {
    axios.put(`http://localhost:5000/usuarios/${editandoId}`, { nome, email })
      .then(() => {
        fetchUsers();
        setEditandoId(null);
        setNome('');
        setEmail('');
      })
      .catch(err => console.log(err));
  };

  const fetchApi = () => {
    axios.get('http://localhost:5000/saudacao')
      .then(response => setData(response.data))
      .catch(err => console.log(err));
  };

  const fetchUsers = () => {
    axios.get('http://localhost:5000/usuarios')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchApi();
    fetchUsers();
  }, []);

  return (
    <div className={style.container}>
      <h1>Saudação</h1>
      <p>{data?.mensagem}</p>

      <h1>Usuários:</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.nome} - {user.email}
            <button onClick={() => startEditUser(user)}>Editar</button>
            <button onClick={() => deleteUser(user.id)}>Deletar</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={handleName}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />
        <button type="submit">
          {editandoId ? 'Atualizar' : 'Cadastrar'}
        </button>
        {editandoId && (
          <button type="button" onClick={() => {
            setEditandoId(null);
            setNome('');
            setEmail('');
          }}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
};

export default Saudacao;
