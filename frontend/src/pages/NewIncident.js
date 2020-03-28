import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Input, TextArea } from "../components/TextInput";
import CustomLink from "../components/CustomLink";
import api from "../services/api";

function NewIncident({ history }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [value, setValue] = React.useState("");

  const handleNewIncident = async event => {
    event.preventDefault();

    try {
      await api.post("/incidents", { title, description, value });

      alert(`Caso cadastrado com sucesso!`);

      history.push("/profile");
    } catch (error) {
      alert(`Erro ao cadastrar caso, tente novamente!`);
    }
  };

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastrar novo caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <CustomLink to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </CustomLink>
        </section>

        <form onSubmit={handleNewIncident}>
          <Input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 96px;
  background-color: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }

  form {
    width: 100%;
    max-width: 450px;

    input {
      margin-top: 8px;
    }

    textarea {
      margin: 8px 0 -4px;
    }
  }
`;

export default NewIncident;
