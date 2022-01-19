import { Col, Row } from "react-bootstrap";
import AboutBg from "../assets/aboutBg.svg";
import styled from "styled-components";
import JoinUs from "./JoinUs";

const TextSection = styled.div`

`;

const Head = styled.div`

`;

const Body = styled.p`

`;

const Surrounding = styled.div`
background: url(${AboutBg});
background-size: cover;
overflow: hidden;
`;

function About() {
    return ( 
        <Surrounding id="about">
            <Row>
                <Col xs={0}  md={7}></Col>
                <Col xs={12} md={5}>
                    <TextSection className="bg-black/[0.6] p-9">
                        <Head className="font-bold text-3xl mb-10">About the project</Head>
                        <Body>
                            AFF is a collection of 10,000 non-fungible Angry Frogs tokens (NFTs) — one-of-a-kind digital collectibles. Your Angry Frogs Famiglia NFT acts as La Famiglia identification card. Angry Frogs Famiglia are created programmatically from 500 distinct traits, such as the expression, cap, and apparel, among other things. While all frogs are great, some are more rare to pull by than others. The Frogs are stored on the Ethereum blockchain as ERC-721 tokens, and their data is stored on the IPFS.
                        </Body>
                        <JoinUs />
                    </TextSection>
                </Col>
            </Row>
        </Surrounding>
    );
}

export default About;