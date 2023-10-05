import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5%;
  margin-top: -45rem;
  gap: 2rem;

  @media screen and (max-width: 850px) {
    margin-top: -30rem;
  }
  @media screen and (max-width: 550px) {
    position: absolute;
    margin-top: -20rem;
  }
  `;

export const SpanZunne = styled.span`
  width: 100%;
  font-size: .8rem;
  color: #C4C4C4;
  text-align: justify;

  @media screen and (max-width: 850px) {

  }
  @media screen and (max-width: 850px) {
    
  }
`;

export const Titulo = styled.span`
  width: 80%;
  font-size: 3rem;
  color: #606060;
  line-height: 4rem;
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
