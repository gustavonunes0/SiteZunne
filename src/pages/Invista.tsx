import React, {useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import * as S from '../styles/Invista';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Zunne from '@/components/Zunnir';


const Invista = () => {

    
    return (
        <>
            <Head>
                <title>Zunne</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/LogoZunne.svg"/>
            </Head>
            <NavBar/>
            <S.Main>
                <S.ContainerPrincipal>
                    <S.ContainerInicio>
                        <div>
                            <S.SpanTitulo>Seja protagonista da transformação do Norte & Nordeste!<span style={{fontWeight: '700',color: '#ff6514'}}>Invista em Impacto!</span> </S.SpanTitulo><br/><br/>
                            <S.SpanTextos>O Zunne é um programa de investimento de impacto, que prioriza mulheres, pessoas negras e/ou indígenas, com o intuito de erradicar a pobreza e reduzir desigualdades
                             no Norte e Nordeste do Brasil, democratizando o investimento de impacto.</S.SpanTextos><br/><br/>
                             <S.BotaoInvestir>
                                <a href='https://treinvestimentos.mova.vc/' target="_blank" style={{textDecoration: 'none', color:'#fff'}}>
                                    Quero investir!
                                </a>
                             </S.BotaoInvestir><br/><br/>
                             <S.SpanTextosNegocios style={{color: '#ff6514'}}>Cadastre-se na plataforma Trê-MOVA e aguarde o lançamento dos negócios de impacto para fazer sua reserva de investimento!</S.SpanTextosNegocios>
                        </div>
                        <S.BoxVideo
                            src='https://www.youtube.com/embed/gYJsuIhHmaA'
                            title='YouTube Video'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            />
                    </S.ContainerInicio>
                    <div style={{padding: '5%', width: '100%'}}>
                        <div style={{position: 'relative', width: '100%'}}>
                            <S.ImagemFlorHomem src='/FloresHomem.svg'/>
                        </div>
                        <div style={{position: 'relative', width: '100%'}}>
                            <S.ImagemFlorMulher src='/FloresMulher.svg'/>
                        </div>
                    </div>
                    <S.ContainerTopicos style={{gap:'2rem'}}>
                        <S.BoxReferencias>
                            <S.SimboloAbelhaPequeno src='/Ativo 6.svg'/>
                            Retorno de 10% a.a sobre os aportes (equivalente ao IPCA + prêmio)
                        </S.BoxReferencias>
                        <S.BoxReferencias>
                            <S.SimboloAbelhaPequeno src='/Ativo 6.svg'/>
                            Fundo de garantia em caso de inadimplência em até 20%
                        </S.BoxReferencias>
                        <S.BoxReferencias>
                            <S.SimboloAbelhaPequeno src='/Ativo 6.svg'/>
                            Retorno do investmento em até 4 anos com 6 meses de carência
                        </S.BoxReferencias>
                        <S.BoxReferencias>
                            <S.SimboloAbelhaPequeno src='/Ativo 6.svg'/>
                            Investimento simplificado via plataforma de investimento coletivo
                            </S.BoxReferencias>
                        <S.BoxReferencias>
                            <S.SimboloAbelhaPequeno src='/Ativo 6.svg'/>
                            Protagonismo: Você seleciona o negócio que melhor se conecta contigo!
                        </S.BoxReferencias>
                    </S.ContainerTopicos>
                    <div style={{display: 'flex', flexDirection: 'column', gap:'.9rem', padding: '5%'}}>
                        <S.SpanTitulo style={{fontWeight: '700', fontSize: '2.8rem'}}><span style={{fontWeight: '700',color: '#ff6514'}}>Como funciona</span> o investimento?</S.SpanTitulo>
                        <S.SpanTextos style={{textAlign: 'center'}}>Você poderá investir pela plataforma Trê-MOVA, na modalidade peer-to-peer ou empréstimo direto coletivo na qual vários investidores
                            podem reunir esforços, em forma de capital para financiar diretamente empréstimos solicitados por empresas.
                        </S.SpanTextos>
                        <S.SpanTextos style={{textAlign: 'center'}}>As operações não tem custos para os investidores e seu retorno financeiro conta com juros prefixados.
                        Além disso, os investidores podem alocar recursos nos negócios a partir de R$ 1000!
                        </S.SpanTextos>
                    </div>
                    <div style={{position: 'relative'}}>
                        <S.SpanTextosEmprestimo left='1.5%' style={{top: '25%'}}>Investidores (PF e PJ)</S.SpanTextosEmprestimo>
                        <S.SpanTextosEmprestimo left='37.5%' style={{color: '#fff'}}>Plataforma de empréstimo coletivo Trê-MOVA</S.SpanTextosEmprestimo>
                        <S.SpanTextosEmprestimo left='73.5%' style={{top: '25%'}}>Negócios de Impacto</S.SpanTextosEmprestimo>
                        <S.Emprestimo src='/ProcessoEmprestimo.svg'/>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', position: 'relative'}}>
                        <img src='/Flor.svg' style={{width: '70%'}}/>
                        <S.BoxVideo2
                            src='https://www.youtube.com/embed/fNPjoapw-rU'
                            title='YouTube Video'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></S.BoxVideo2>                        
                        <S.BotaoInvestir3 style={{position: 'absolute', top: '95%'}}>
                            <a href='https://treinvestimentos.mova.vc/' target="_blank" style={{textDecoration: 'none', color:'#fff'}}>
                                Quero investir!
                            </a>
                        </S.BotaoInvestir3>
                    </div>
                    <S.ContainerTopicos>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <S.Etapa src='/Etapa1.svg'/>     
                            <S.SpanTextos2 style={{textAlign: 'center'}}>Clique aqui e<br/> cadastre-se na <br/>plataforma Trê-MOVA</S.SpanTextos2>                       
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <S.Etapa src='/Etapa2.svg'/>     
                            <S.SpanTextos2 style={{textAlign: 'center'}}>Escolha a causa, o<br/> negócio e o valor que <br/>deseja investir</S.SpanTextos2>                       
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <S.Etapa src='/Etapa3.svg'/>     
                            <S.SpanTextos2 style={{textAlign: 'center'}}>faça uma simulação<br/> do valor que <br/>deseja investir</S.SpanTextos2>                       
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <S.Etapa src='/Etapa3.svg'/>     
                            <S.SpanTextos2 style={{textAlign: 'center'}}>Transfira o<br/> dinheiro via <br/>boleto ou PIX</S.SpanTextos2>                       
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <S.Etapa2 src='/Etapa5.svg'/>     
                            <S.SpanTextos2 style={{textAlign: 'center'}}>Receba o retorno<br/> financeiro e contribua <br/> com a sua causa!</S.SpanTextos2>                       
                        </div>
                    </S.ContainerTopicos>
                    <div style={{display: 'flex', flexDirection: 'column', gap:'1.8rem', alignItems: 'center', padding: '5%'}}>
                        <S.SpanTitulo style={{fontWeight: '700', fontSize: '2.8rem'}}>Seja protagonista da próxima economia!</S.SpanTitulo>
                        <S.SpanTextos style={{textAlign: 'center'}}>Você pode fazer parte do programa Zunne, direcionando recursos para negócios de impacto nas regiões
                        Norte e Nordeste do Brasil. Invista nessa causa e venha polinizar impacto com a gente!
                        </S.SpanTextos>
                        <S.BotaoInvestir>
                            <a href='https://treinvestimentos.mova.vc/' target="_blank" style={{textDecoration: 'none', color:'#fff'}}>
                                Quero investir!
                            </a>
                        </S.BotaoInvestir>
                        <S.SpanTextos style={{color: '#ff6514', textAlign: 'center'}}>Cadastre-se na plataforma Trê-MOVA e aguarde o lançamento dos negócios de impacto para fazer sua reserva de investimento!
                        </S.SpanTextos>
                    </div>
                </S.ContainerPrincipal>
            </S.Main>
            <Zunne/>
            <Footer/>
        </>
    );
}

export default Invista;