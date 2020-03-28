import React from "react";
import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";
import logoImg from "../assets/logo.svg";
import heoroesImg from "../assets/heroes.png";
import { Button } from "../components/Button";
import { Input } from "../components/TextInput";
import CustomLink from "../components/CustomLink";
import api from "../services/api";

function Logon({ history }) {
  const [id, setId] = React.useState("");

  const handleLogin = async event => {
    event.preventDefault();

    try {
      const response = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      alert(`Erro no login, tente novamente!`);
    }
  };

  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Be the hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <Input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <Button type="submit">Entrar</Button>

          <CustomLink to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </CustomLink>
        </form>
      </Form>

      <img src={heoroesImg} alt="" />
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
  justify-content: space-between;
`;

const Form = styled.form`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

export default Logon;
