import { Container, Row, Col } from "react-bootstrap";
import JoinUs from "./JoinUs";
import styled from "styled-components";
import { useEffect, useState } from "react";
import PreText from './PreText';
import Disks from '../assets/Disks.png';
import Doc from '../assets/Doc.png';
import M from '../assets/M.png';
import HeaderBanner from "../assets/HeaderBanner.svg";

const BoxContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: transparent;
padding-top: 10px;
`;

const TextZone = styled.div`
background: rgba(0,0,0,0.5);
padding: 40px;
width: 80%;
borderRadius: 20px;
`;

const Banner = styled.div`
display: flex;
flex-direction: column;
padding: 0px;
margin: 0px;
position: relative;
left: -51px;
`;

const Head = styled.div`

`;

const UnderPart = styled.div`
display: flex;
justify-content: space-between;
`;

const Text = styled.div`

`;

const WelcTag = styled.div`
height: 400px;
overflow: hidden;
`;

const BgVid = styled.div`

`;

const BText = styled.div`

`;

function Welcome() {
    const texts = ["Staking", "Whitepaper", "Metaverse"],
        images = [Disks, Doc, M],
        colors = ["#008FFB", "#CD2AFD", "#F77E21"],
        links = ["/", "/", "/"];

    let [transform, setTransform] = useState(`scale(${ window.innerWidth / 100 })`);

    useEffect(() => {
        window.onresize = () => setTransform(`scale(${ window.innerWidth / 200 })`);

        const script = document.createElement("script");
        script.innerHTML = `
        new spine.SpinePlayer("welcomeBg", {
            jsonUrl: "/assets/Frog Gangster Firing 04.json",
            atlasUrl: "/assets/Frog Gangster Firing 04.atlas",
            showControls: false,
            backgroundColor: "orange",
        });
        `;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
        // eslint-disable-next-line
    }, []);

    return ( 
        <WelcTag className="mt-5">
            <BgVid id="welcomeBg" className="overflow-hidden h-80 lg:h-200" style={{ transform }}></BgVid>
            <BText className="overflow-hidden relative bottom-80 lg:bottom-200">
                <Container className="hidden md:block">
                    <Row>
                        <Col xs={1} className="pt-4">
                            {
                                [0, 1, 2].map(val => {
                                    return <PreText key={val} text={texts[val]} image={images[val]} color={colors[val]} onClick={() => document.location.assign(links[val]) } />;
                                })
                            }
                        </Col>
                        <Col xs={10} md={9} lg={8} className="pt-4 pl-20">
                            <BoxContainer className="pl-4 pl-20">
                                <TextZone className="rounded">
                                    <Banner className="rounded" >
                                        <div className="bg-slate-800 p-3 rounded text-2xl">
                                            COME JOIN TO THE
                                        </div>
                                        <UnderPart>
                                            <img src={HeaderBanner} alt="" />
                                            <div></div>
                                        </UnderPart>
                                    </Banner>
                                    <Head className="text-3xl">ANGRY FROGS FAMILY</Head>
                                    <Text className="text-xs">The Angry Frog Famiglia is the umbrella organization for the Crypto City's five major Crypto Frog Mafia families.</Text>
                                    <JoinUs />
                                </TextZone>

                            </BoxContainer>
                        </Col>
                        <Col className="md:block hidden" md={2} lg={3}>

                        </Col>
                    </Row>
                </Container>
                
                <TextZone className="block md:hidden w-full h-full" style={{ width: "100%", height: "500px" }}>
                    <Head className="text-3xl mb-3">COME JOIN TO THE</Head>
                    <Head className="text-lg mb-3">ANGRY FROGS FAMILY</Head>
                    <Text className="text-xs">The Angry Frog Famiglia is the umbrella organization for the Crypto City's five major Crypto Frog Mafia families.</Text>
                    <JoinUs />
                    <Container>
                        <Row>
                            <Col xs={4} className="flex justify-between">
                                <div></div>
                                <PreText key={0} text={texts[0]} image={images[0]} color={colors[0]} onClick={() => document.location.assign(links[0]) } />
                            </Col>
                            <Col xs={4} className="flex justify-center">
                                <PreText key={1} text={texts[1]} image={images[1]} color={colors[1]} onClick={() => document.location.assign(links[1]) } />
                            </Col>
                            <Col xs={4} className="flex justify-between">
                                <PreText key={2} text={texts[2]} image={images[2]} color={colors[2]} onClick={() => document.location.assign(links[2]) } />
                                <div></div>
                            </Col>
                        </Row>
                    </Container>
                </TextZone>
            </BText>
        </WelcTag>
        
    );
}


export default Welcome;