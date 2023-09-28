import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 9rem;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  top: 0;
  z-index: 100;
  margin-top: 4rem;

  @media screen and (max-width: 850px) {
    position: absolute;
  }
  `;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

@media screen and (max-width: 850px) {
  width: 100%;
}
`;

export const ImagemTopo = styled.img`
  position: absolute;
  top: -16rem;
`;

export const MenuItem = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  padding: .5rem 3.5rem;
  text-decoration: none;
  @media screen and (max-width: 850px) {
    font-size: 1.4rem;
    font-weight: 700;
    
  }

  @media screen and (max-width: 600px) {
    padding: .2rem;
  }
`;

export const StyledLink = styled.span`
  text-decoration: none;
  color: #57575A;

  &:hover{
    border: none;
  }
`;
export const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 2rem;
    height: 0.25rem;
    margin-bottom: 0.4rem;
    background: #1e2952;
    border-radius: 2px;
    transition: all 0.3s linear;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 850px) {
    display: flex;
    margin-left: auto;
    margin-right: 1rem;
  }
`;

export const MenuItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    position: absolute;
    top: 6.8rem;
    left: 0;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "calc(50vh - 7rem)" : "0")};
    padding-top: ${({ isOpen }) => (isOpen ? "3rem" : "0")};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    z-index: 1;
  }
`;