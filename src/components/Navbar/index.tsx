import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
        <S.HeaderContainer>
          <S.HeaderBox>
            <S.Menu>
              <S.MenuItem>
                <Image alt="" src="/LogoZunne.svg" width={300} height={80} />
              </S.MenuItem>
              <S.MenuToggle onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </S.MenuToggle>
              <S.MenuItems isOpen={isOpen}> 
                <S.MenuItem>
                  <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                    <S.StyledLink>O que é o Programa</S.StyledLink>
                  </Link>
                </S.MenuItem>
                <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                    <S.StyledLink>Conheça os negócios</S.StyledLink>
                  </Link>
                </S.MenuItem>
                <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                    <S.StyledLink>Idealizadores</S.StyledLink>
                  </Link>
                </S.MenuItem>
                <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                    <S.StyledLink>Fluxo de recursos</S.StyledLink>
                  </Link>
                </S.MenuItem>
                <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                    <S.StyledLink>Invista!</S.StyledLink>
                  </Link>
                </S.MenuItem>
              </S.MenuItems>
            </S.Menu>
          </S.HeaderBox>
        </S.HeaderContainer>
    </>
  );
};

export default NavBar;
