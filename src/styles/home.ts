import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 6.5rem 3rem;
  overflow: hidden;

  
  @media screen and (max-width: 550px) {
    padding: 16.5rem 3rem;
  }
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

  @media screen and (max-width: 550px) {
    gap: 0rem;  
    grid-template-columns: 1fr;
    place-items: center;    
    text-align: justify !important;
  }
`;

export const ContainerDuploImpacto = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 550px) {
    gap: 0rem;  
    grid-template-columns: 80%;
    place-items: center;    
    text-align: justify !important;
  }
`;

export const ContainerTriplo = styled.div`
  display: grid;
  grid-template-columns: 35% 10% 35%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerEmpresa = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 5%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    grid-template-columns: 100%;
    margin-bottom: 5rem;
  }
`;

export const ContainerTriplo2 = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-left: 2rem;

  @media screen and (max-width: 550px) {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: justify !important;
      padding: 0;
  }
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
    
  @media screen and (max-width: 550px) {
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

export const ContainerInvestimento = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 5rem;
  justify-content: center;
  margin-top: 6rem;
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
  gap: 0.5rem;
  padding: 2rem 1rem;
  width: 20rem;
  height: 25rem;
  background-color: #d9d9d9;
  border-radius: 3rem;
`;

export const DivImpacto = styled.div`
    width: 90%;
    border: 1px solid #ff6514;
    display: flex;
    gap: 4rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    border-radius: 4rem;

    @media screen and (max-width: 550px) {
      width: 100%;
      border-radius: 2rem;
    }
`;

export const BoxVideo = styled.iframe`
  width: 60rem;
  height: 33rem;
  flex-shrink: 0;
  border-radius: 50px;
  background: #d9d9d9;
  border: none;

  
  @media screen and (max-width: 550px) {
    width: 22rem;
    height: 14rem;
    border-radius: 30px;
  }
`;

export const BoxLaranja = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  
  @media screen and (max-width: 550px) {
    flex-direction: column-reverse;    
  }
`;

export const DivtextoMulher = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  
  @media screen and (max-width: 550px) {
    width: 100%;
    align-items: center;
    text-align: justify;
  }
`;

export const FormaLaranja1 = styled.img`
  position: absolute;
  width: 78%;
  
  @media screen and (max-width: 550px) {
    width: 68%;    
  }
`;

export const FormaLaranja2 = styled.img`
  width: 50%;

  @media screen and (max-width: 550px) {
    width: 40%;     
  }
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

  
  @media screen and (max-width: 550px) {
    width: 100%;
    box-shadow: 2px 4px 10px 8px rgba(0, 0, 0, 0.25);    
    text-align: justify !important;
  }
`;

export const ImagemBoxLaranja = styled.img`
  width: 115%;
`;

export const ImagemMulher = styled.img`
  width: 45%;

  
  @media screen and (max-width: 550px) {
   width: 18rem   
  }
`;

export const LogosEmpresas = styled.img`
  width: 60%;
`;

export const AsaLaranja = styled.img`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const SpanTitulo = styled.span`
  color: #606060;
  font-weight: 700;
  font-size: 2.8rem;
  text-align: center;

  
  @media screen and (max-width: 550px) {
    font-size: 1.3rem}
    width: 100%;
`;

export const SpanTituloInvestimento = styled.span`
  color: #606060;
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  position: absolute;
  top: -5%;
  z-index: 99;

  @media screen and (max-width: 550px) {
    font-size: 1.3rem !important;
  }
`;

export const SpanTituloTextoInvestimento = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 2.2rem;
  text-align: center;
  position: absolute;
  top: 25%;
  width: 35%;
  left: 2%;
  z-index: 99;

  @media screen and (max-width: 550px) {
   font-size: 1.2rem !important;
  }
`;

export const SpanTextoInvestimento = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  position: absolute;
  top: 40%;
  width: 35%;
  left: 2%;
  z-index: 99;

  @media screen and (max-width: 550px) {
    font-size: .7rem  !important;
  }
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

  @media screen and (max-width: 550px) {
    font-size: 1.3rem;    
    text-align: left;
  }
`;

export const SpanPrimeiroTexto = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  width: 80%;
  margin-top: 2.5rem;
  
  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
    width: 100%;
  }
`;

export const ImagemAbelha = styled.img`
  @media screen and (max-width: 550px) {
    width: 15rem;
  }
`;

export const SpanTextoAbelha = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.8rem;
  text-align: start;

  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
  }
`;

export const SpanTextos = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.7rem;
  text-align: start;
  @media screen and (max-width: 550px) {
    font-size: 1.1rem;    
    width: 100%;
  }
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
  font-size: 0.9rem;
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

  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: justify;
    word-break: break-all;
  }
`;

export const SpanTextosDosIdealizadores = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.1rem;
  text-align: justify;
  word-break: break-all;
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

export const LinhaDoTempo = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  top: 50%;
`;

interface PontoProps {
  left?: string; 
}

export const Ponto = styled.div<PontoProps>`
  position: absolute;
  top: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: ${props => props.left || '0'};
`;

export const BolaPonto = styled.img<PontoProps>`
  width: 10%;
`;

export const Data = styled.span`
  font-size: 1.3rem;
  margin-top: -4rem;
  color: #fff;
  font-weight: 500;
`;

export const SpanFonte = styled.span`
  color: #681d00;
  font-weight: 400;
  font-style: italic;
  font-size: 0.95rem;
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

  
  @media screen and (max-width: 550px) {
    padding: .7rem 1.6rem;
    width: 10rem;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: .8rem; 
  }
`;

export const BotaoInvestir2 = styled.button`
  padding: 1.1rem 2.2rem;
  top: 27%;
  position: absolute;
  width: 20rem;
  border: none;
  color: #ff6514;
  font-size: 1.65rem;
  font-weight: 700;
  border-radius: 50px;
  background: #fff;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
    transition: all 400ms ease-in-out;
  }
`;

export const BotaoSaberMais = styled.button`
  padding: 0.4rem 2rem;
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
  padding: 0.3rem 2.2rem;
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
  padding: 0.3rem 2.2rem;
  width: 90%;
  height: 3.5rem;
  border: 2px solid #ff6514;
  color: #57575a;
  font-size: 0.9rem;
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
