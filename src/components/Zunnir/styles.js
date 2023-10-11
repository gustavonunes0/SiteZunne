import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5%;
  position: absolute;
  gap: 2rem;

  @media screen and (max-width: 1250px) {
    margin-top: -2rem;
  }
  @media screen and (max-width: 850px) {
    margin-top: 0rem;
  }
  @media screen and (max-width: 550px) {
    position: absolute;
    margin-top: -2rem;
  }
  `;

export const SpanZunne = styled.span`
  width: 90%;
  font-size: .6rem;
  color: #C4C4C4;
  text-align: justify;

  @media screen and (max-width: 850px) {

  }
  @media screen and (max-width: 850px) {
    
  }
`;

export const Titulo = styled.span`
  width: 80%;
  font-size: 2rem;
  color: #606060;
  line-height: 2rem;
  @media screen and (max-width: 850px) {

  }
  @media screen and (max-width: 850px) {
    font-size: 2rem;
  }
`;

export const ImagemZunne = styled.img`
  width: 8%;

  @media screen and (max-width: 850px) {
    width: 30%;

  }
  @media screen and (max-width: 850px) {
    width: 20%;
  }
`;
