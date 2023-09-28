import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (<S.Footer>
        <S.FooterBox>
            <S.FooterCompanyInfoIcon src={"/imagemFooter.svg"}
                alt="logo"/>
            <S.FooterSubmenu></S.FooterSubmenu>
        </S.FooterBox>
    </S.Footer>);
};

export default Footer;

