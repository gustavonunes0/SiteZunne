import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  height: 0rem;
  grid-template-columns: 100%;
  justify-content: center;
  place-items: center;
  background-color: #F68B1E;
  @media screen and (max-width: 1000px) {
    height: auto;
  }
`;

export const FooterBox = styled.div`
  width: 100%;
  position: relative;

  @media screen and (max-width: 1000px) {
    
  }
`;

export const FooterCompanyInfoIcon = styled.img`
  width: 100%;
  position: absolute;
  top:0;

  @media screen and (max-width: 1000px) {
    
  }
`;

export const FooterSubmenu = styled.div`
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 0rem solid #F68B1E;
  background: #F68B1E;
  @media screen and (max-width: 1000px) {
    
  }
`;
export const FooterSubmenuSocialMedia = styled.img`
  width: 1.5rem;
  padding-top: 0.5rem;

  &:hover {
    filter: brightness(2);
  }
`;
