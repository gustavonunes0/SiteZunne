import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: grid;
  height: 29rem;
  grid-template-columns: 100%;
  justify-content: center;
  place-items: center;
  background-color: #fff;
  @media screen and (max-width: 850px) {
    height: auto;
    padding: 0 0 10rem 0;
  }
  @media screen and (max-width: 550px) {
    padding: 115rem 0 10rem 0;
  }
`;

export const FooterBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 20% 25% 25%;
  padding: 5.4rem 8rem;
  gap: 5%;

  @media screen and (max-width: 850px) {
    grid-template-columns: 100%;
    padding: 10%;
  }
`;


export const FooterCompanyInfoIcon = styled.img`
  width: 100%;
  @media screen and (max-width: 850px) {
    margin: 0;
    padding: 5%;
  }
`;

export const FooterSubmenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
  margin-bottom: 2%;
  color: white;

  &:first-child{
    width: 100%;
  }

  @media screen and (max-width: 850px) {
  }
`;

export const FooterSubmenuTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ff6514;
  letter-spacing: 0.1rem;
  white-space: nowrap;

  &:nth-child(2){
    margin-top: 2rem;
  }
`;

export const FooterSubmenuItem = styled.span`
  font-size: 1rem;
  color: #606060;
  display: flex;
  gap: 1.8rem;

  &:hover {
    font-weight: bold;
    filter: brightness(2);
  }
`;

export const FooterSubmenuSocialMedia = styled.img`
  width: 1.5rem;
  padding-top: 0.5rem;

  &:hover {
    filter: brightness(2);
  }
`;
