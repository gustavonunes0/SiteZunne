import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 6.5rem 6.5rem 39.6rem 6.5rem;
  padding: 0 2%;
  overflow: hidden;

  
  @media screen and (max-width: 1050px) {
    margin: 6.5rem 0rem 28.5rem 0rem
  }
  @media screen and (max-width: 580px) {
    padding: 3.5rem 5rem 19rem 5rem;
    margin: 0;
  }
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 3rem 3rem;

  @media screen and (max-width: 580px) {
    gap:4rem;
  }
`;

export const ContainerInicio = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  gap: 5%;

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    place-items: center;   
    padding: 5%;
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
    place-items: center;  
    padding: 15% 8%;
  }
`;
export const ContainerDuplo = styled.div`
  display: grid;
  grid-template-columns: 35% 35%;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 580px) {
    gap: 0rem;  
    grid-template-columns: 1fr;
    place-items: center;    
    text-align: justify !important;
  }
`;

export const ContainerTopicos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-left: 2rem;
  margin-top: 4rem;

  @media screen and (max-width: 1050px) {
      gap: 0;
  }
  @media screen and (max-width: 580px) {
      text-align: justify !important;
      padding: 0;
  }
`;

export const ContainerTopicos2 = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media screen and (max-width: 1050px) {
      gap: 0;
      padding: 0 15%;
  }
  @media screen and (max-width: 580px) {
      text-align: justify !important;
      padding: 0 8%;
      gap: 0.5rem;
      display: flex;
      flex-wrap: wrap;
  }
`;

export const Etapa = styled.img`
  width: 7rem;
  
  @media screen and (max-width: 1050px) {
    width: 5rem;
    
  }
  
  @media screen and (max-width: 580px) {
    width: 3rem;
    
  }
`;

export const Etapa2 = styled.img`
    width: 2rem;
  
    @media screen and (max-width: 1050px) {
      width: 1.5rem;
    }
    @media screen and (max-width: 580px) {
      width: 1.5rem;
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
    
  @media screen and (max-width: 580px) {
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

export const Emprestimo = styled.img`
  width: 60vw;
  
  @media screen and (max-width: 580px) {
    width: 80vw;
  }
`;

export const BolaLaranja = styled.div`
  width: 100%;  
  height: 80rem;
  border-radius: 100%;
  z-index: -5;
  bottom: 0%;
  background-color: #ff6514;
  overflow: hidden;
  @media screen and (max-width: 580px) {
    width: 80vw;
  }
`;

export const ImagemFlorHomem = styled.img`
  width: 100%;
  
  @media screen and (max-width: 580px) {
    width: 120%;
    margin-left: -1.5rem;
  }
`;

export const ImagemFlorMulher = styled.img`
  width: 100%;
  margin-top: -8rem;

  @media screen and (max-width: 1050px) {
    margin-top: -3rem;
  }
  @media screen and (max-width: 580px) {
    margin-top: -2rem;
  }
`;

export const BoxVideo = styled.iframe`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 50px;
  background: #d9d9d9;
  border: none;
  
  @media screen and (max-width: 1050px) {
    width: 100%;
    height: 34rem;
    border-radius: 30px;
  }
`;

export const BoxVideo2 = styled.iframe`
  width: 77%;
  height: 60%;
  position: absolute;
  flex-shrink: 0;
  border-radius: 30px;
  background: #d9d9d9;
  border: none;

  
  @media screen and (max-width: 1050px) {
  }
  
  @media screen and (max-width: 450px) {
    border-radius: 10px;
  }
`;

export const BoxLaranja = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  
  @media screen and (max-width: 580px) {
    flex-direction: column-reverse;    
  }
`;

export const BoxReferencias = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  height: 100%;
  color: #fff;
  justify-content: start;
  padding: 2.5rem 1.5rem;
  height: 13rem;
  background-color: #ff6514;
  border: 2px solid #f2ae13;
  border-radius: 2.1rem;
  box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.25);    

  
  @media screen and (max-width: 1250px) {
    width: 35%;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.25);    
     
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1050px) {
    width: 45%;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.25);    
    font-size: 1rem;
  }
  @media screen and (max-width: 750px) {
    width: 75%;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.25);    
    text-align: justify !important;
     border-radius: 1.7rem;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 650px) {
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.25);    
    text-align: justify !important;
    font-size: .95rem;
    border-radius: 1.4rem;
    word-spacing: 0;
    height: 9.5rem;
  }
  
  @media screen and (max-width: 550px) {
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.25);    
    text-align: justify !important;
    font-size: .75rem;
    word-spacing: 0;
    height: 7.5rem;
     border-radius: 1.1rem;
  }
`;

export const SimboloAbelhaPequeno = styled.img`
  width: 3.5rem;
  position: absolute;
  top: -15%;
`;

export const ImagemBoxLaranja = styled.img`
  width: 115%;
`;

export const ImagemMulher = styled.img`
  width: 45%;

  
  @media screen and (max-width: 580px) {
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
  font-size: 2.5rem;
  text-align: start;

  
  @media screen and (max-width: 580px) {
    font-size: 1.3rem !important;
    width: 100%;
  }
`;

export const SpanDepoimento = styled.span`
  color: #fff;
  font-weight: 500;
  position: absolute;
  font-size: 1rem;
  text-align: justify !important;
   
  left: 10%;
  width: 40%;
  top: 40%;
  
  @media screen and (max-width: 1450px) {
    font-size: .79rem;
    left: 9.1%;
    top: 35%;
  }
  @media screen and (max-width: 1050px) {
    font-size: .8rem;
    left: 9.1%;
    top: 35%;
  }

  @media screen and (max-width: 1920px) {
    font-size: .7rem;
    left: 9.1%;
    top: 35%;
  }

  @media screen and (max-width: 820px) {
    font-size: .62rem;
    left: 9.1%;
    top: 35%;
  }
  
  @media screen and (max-width: 580px) {
    font-size: .45rem;
    left: 5%;
    top: 31%;
  }
  @media screen and (max-width: 510px) {
    font-size: .41rem;
    left: 5%;
    top: 31%;
  }
  
  @media screen and (max-width: 470px) {
    font-size: .38rem;
    left: 5%;
    top: 31%;
  }
  
  @media screen and (max-width: 420px) {
    font-size: .36rem;
    left: 5%;
    top: 31%;
  }
  @media screen and (max-width: 385px) {
    font-size: .31rem;
    left: 5%;
    top: 31%;
  }
`;

export const SpanNomeDepoimento = styled.span`
  color: #681d00;
  font-weight: 500;
  position: absolute;
  font-size: .9rem;
  text-align: justify !important;
  left: 10%;
  width: 40%;
  top: 78%;
  
  @media screen and (max-width: 1450px) {
    font-size: .7rem;
    left: 40.5%;
    top: 70%;
  }
  
  @media screen and (max-width: 1350px) {
    font-size: .7rem;
    left: 40.5%;
    top: 80%;
  }

  @media screen and (max-width: 1250px) {
    font-size: .7rem;
    left: 38.5%;
    top: 85%;
  }

  @media screen and (max-width: 1050px) {
    font-size: .65rem;
    left: 38.5%;
    top: 90%;
  }
  
  @media screen and (max-width: 950px) {
    left: 37%;
  }

  @media screen and (max-width: 750px) {
    left: 36%;
  }

  @media screen and (max-width: 580px) {
    font-size: .39rem;
    left: 28%;
    top: 90%;
  }
`;

export const SpanTituloPrograma = styled.span`
  color: #606060;
  font-weight: 700;
  font-size: 2.8rem;
  text-align: justify !important;

  
  @media screen and (max-width: 580px) {
    font-size: .8rem;
    width: 100%;
  }
`;

export const SpanTituloInvestimento = styled.span`
  color: #606060;
  font-weight: 500;
  font-size: 2rem;
  text-align: justify !important;
  position: absolute;
  top: -5%;
  z-index: 99;

  @media screen and (max-width: 580px) {
    font-size: 1.1rem !important;
  }
`;
export const SpanTituloInvestimento2 = styled.span`
  color: #681d00;
  width: 40%;
  font-weight: 500;
  font-size: 1.7rem;
  text-align: justify !important;
  position: absolute;
  top: -10%;
  z-index: 99;

  @media screen and (max-width: 580px) {
    font-size: 1rem !important;
    top: -15%;
  }
`;

export const SpanTituloTextoInvestimento = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 2.2rem;
  text-align: justify !important;
  position: absolute;
  top: 25%;
  width: 35%;
  left: 2%;
  z-index: 99;

  @media screen and (max-width: 580px) {
   font-size: 1.2rem !important;
  }
`;

export const SpanTituloTextoInvestimento2 = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 2.2rem;
  text-align: justify !important;
  position: absolute;
  top: 25%;
  width: 35%;
  left: 0%;
  z-index: 99;

  @media screen and (max-width: 580px) {
   font-size: 1.2rem !important;
   top: 15%;
  }
`;

export const SpanTextoInvestimento = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: justify !important;
  position: absolute;
  top: 40%;
  width: 35%;
  left: 2%;
  z-index: 99;

  @media screen and (max-width: 580px) {
    font-size: .7rem  !important;
  }
`;

export const SpanTextoInvestimento2 = styled.span`
  color: #606060;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: justify !important;
  position: absolute;
  top: 40%;
  width: 35%;
  left: 2%;
  z-index: 99;

  @media screen and (max-width: 580px) {
    font-size: .65rem  !important;
    top: 30%;
  }
`;

export const SpanTextoInvestimento3 = styled.span`
  color: #ff6514;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: justify !important;
  position: absolute;
  top: 50%;
  width: 35%;
  left: 1%;
  z-index: 99;

  @media screen and (max-width: 580px) {
    font-size: .65rem  !important;
    top: 40%;
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
  text-align: justify !important;

  @media screen and (max-width: 580px) {
    font-size: 1.3rem;    
    text-align: left;
  }
`;

export const SpanPrimeiroTexto = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: justify !important;
  width: 80%;
  margin-top: 2.5rem;
  
  @media screen and (max-width: 580px) {
    font-size: 1.1rem;
    width: 100%;
  }
`;

export const ImagemAbelha = styled.img`
  @media screen and (max-width: 580px) {
    width: 15rem;
  }
`;

export const SpanTextoAbelha = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.8rem;
  text-align: justify !important;

  @media screen and (max-width: 580px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
  }
`;

export const SpanTextos = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.7rem;
  text-align: center !important;
   

  @media screen and (max-width: 580px) {
    font-size: .97rem;    
    width: 100%;
    word-spacing: .27rem;
  }
`;
export const SpanTextos2 = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: justify !important;

  @media screen and (max-width: 1050px) {
    font-size: .9rem;    
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    font-size: .8rem;    
    width: 100%;
  }
`;

export const SpanTextos3 = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: .7rem;
  text-align: center !important;
  height: 3rem;

  @media screen and (max-width: 1050px) {
    font-size: .6rem;   
    height: 2rem;
  }
  @media screen and (max-width: 580px) {
    font-size: .45rem;    
  }
`;

interface SpanProps {
  left?: string; 
}

export const SpanTextosEmprestimo = styled.span<SpanProps>`
  position: absolute;
  width: 25%;
  color: #57575a;
  font-weight: 500;
  font-size: 1.4rem;
  top: 40%;
  text-align: center !important;
  left: ${props => props.left || '0'};


  @media screen and (min-width: 11050px) {
    top: 45%;
    font-size: 2rem;
  }

  @media screen and (max-width: 1050px) {
    font-size: .9rem !important;    
    top: 40%;
  }

  @media screen and (max-width: 580px) {
    font-size: .6rem !important;   
    left: calc(${props => props.left || '0'} + -2%); 
    top: 37%;
  }
`;

export const SpanTextosNegocios = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: justify !important;
  
  @media screen and (max-width: 580px) {
    font-size: 1rem !important;
    word-spacing: .12rem;
  }
`;

export const SpanOnu = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: justify !important;
`;

export const SpanTextosQuadrados = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: justify !important;
`;

export const SpanTextosIdealizadores = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: justify !important;
  width: 70%;
  margin-top: -2.5rem;

  @media screen and (max-width: 580px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: justify !important;
     
  }
`;

export const SpanTextosDosIdealizadores = styled.span`
  color: #57575a;
  font-weight: 500;
  font-size: 1.1rem;
  text-align: justify !important;
   
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

  @media screen and (max-width: 580px) {
    left: calc(${props => props.left || '0'} - 18%);
  }
`;

export const BolaPonto = styled.img<PontoProps>`
  width: 10%;

  @media screen and (max-width: 580px) {
    font-size: .8rem;
    width: 6%;
  }
`;

export const Data = styled.span`
  font-size: 1.2rem;
  width: 50%;
  height: 4rem;
  margin-top: -6.2rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: end;

  @media screen and (max-width: 580px) {
    font-size: .6rem;
    margin-top: -6rem !important;
  }
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

  
  @media screen and (max-width: 580px) {
    padding: .7rem 1.6rem;
    width: 10rem;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: .8rem; 
  }
`;

export const BotaoInvestir3 = styled.button`
  padding: 1.1rem 2.2rem;
  width: 20rem;
  border: none;
  color: #fff;
  font-size: 1.3rem;
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

  
  @media screen and (max-width: 1050px) {
    padding: .7rem 1rem;
    width: 11rem;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: .8rem; 
  }

  @media screen and (max-width: 580px) {
    padding: .3rem .5rem;
    width: 7rem;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: .5rem; 
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

  
  @media screen and (max-width: 580px) {
    padding: .7rem 1.6rem;
    width: 10rem;
    border-radius: 20px;
    border: none;
    font-size: .8rem; 
  }
`;

export const BotaoInvestir2Programa = styled.button`
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

  
  @media screen and (max-width: 580px) {
    padding: .3rem 1.2rem;
    width: 8rem;
    border-radius: 20px;
    border: none;
    font-size: .6rem; 
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
