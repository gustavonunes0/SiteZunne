import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";

const Footer2 = () => {
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
                        <Link href=""
                            style={{textDecoration: "none", color: "#606060"}}>
                            Av. Endereço, 2345<br/>
• BR 116 • Fortaleza
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href=""
                            style={{textDecoration: "none", color: "#606060"}}>
                            (85) 99218 3350
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href=""
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
                        <a href="https://www.youtube.com/@ProgramaZunne" target="_blank" style={{display: 'flex', justifyContent: "start", gap: '1rem', textDecoration: 'none', alignItems: 'center', color: "#606060"}}>
                        <S.FooterSubmenuSocialMedia2 xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></S.FooterSubmenuSocialMedia2>
                            programazunne
                        </a>
                    </div>
                </S.FooterSubmenu>
            </S.FooterBox>
        </S.Footer>
    );
};

export default Footer2;

