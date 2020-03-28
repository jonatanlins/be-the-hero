import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/TextInput";
import CustomLink from "../components/CustomLink";
import api from "../services/api";

function Register({ history }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [city, setCity] = React.useState("");
  const [uf, setUf] = React.useState("");

  const handleRegister = async event => {
    event.preventDefault();

    const formData = { name, email, whatsapp, city, uf };
    try {
      const response = await api.post("/ongs", formData);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push("/");
    } catch (error) {
      alert(`Erro no cadastro, tente novamente!`);
    }
  };

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <CustomLink to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </CustomLink>
        </section>

        <form onSubmit={handleRegister}>
          <Input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <Input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

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

    .input-group {
      display: flex;

      input + input {
        margin-left: 8px;
      }
    }
  }
`;

export default Register;
