import React, { useState, useRef } from 'react';
import Head from 'next/head';
import * as S from '../styles/home';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Zunne from '@/components/Zunnir';



const Home = () => {

    // const videoRef = useRef<HTMLVideoElement | null>(null);
    // const [isPlaying, setIsPlaying] = useState(false);

    // const togglePlay = () => {
    //     if (videoRef.current?.paused) {
    //     videoRef.current?.play();
    //     setIsPlaying(true);
    //     } else {
    //     videoRef.current?.pause();
    //     setIsPlaying(false);
    //     }
    // };

    const adicionarHifens = (texto: string) => {
        return texto.replace(/(\w+)/g, '$1\u200B'); 
    };
    
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
                    <S.SpanTitulo style={{fontWeight: '400', width: '80%'}}>Polinizando o empreendedorismo de
                        <span style={{fontWeight: '700',color: '#ff6514'}}> impacto positivo para transformar o futuro</span>
                    </S.SpanTitulo>
                    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'end',alignItems: 'center',position: 'relative'}}>
                        <S.BoxVideo
                            src='https://www.youtube.com/embed/1VQD0nBZRhA'
                            title='YouTube Video'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            />
                            <S.BotaoInvestir style={{position: 'absolute',top: '93%'}}>
                                <a href='/Invista' style={{textDecoration: 'none', color:'#fff'}}>
                                    Quero investir!
                                </a>
                            </S.BotaoInvestir>
                    </div>
                        <S.SpanPrimeiroTexto>{adicionarHifens(
                            "O Zunne é um programa de investimento de impacto, que prioriza negócios de impacto positivo " +
                            "liderados por mulheres, pessoas negras e/ou indígenas, com o intuito de erradicar a pobreza e " +
                            "reduzir desigualdades no Norte e Nordeste do Brasil, democratizando o investimento de impacto.")}
                        <S.ContainerDuplo>
                        <S.ImagemAbelha src='/abelha.svg'/>
                        <S.SpanTextoAbelha>Nossa inspiração vem da conexão com a natureza: as
                            <span style={{color: '#f2ae13'}}> abelhas </span>
                            e seu trabalho de polinização que simboliza ideias como: cooperação, lealdade, sabedoria, organização e trabalho.</S.SpanTextoAbelha>
                    </S.ContainerDuplo>
                    <S.ContainerTriplo>
                        <div style={{display: 'flex',flexDirection: 'column', height: '100%', justifyContent: 'start', alignItems: 'center'}}>
                            <S.SpanTituloLaranja>O Problema</S.SpanTituloLaranja>
                            <S.SpanTextos style={{textAlign: 'justify', wordBreak: 'break-all'}}>A desigualdade social afeta grande parte da população brasileira, mas o Norte e o Nordeste são as regiões que apresentam os piores índices de desenvolvimento humano.</S.SpanTextos>
                        </div>
                        <div style={
                            {display: 'flex',justifyContent: 'center',alignItems: 'center',width: '100%',height: '100%'}}>
                            <div style={{backgroundColor: '#ff6514', width: '4px', height: '70%'}}></div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'start', alignItems: 'center'}}>
                            <S.SpanTituloLaranja>O Contexto</S.SpanTituloLaranja>
                            <S.SpanTextos style={{textAlign: 'justify', wordBreak: 'break-all'}}>Segundo a Pipe Social, apenas 21% dos negócios de impacto estão na região Nordeste e Norte, e grande parte dos fundos de impact investing estão sediados na região Sudeste do país.</S.SpanTextos>
                        </div>
                    </S.ContainerTriplo>
                    <S.ContainerTriplo2>
                        <S.BoxReferencias>
                            <S.SpanTextosQuadrados>
                                Um estudo feito pela CB Insights mostra que 38% das startups faliram por conta de falta de dinheiro ou dificuldade de conseguir investimentos.
                            </S.SpanTextosQuadrados>
                            <S.SpanFonte>
                                Fonte: gazeta do povo - 22/04/2022
                            </S.SpanFonte>
                        </S.BoxReferencias>
                        <S.BoxReferencias>
                            <S.SpanTextosQuadrados>
                                De acordo com o mapa de negócios de impacto socioambiental, negócios administrados apenas por um time feminino tendem a receber menos recursos financeiros e outros apoios para evoluir na jornada.
                            </S.SpanTextosQuadrados>
                            <S.SpanFonte>
                                Fonte: gazeta do povo – 22/04/2022
                            </S.SpanFonte>
                        </S.BoxReferencias>
                        <S.BoxReferencias>
                            <S.SpanTextosQuadrados>
                                A maior parte das organizações com programas e iniciativas<br/>
                                que apoiam e investem em negócios de impacto se concentram<br/>
                                no sudeste, em especial no estado de são paulo.
                            </S.SpanTextosQuadrados>
                            <S.SpanFonte>
                                Fonte: guia 2.5 – quintessa
                            </S.SpanFonte>
                        </S.BoxReferencias>
                    </S.ContainerTriplo2>
                    <S.BoxLaranja>
                        <S.DivtextoMulher>
                            <S.SpanTituloLaranja>A Solução</S.SpanTituloLaranja>
                            <S.SpanTextos style={{textAlign: 'left'}}>O Zunne propõe uma jornada transformadora para impulsionar negócios de impacto nas regiões Norte e Nordeste, com apoio financeiro, técnico e conexões estratégicas. <span style={{color: '#ff6514'}}>Cada investimento será uma semente plantada, cultivada e geradora de frutos que alimentam comunidades inteiras.</span></S.SpanTextos>
                            <S.BotaoInvestir>
                                <a href='/Invista' style={{textDecoration: 'none', color:'#fff'}}>
                                    Quero investir!
                                </a>
                            </S.BotaoInvestir>                        
                        </S.DivtextoMulher>
                        <S.ImagemMulher src='/mulher.svg'/>
                    </S.BoxLaranja>
                    <S.DivImpacto>
                        <S.SpanTituloImpacto style={{width: '100%'}}>O que são negócios de <span style={{color: '#ff6514'}}>impacto positivo?</span></S.SpanTituloImpacto>
                        <S.ContainerDuploImpacto>
                            <div style={{width: '100%'}}>
                                <img src='/imagemArcoIris.svg'/>
                                <div style={{backgroundColor: '#ff6514', width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <S.SpanOnu>OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL &bull; ONU</S.SpanOnu>
                                </div>
                            </div>
                            <S.SpanTextosNegocios>São negócios interessados aqueles que direcionam ou têm intenção de direcionar seus modelos de negócio para a resolução de problemas socioambientais.<br/><br/>
                                Também nos orientamos pelos Objetivos de Desenvolvimento Sustentável até 2030 da ONU
                                <a href='https://brasil.un.org/pt-br/sdgs'
                                    style={
                                        {color: '#ff6514', textDecoration: 'none'}
                                }><br/> (clique aqui para conhecer)</a>.
                            </S.SpanTextosNegocios>
                        </S.ContainerDuploImpacto>
                    </S.DivImpacto>
                    <S.SpanTitulo id='ConhecaOsNegocios'>Esses são os <span style={{color: '#ff6514'}}>negócios da nossa colmeia!</span></S.SpanTitulo>
                    <S.SpanTitulo5>Estamos selecionando os negócios e em breve estarão disponíveis.</S.SpanTitulo5>
                    {/* <S.ContainerCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/Sucre.svg'/>
                            <S.BotaoTransparente>Sucré</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Inserção da mulher nomercado de trabalho</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/RomaNegra.svg'/>
                            <S.BotaoTransparente>Roma Negra</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Inserção no mercado de trabalho e impacto ambietal</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/MudaMeuMundo.svg' style={{objectFit: 'cover'}}/>
                            <S.BotaoTransparente>Muda Meu Mundo</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Agricultura de impacto</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/yanTech.svg' style={{objectFit: 'contain'}}/>
                            <S.BotaoTransparente>Yan Tecnologia</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Software de Gestão escolar</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/grauMeio.svg' style={{objectFit: 'cover'}}/>
                            <S.BotaoTransparente>Um grau e meio</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Tecnologia contra incêndios florestais</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/oikos.svg' style={{objectFit: 'cover'}}/>
                            <S.BotaoTransparente>OIKOS</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Moradia Digna</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/refazenda.svg' style={{objectFit: 'cover'}}/>
                            <S.BotaoTransparente>REFAZENDA</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Moda consciente</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/catarina.svg' style={{objectFit: 'contain'}}/>
                            <S.BotaoTransparente>Catarina Mina</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Moda consciente</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/giardinoBuffet.svg' style={{objectFit: 'contain'}}/>
                            <S.BotaoTransparente>Giordino Buffet</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Inserção no mercado de trabalho</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/nakau.svg' style={{objectFit: 'cover'}}/>
                            <S.BotaoTransparente>NAKAU</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Agricultura de impacto</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/sdw.png' style={{objectFit: 'cover'}}/>
                            <S.BotaoTransparente>SDW</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Moradia Digna</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/poranduba.svg' style={{objectFit: 'cover'}}/>
                            <S.BotaoTransparente>Poranduba</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Turismo</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                        <S.DivCirculoCinza>
                            <S.CirculoCinza src='/atelie.svg' style={{objectFit: 'cover'}}/>
                            <S.BotaoTransparente>Ateliê da Sil</S.BotaoTransparente>
                            <S.BotaoTransparente2><span style={{width: '100%'}}>Moda consciente</span></S.BotaoTransparente2> 
                            <S.BotaoSaberMais>CLIQUE AQUI PARA SABER MAIS</S.BotaoSaberMais>
                        </S.DivCirculoCinza>
                    </S.ContainerCirculoCinza> */}
                    <S.SpanTitulo id='Idealizadores'>Idealizadores</S.SpanTitulo>
                    <S.SpanTextosIdealizadores>O Programa Zunne é construído a muitas mãos a partir de um desejo em comum: sermos impulsionadores de uma economia mais justa e próspera para todos. Ele nasce da união e colaboração entre 3 organizações que são referência em incentivo a transformação social</S.SpanTextosIdealizadores>
                    <S.ContainerEmpresa>
                        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center', height: '100%', gap: '2rem'}}>
                            <S.LogosEmpresas src='somos-um.png'/>
                            <S.SpanTextosDosIdealizadores>Somos uma articuladora de negócios de impacto que busca resolver problemas sociais e ambientais contribuindo para a construção de uma nova economia, mais justa e equilibrada, com pessoas conscientes, atuando em rede. Existimos para reduzir desigualdades e gerar oportunidades por meio dos negócios de impacto.</S.SpanTextosDosIdealizadores>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                                <a href='https://www.linkedin.com/in/ticiana-rolim-queiroz-42606a18a/' target='_blank' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none'}}>
                                    <img src='/ticiana.png' style={{height: '120px', width: '120px'}}/>
                                    <S.SpanNomes>Ticiana Queiroz</S.SpanNomes>
                                    <S.IconeLinkedin>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512" style={{fill:'#fff'}}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                    
                                    </S.IconeLinkedin>
                                </a>
                                <a href='https://www.linkedin.com/in/andreia-cardoso/' target='_blank' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none'}}>
                                    <img src='/andreia.png' style={{height: '120px', width: '120px'}}/>
                                    <S.SpanNomes>Andreia Cardoso</S.SpanNomes>
                                    <S.IconeLinkedin>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512" style={{fill:'#fff'}}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                    
                                    </S.IconeLinkedin>
                                </a>                            
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center', height: '100%', gap: '2rem'}}>
                            <S.LogosEmpresas src='yunus.png'/>
                            <S.SpanTextosDosIdealizadores>Aproveitamos o poder dos negócios sociais para resolver problemas urgentes do mundo, por meio da inovação social corporativa e da oferta de financiamento para pequenas e médias empresas de impacto. Temos um portfólio de crédito ativo com mais de 60 negócios sociais em 5 países – Brasil, Colômbia, Uganda, Quênia e Índia. No Brasil, já financiamos diversos projetos, com mais de R$ 22 milhões sob gestão.</S.SpanTextosDosIdealizadores>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                                <a href='https://www.linkedin.com/in/1mauricio-coutinho1/' target='_blank' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none'}}>
                                    <img src='/mauricio.png' style={{height: '120px', width: '120px'}}/>
                                    <S.SpanNomes>Mauricio Coutinho</S.SpanNomes>
                                    <S.IconeLinkedin>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512" style={{fill:'#fff'}}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                    
                                    </S.IconeLinkedin>
                                </a>
                                <a href='https://www.linkedin.com/in/vicentefrancisco/' target='_blank' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none'}}>
                                    <img src='/francisco.png' style={{height: '120px', width: '120px'}}/>
                                    <S.SpanNomes>Francisco Vicente</S.SpanNomes>
                                    <S.IconeLinkedin>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512" style={{fill:'#fff'}}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                    
                                    </S.IconeLinkedin>
                                </a>  
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center', height: '100%', gap: '2rem'}}>
                            <S.LogosEmpresas src='tre.png'/>
                            <S.SpanTextosDosIdealizadores>Viabilizamos investimentos com causa por meio de programas e soluções financeiras que desenvolvemos para nutrir negócios que geram impacto positivo e impulsionam transformações socioambientais. Já mobilizamos mais de R$ 15 milhões para 63 negócios com causa, por meio de uma engajada comunidade de +700 investidores!</S.SpanTextosDosIdealizadores>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                                <a href='https://www.linkedin.com/in/marcos-pedote-273177/' target='_blank' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none'}}>
                                    <img src='/marcos.png' style={{height: '120px', width: '120px'}}/>
                                    <S.SpanNomes>Marcos Pedote</S.SpanNomes>
                                    <S.IconeLinkedin>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512" style={{fill:'#fff'}}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                    
                                    </S.IconeLinkedin>
                                </a>  
                                <a href='https://www.linkedin.com/in/alinecano/' target='_blank' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none'}}>
                                    <img src='/aline.png' style={{height: '120px', width: '120px'}}/>
                                    <S.SpanNomes>Aline Cristina Cano</S.SpanNomes>
                                    <S.IconeLinkedin>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512" style={{fill:'#fff'}}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                                    
                                    </S.IconeLinkedin>
                                </a>  
                            </div>
                        </div>
                    </S.ContainerEmpresa>   
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: '5rem'}}>
                        <S.SpanTitulo id='Fluxo' style={{fontWeight: '400', width: '100%'}}>Filantropia Potencializado Investimento
                            <br/><span style={{fontWeight: '700',color: '#ff6514'}}>Estrutura Blended Finance</span>
                        </S.SpanTitulo> 
                    </div>
                    <S.ContainerInvestimento>
                        <S.FormaLaranja2 src='/BoxLaranja2.svg' style={{zIndex: '98'}}/>
                        <S.FormaLaranja1 src='/BoxLaranja.svg'/>
                        <S.FormaLaranja2 src='/BoxLaranja2.svg' style={{zIndex: '98'}}/>
                        <S.SpanTituloInvestimento>Doação</S.SpanTituloInvestimento>
                        <S.SpanTituloTextoInvestimento>R$ 500mil</S.SpanTituloTextoInvestimento>
                        <S.SpanTituloTextoInvestimento style={{left: '32.5%', top: '40%', color: '#ff6514'}}>+</S.SpanTituloTextoInvestimento>
                        <S.SpanTextoInvestimento>apoio técnico às organizações que desenvolvam o programa</S.SpanTextoInvestimento>
                        <S.SpanTituloTextoInvestimento style={{left: '59%'}}>R$ 1mi</S.SpanTituloTextoInvestimento>
                        <S.SpanTextoInvestimento style={{left: '60%'}}>fundo garantidor para casos de inadimplência</S.SpanTextoInvestimento>
                        <S.SpanTituloInvestimento style={{top: '83%'}}>Total</S.SpanTituloInvestimento>
                        <S.SpanTituloTextoInvestimento style={{left: '32.5%', top: '95%', color: '#ff6514', fontWeight: '500'}}>R$ 1.5mi</S.SpanTituloTextoInvestimento>
                    </S.ContainerInvestimento>     
                    <S.SpanTitulo style={{color:'#681d00', zIndex: '100', margin: '3rem 0 -7rem 0' }}>+</S.SpanTitulo>        
                    <S.ContainerInvestimento style={{marginTop: '10rem'}}>
                        <S.FormaLaranja2 src='/BoxLaranja.svg' style={{zIndex: '98'}}/>
                        <S.FormaLaranja1 src='/BoxLaranja2.svg' style={{zIndex: '97'}}/>
                        <S.FormaLaranja2 src='/BoxLaranja.svg' style={{zIndex: '98'}}/>
                        <S.SpanTituloInvestimento2>Investimento direcionado aos negócios</S.SpanTituloInvestimento2>
                        <S.SpanTituloTextoInvestimento2 style={{color: '#ff6514'}}>R$ 3mi</S.SpanTituloTextoInvestimento2>
                        <S.SpanTituloTextoInvestimento2 style={{left: '32.5%', top: '40%', color: '#fff'}}>+</S.SpanTituloTextoInvestimento2>
                        <S.SpanTextoInvestimento2 style={{color: '#606060', width: '50%', left: '-2.5%'}}>Grandes Investidores</S.SpanTextoInvestimento2>
                        <S.SpanTextoInvestimento3 style={{color: '#ff6514', fontWeight: '400', fontSize: '1.2rem'}}>Distribuido em 3 cotas de R$ 500mil e o restante em cotas acima de R$ 100mil</S.SpanTextoInvestimento3>
                        <S.SpanTituloTextoInvestimento3 style={{left: '58%', color: '#ff6514'}}>R$ 2mi</S.SpanTituloTextoInvestimento3>
                        <S.SpanTextoInvestimento4 style={{color: '#606060', fontSize: '1.5rem', width: '40%', left: '56%', whiteSpace: 'nowrap', marginLeft: '2%'}}>Pequenos Investidores</S.SpanTextoInvestimento4>
                        <S.SpanTextoInvestimento5 style={{color: '#ff6514', fontWeight: '400', fontSize: '1.2rem',left: '61%', marginLeft: '-2%'}}>Cotas a partir de R$ 1mil</S.SpanTextoInvestimento5>
                        <S.SpanTituloInvestimento2 style={{top: '83%',color: '#681d00'}}>Total</S.SpanTituloInvestimento2>
                        <S.SpanTituloTextoInvestimento2 style={{left: '32.5%', top: '95%', color: '#fff', fontWeight: '500'}}>R$ 5mi</S.SpanTituloTextoInvestimento2>
                    </S.ContainerInvestimento> 
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: '4rem'}}>
                        <S.SpanTitulo style={{fontWeight: '700', color: '#681d00'}}>=
                        </S.SpanTitulo> 
                    </div>            
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: '-2rem'}}>
                        <S.SpanTitulo style={{fontWeight: '400', width: '100%'}}>Recursos disponíveis para <br/>o programa:
                            <span style={{fontWeight: '700',color: '#ff6514'}}> R$ 6.5mi</span>
                        </S.SpanTitulo> 
                    </div>   
                    <S.DivAsa>
                        <S.AsaLaranja src='/AsaLaranja.svg'/>
                        <S.SpanTituloPrograma style={{position: 'absolute', color: '#fff', top: '15%'}}>Quer investir no programa?<br/>Clique aqui e entenda como!</S.SpanTituloPrograma>         
                        <S.BotaoInvestir2Programa>
                                <a href='/Investir' style={{textDecoration: 'none', color:'#ff6514'}}>
                                    Quero investir!
                                </a>
                        </S.BotaoInvestir2Programa>                        
                        <S.SpanTituloPrograma style={{position: 'absolute', color: '#fff', top: '35%'}}>Entenda a sequência do programa</S.SpanTituloPrograma>         
                        <S.LinhaDoTempo>
                            <div style={{width: '130%', height: '.3rem', backgroundColor: '#fff', position: 'relative'}}>
                                <S.Ponto left="9%">
                                    <S.Data>Mar/2023</S.Data>
                                    <S.BolaPonto src='/PontoBranco.svg'/>
                                    <S.Data2>chamada para doadores e grandes investidores</S.Data2>
                                </S.Ponto>
                                <S.Ponto left="20%">
                                    <S.Data>Maio a<br/> Jun/2023</S.Data>
                                    <S.BolaPonto src='/PontoBranco.svg'/>
                                    <S.Data2>chamada de negócios</S.Data2>
                                </S.Ponto>
                                <S.Ponto left="27.5%">
                                    <S.Data>Jul a<br/> Set/2023</S.Data>
                                    <S.BolaPonto src='/PontoBranco.svg'/>
                                    <S.Data2>seleção de negócios</S.Data2>
                                </S.Ponto>
                                <S.Ponto2 left="28.5%">
                                    <S.Data>Out a<br/> Nov/2023</S.Data>
                                    <S.BolaPonto src='/PontoMarrom.svg'/>
                                    <S.Data2>publicação das rodadas e chamada de investidores</S.Data2>
                                </S.Ponto2>
                                <S.Ponto left="35%">
                                    <S.Data>Contínuo</S.Data>
                                    <S.BolaPonto src='/PontoMarrom.svg'/>
                                    <S.Data2>acompanhamento com mentoria nos proximos 4 anos</S.Data2>
                                </S.Ponto>
                                <S.Ponto left="41%">
                                    <S.Data>Após 6 meses<br/> desembolso</S.Data>
                                    <S.BolaPonto src='/PontoMarrom.svg'/>
                                    <S.Data2>início do repagamento do empréstimo com parcelas mensais</S.Data2>
                                </S.Ponto>
                            </div>
                        </S.LinhaDoTempo>
                    </S.DivAsa>
                </S.ContainerPrincipal>
            </S.Main>
            <Zunne/>
            <Footer/>
        </>
    );
}

export default Home;
