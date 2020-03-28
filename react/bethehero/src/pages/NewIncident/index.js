import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css'

import api from '../../services/api';

export default function NewIncident(){  
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[value, setValue] = useState('');
  const ongId = localStorage.getItem('ongID');
  const history = useHistory();

 async function handleNewIncident(e){
    e.preventDefault();

    const data={
      title,
      description,
      value,
    };
    try{
      await api.post('incidents', data, {
        headers:{
          Authorization: ongId,
        }
      })
      history.push('/profile');
    } catch(err){
      alert("Erro ao cadastrar");
    }
  }
  return (
    <div className="newIncident-container">

    <div className="content">
      <section>
      <img src={logoImg} alt="BeTheHero"/>
      <h1> Cadastrar novo caso </h1>
      <p> Descreva o caso detalhadamente </p>
      <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#e02041"/>
          Voltar para home
        </Link>
      </section>
      <form onSubmit={handleNewIncident}>
      <input placeholder="Título do caso"
      value={title}
      onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Descrição"
      value={description}
      onChange={e => setDescription(e.target.value)} />
      <input placeholder="Valor em reais"
      value={value}
      onChange={e => setValue(e.target.value)} />
      <div className="input-group">
      </div>
      <button className="button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
  )
}