import React from "react";
import styled from "styled-components";
import { FiPower, FiTrash2 } from "react-icons/fi";
import logoImg from "../assets/logo.svg";
import { LinkButton } from "../components/Button";
import api from "../services/api";

function Profile({ history }) {
  const [incidents, setIncidents] = React.useState([]);
  const ongName = localStorage.getItem("ongName");

  const formatMoney = value => {
    const options = { style: "currency", currency: "BRL" };
    return Intl.NumberFormat("pt-BR", options).format(value);
  };

  const handleDeleteIncident = async id => {
    try {
      await api.delete(`/incidents/${id}`);

      fetchData();

      alert("Caso deletado com sucesso!");
    } catch (error) {
      alert("Ocorreu um erro ao deletar, tente novamente");
    }
  };

  const handleLogout = () => {
    const confirmation = window.confirm("Tem certeza que deseja sair?");

    if (confirmation) {
      localStorage.clear();

      history.push("/");
    }
  };

  const fetchData = () => {
    api.get(`ongprofiles`).then(response => {
      setIncidents(response.data);
    });
  };

  React.useEffect(fetchData, []);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be the hero" />

        <span>Bem vinda, {ongName}</span>

        <LinkButton to="/incidents/new">Cadastrar novo caso</LinkButton>

        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{formatMoney(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin: 80px 0 24px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background-color: #ffffff;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;

        &:not(:first-child) {
          margin-top: 32px;
        }
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }
  }
`;

export default Profile;
