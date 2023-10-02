import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterBox>
                <S.FooterSubmenu style={{justifyContent: "center"}}>
                        <S.FooterCompanyInfoIcon src={"/LogoZunne.svg"}
                            alt="logo"/>
                </S.FooterSubmenu>

                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>navegação</S.FooterSubmenuTitle>

                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={{textDecoration: "none", color: "#606060"}}>
                            O que é o programa
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href='/#ConhecaOsNegocios'
                            style={{textDecoration: "none", color: "#606060"}}>
                            Conheça os negócios
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href='/#Idealizadores'
                            style={{textDecoration: "none", color: "#606060"}}>
                            Idealizadores
                        </Link>
                    </S.FooterSubmenuItem>                   
                    <S.FooterSubmenuItem>
                        <Link href='/#Fluxo'
                            style={{textDecoration: "none", color: "#606060"}}>
                            Fluxo de recursos
                        </Link>
                    </S.FooterSubmenuItem>                   
                </S.FooterSubmenu>
                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>contatos</S.FooterSubmenuTitle>

                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={{textDecoration: "none", color: "#606060"}}>
                            Av. Endereço, 2345<br/>
• BR 116 • Fortaleza
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={{textDecoration: "none", color: "#606060"}}>
                            (85) 9999-9999
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/"
                            style={{textDecoration: "none", color: "#606060"}}>
                            administrativo@zunne.com.br
                        </Link>
                    </S.FooterSubmenuItem>                   
                </S.FooterSubmenu>
                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>sociais</S.FooterSubmenuTitle>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '1.4rem'}}>
                        <a href="https://www.instagram.com/programazunne/" target="_blank" style={{display: 'flex', justifyContent: "start", gap: '1rem', textDecoration: 'none', alignItems: 'center', color: "#606060"}}>
                            <S.FooterSubmenuSocialMedia src={"/insta.svg"}/>
                            programazunne
                        </a>
                        <a href="" target="_blank" style={{display: 'flex', justifyContent: "start", gap: '1rem', textDecoration: 'none', alignItems: 'center', color: "#606060"}}>
                            <S.FooterSubmenuSocialMedia src={"/face.svg"}/>
                            programazunne
                        </a>
                        <a href="" target="_blank" style={{display: 'flex', justifyContent: "start", gap: '1rem', textDecoration: 'none', alignItems: 'center', color: "#606060"}}>
                            <S.FooterSubmenuSocialMedia src={"/linkedin.svg"}/>
                            programazunne
                        </a>
                    </div>
                </S.FooterSubmenu>
            </S.FooterBox>
        </S.Footer>
    );
};

export default Footer;

