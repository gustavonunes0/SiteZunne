import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


const Zunne: React.FC = () => {

    return (
        <>
            <S.HeaderContainer>
                <S.ImagemZunne src="/Ativo 6.svg"/>
                <S.Titulo>Vem <span style={{color: '#ff6514', fontWeight: '700'}}>Zunnir<br/></span> com a gente!</S.Titulo>
                <S.SpanZunne>Zunne é um programa de investimento de impacto positivo com foco na resolução de problemas socioambientais das regiões Nordeste e Norte.
                    O esforço visa fomentar o ecossistema de impacto nas regiões e a participação do poder privado na solução de problemas. Os idealizadores deste programa
                    são YUNUS SOCIAL BUSINESS FUND BRAZIL, CNPJ 21.625.109/0001-94, ASSOCIAÇÃO TRÊ INVESTINDO COM CAUSA, CNPJ 34.545.132/0001/10, ASSOCIAÇÃO SOMOS UM,
                    CNPJ 12.977.643/0001-79. A solução financeira será operacionalizada via plataforma direta de empréstimo coletivo Mova. A Associação Trê atua como
                    correspondente bancário da Mova Sociedade de Empréstimo entre Pessoas S.A., CNPJ 33.959.738/0001-30, com sede na Av. Brigadeiro Faria Lima, 1306,
                    6º andar, Pinheiros, CEP 01451-001 São Paulo SP – Brasil, e telefone (11) 2667-8060. A MOVA é uma instituição financeira devidamente aprovada e
                    autorizada pelo Banco Central do Brasil a realizar atividades de empréstimos e financiamentos entre pessoas, bem como promover o investimento nos
                    produtos oriundos dessa atividade, nos termos da Resolução 4.656, de 26 de abril de 2018 do Banco Central do Brasil. ATENÇÃO: Assim como em qualquer
                    investimento, não existe garantia de retorno e as taxas de rendimento são anunciadas com base na premissa de que os empréstimos sejam pagos em dia pelos
                    tomadores dos empréstimos. Os riscos dos investimentos financeiros apresentados no âmbito do Programa estão associados: (i) à capacidade do tomador de
                    honrar as obrigações assumidas, em especial, o fluxo de pagamento do valor principal e juros; e (ii) a solvência da Mova quando do momento do repasse
                    dos recursos pagos pelo tomador. Os investimentos realizados no âmbito do Programa não possuem garantia da Mova, tampouco do fundo garantidor de crédito
                    - FGC. Antes da realização de qualquer operação de financiamento por meio da plataforma da Mova, é importante que o investidor compreenda a natureza
                    da operação, forma de rentabilidade e riscos relacionados ao investimento. Este material tem propósito meramente informativo e não é e não deve ser
                    encarado como uma proposta firme em qualquer hipótese. O conteúdo disponibilizado não deve ser entendido como análise, consultoria ou qualquer tipo
                    de aconselhamento financeiro, especialmente uma análise de risco ou de crédito. O investidor é inteiramente responsável por quaisquer decisões de
                    investimentos que venham a ser tomadas com base nas informações divulgadas, sabendo que o investimento pode sujeitar o investidor a perda do capital investido.
                </S.SpanZunne>
            </S.HeaderContainer>
        </>
    );
};

export default Zunne;
