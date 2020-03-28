import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  width: 100%;
  line-height: 60px;
  background-color: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const LinkButton = styled(Link)`
  width: 100%;
  line-height: 60px;
  background-color: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
