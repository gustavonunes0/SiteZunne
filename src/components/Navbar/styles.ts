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
  @media screen and (max-width: 850px) {
    position: absolute;
    margin-top: 0rem;
  }
  `;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-top: 10%;

  @media screen and (max-width: 850px) {
    margin-top: 0;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

@media screen and (max-width: 850px) {
  width: 100%;
  flex-direction: row;
}
`;

export const ImagemTopo = styled.img`
  position: absolute;
  top: -11rem;
  
  @media screen and (max-width: 750px) {
    display: none;
    top: 0;
  }
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
    color: #ff6514;
  }
`;
export const StyledLink2 = styled.span`
  text-decoration: none;
  color: #fff;
  background-color: #ff6514;
  border-radius: 1.2rem;
  padding: .1rem .7rem;

  &:hover{
    border: none;
    color: #ff6514;
    background-color: #fff;
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
    top: 7.8rem;
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