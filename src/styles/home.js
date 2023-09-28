import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0;
  padding-top: 6.5rem;
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 0 3rem;
`;

export const ContainerDuplo = styled.div`
  display: grid;
  grid-template-columns: 35% 35%;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const ContainerCirculoCinza = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2%;
  width: 100%;
`;

export const CirculoCinza = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: #D9D9D9;
  border-radius: 100%;
`;

export const BoxVideo = styled.iframe`
  width: 670px;
  height: 379px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #d9d9d9;
  border: none;
`;

export const BoxLaranja = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemBoxLaranja = styled.img`
  width: 115%;
`;

export const SpanTitulo = styled.span`
  color: #57575a;
  font-weight: 700;
  font-size: 2.8rem;
  text-align: center;
`;

export const SpanTituloLaranja = styled.span`
  color: #ff6514;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
`;

export const SpanPrimeiroTexto = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
  width: 58%;
`;

export const SpanTextos = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: start;
`;

export const SpanTextosIdealizadores = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
  width: 60%;
  margin-top: -2.5rem;
`;

export const SpanFonte = styled.span`
  color: #57575a;
  font-weight: 400;
  font-style: italic;
  font-size: 1.1rem;
  text-align: start;
`;

export const BotaoInvestir = styled.button`
  padding: 0.5rem 2.2rem;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 50px;
  background: #ff6514;
  box-shadow: 3px 4px 8px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background: #ff6014;
    box-shadow: 6px 8px 8px 4px rgba(0, 0, 0, 0.25);
    transition: all 400ms ease-in-out;
  }
`;
