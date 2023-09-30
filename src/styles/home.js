import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 6.5rem 3rem;
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 3rem 3rem;
`;

export const ContainerDuplo = styled.div`
  display: grid;
  grid-template-columns: 35% 35%;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const ContainerTriplo = styled.div`
  display: grid;
  grid-template-columns: 35% 10% 35%;
  justify-content: center;
  align-items: center;
`;

export const ContainerEmpresas = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 5%;
  justify-content: center;
  align-items: center;
`;

export const ContainerTriplo2 = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ContainerCirculoCinza = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  place-items: center;
  padding: 0 5%;
  align-items: center;
  gap: 2%;
  width: 100%;
  margin-bottom: 4rem;
`;

export const CirculoCinza = styled.img`
  width: 10rem;
  height: 10rem;
  border: 3px solid #ff6514;
  border-radius: 100%;
`;

export const DivCirculoCinza = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  padding: 2rem 1rem;
  width: 20rem;
  height: 25rem;
  background-color: #D9D9D9;
  border-radius: 3rem;
`;

export const BoxVideo = styled.iframe`
  width: 60rem;
  height: 33rem;
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

export const BoxReferencias = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
  padding: 1rem;
  background-color: #ff6514;
  border: 7px solid #f2ae13;
  border-radius: 2.5rem;
  box-shadow: 2px 4px 20px 8px rgba(0, 0, 0, 0.25);
`;

export const ImagemBoxLaranja = styled.img`
  width: 115%;
`;

export const ImagemMulher = styled.img`
  width: 45%;
`;

export const LogosEmpresas = styled.img`
  width: 60%;
`;

export const SpanTitulo = styled.span`
  color: #606060;
  font-weight: 700;
  font-size: 2.8rem;
  text-align: center;
`;

export const SpanNomes = styled.span`
  color: #57575a;
  font-size: 1rem;
  font-weight: 400;
`;

export const SpanTituloLaranja = styled.span`
  color: #ff6514;
  font-weight: 700;
  font-size: 1.9rem;
  text-align: center;
`;

export const SpanPrimeiroTexto = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  width: 80%;
  margin-top: 2.5rem;
`;

export const SpanTextoAbelha = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.8rem;
  text-align: start;
`;

export const SpanTextos = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.7rem;
  text-align: start;
`;

export const SpanTextosNegocios = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: start;
`;

export const SpanOnu = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: .9rem;
  text-align: start;
`;

export const SpanTextosQuadrados = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: start;
`;

export const SpanTextosIdealizadores = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  width: 70%;
  margin-top: -2.5rem;
`;

export const SpanTextosDosIdealizadores = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.1rem;
  text-align: justify;
`;

export const IconeLinkedin = styled.div`
  background-color: #d4d4d4;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanFonte = styled.span`
  color: #681d00;
  font-weight: 400;
  font-style: italic;
  font-size: .95rem;
  text-align: start;
`;

export const BotaoInvestir = styled.button`
  padding: 1.1rem 2.2rem;
  width: 20rem;
  border: none;
  color: #fff;
  font-size: 1.65rem;
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

export const BotaoSaberMais = styled.button`
  padding: .4rem 2rem;
  width: 90%;
  border: none;
  color: #fff;
  height: 3.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  background: #ff6514;
cursor: pointer;

  &:hover {
    background: #ff6014;
    box-shadow: 6px 8px 8px 4px rgba(0, 0, 0, 0.25);
    transition: all 400ms ease-in-out;
  }
`;

export const BotaoTransparente = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .3rem 2.2rem;
  width: 90%;
  height: 3.5rem;
  border: 2px solid #ff6514;
  color: #57575a;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: #ff6014;
    color: #fff;
    transition: all 400ms ease-in-out;
  }
`;

export const BotaoTransparente2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .3rem 2.2rem;
  width: 90%;
  height: 3.5rem;
  border: 2px solid #ff6514;
  color: #57575a;
  font-size: .9rem;
  line-height: 1rem;
  font-weight: 500;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: #ff6014;
    color: #fff;
    transition: all 40ms ease-in-out;
  }
`;
