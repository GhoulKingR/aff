import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import JoinUsv from "./JoinUs";

import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";

function ClubWelcome () {
    
    let  headerText = "WELCOME TO THE LA FAGMILIA CLUB",
        leftSideText = `AFF is a collection of 10,000 non-fungible Angry Frogs tokens (NFTs) — one-of-a-kind digital collectibles. Your Angry Frogs Famiglia NFT acts as La Famiglia identification card.<br />
        Angry Frogs Famiglia are created programmatically from 500 distinct traits, such as the expression, cap, and apparel, among other things. While all frogs are great, some are more rare to pull by than others. The Frogs are stored on the Ethereum blockchain as ERC-721 tokens, and their data is stored on the IPFS. It will cost you 0.07 ETH to purchase one of these Frogs.<br />
        The Angry Frogs Famiglia exists on the Ethereum blockchain, in a city called ‘FROGGY CITY, which is a mix of: ·5000 Citizens (Workers, Normal characters etc…) - 200 Traits ·2000 Businessmen - 100 Traits ·3000 Gangster - 200 Traits`,
        images = [Image1, Image2, Image3, Image4];

    let [i1, i2, i3, i4] = images;
    let [width, setWidth] = useState(window.innerWidth * 0.2);


    useEffect(() => {
        window.addEventListener("resize", () => {
            const newWidth = window.innerWidth;
            const newCalculations = newWidth * 0.2;
            setWidth(newCalculations);
        })
    // eslint-disable-next-line
    }, []);

    return <div id="clubWelcome" className='mb-20'>
        <Container>
            <Row>
                <Col>
                    <h1 style={titleStyle()}>{headerText}</h1>
                </Col>
            </Row>
            
            <Row>
                <Col md={5} className='text-xs lg:text-sm'>
                    <p>
                        {leftSideText.split("<br />")[0]}
                    </p>
                    <p>
                        {leftSideText.split("<br />")[1]}
                    </p>
                </Col>
                <Col md={7} className="md:block hidden">
                    <Row>
                        <Col className="flex justify-between">
                            <div></div>
                            <img src={i1} alt="" style={imgStyle(width)}/>
                        </Col>
                        <Col>
                            <img src={i2} alt="" style={imgStyle(width)}/>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={5} className='text-xs lg:text-sm'>
                    <p>
                        {leftSideText.split("<br />")[2]}
                    </p>
                    <JoinUsv />
                </Col>
                <Col md={7} className="md:block hidden">
                    <Row>
                        <Col className="flex justify-between">
                            <div></div>
                            <img src={i3} alt="" style={imgStyle(width)}/>
                        </Col>
                        <Col>
                            <img src={i4} alt="" style={imgStyle(width)}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
           
        </Container>
    </div>
}

function titleStyle() {
    return {
        textAlign: "center",
        padding: "30px",
    }
}

function imgStyle(width) {
    return {
        margin: "10px",
        width: "200px",
    }
}

export default ClubWelcome;