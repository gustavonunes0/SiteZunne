import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
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

export const BolaLaranja = styled.div`
  width: 100%;  
  height: 80rem;
  border-radius: 100%;
  z-index: -5;
  top: 18%;
  background-color: #ff6514;
  position: absolute;
  @media screen and (max-width: 880px) {
    width: 100vw;
    border-radius: 50% 50% 0 0;
    top: 10%;
  }

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const SpanZunne = styled.span`
  width: 80%;
  font-size: .8rem;
  color: #fff;
  text-align: justify;

  @media screen and (max-width: 850px) {

  }
  @media screen and (max-width: 580px) {
    color: #D4D4D4;
  }
`;

export const Titulo = styled.span`
  width: 80%;
  font-size: 3rem;
  color: #fff;
  line-height: 4rem;
  @media screen and (max-width: 850px) {

  }
  @media screen and (max-width: 580px) {
    font-size: 2rem;
    color: #606060;
  }
`;

export const Span55 = styled.span`
  width: 80%;
  font-size: 3rem;
  color: #fff;
  line-height: 4rem;
  @media screen and (max-width: 850px) {

  }
  @media screen and (max-width: 580px) {
    font-size: 2rem;
    color: #ff6514 !important;
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
