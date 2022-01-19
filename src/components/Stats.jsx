import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Twitter from "../assets/Twitter.svg";
import Feedback from "../assets/Feedback.svg";
import Followers from "../assets/Followers.svg";
import NFT from "../assets/NFT.svg";

const Card = styled.div`
margin-top: 10px;
margin-bottom: 10px;
padding: 10px;
border-radius: 0.4em;
background-color: #1A2234;
display: flex;
flex-direction: column;
justify-content: center;
height: 200px;
`;

const Image = styled.img`
width: 70px;
`;

const Stat = styled.div`
color: orange;
font-size: xx-large;
`;

const Text = styled.div`
font-size: x-small;
`;

function Stats() {
    return ( 
        <div id="stats" className="flex justify-center">
            <Container className="pt-10 pb-20">
                <Row>
                    <Col className="text-center text-3xl">
                        WHY YOU CHOOSING AFF?
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Row className="">
                            <Col xs={6} md={3}>
                                <Card>
                                    <center>
                                        <Image src={NFT} />
                                        <Stat> 15k </Stat>
                                        <Text> NFTs Distributed </Text>
                                    </center>
                                </Card>
                            </Col>
                            <Col xs={6} md={3}>
                                <Card>
                                    <center>
                                        <Image src={Feedback} />
                                        <Stat> 90% </Stat>
                                        <Text> Positive Feedback </Text>
                                    </center>
                                </Card>
                            </Col>
                            <Col xs={6} md={3}>
                                <Card>
                                    <center>
                                        <Image src={Followers} />
                                        <Stat> +200k </Stat>
                                        <Text> Followers </Text>
                                    </center>
                                </Card>
                            </Col>
                            <Col xs={6} md={3}>
                                <Card>
                                    <center>
                                        <Image src={Twitter} />
                                        <Stat> +100k </Stat>
                                        <Text> Twitter Contest </Text>
                                    </center>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Row className="">
                            <Col xs={6} md={3}>
                                <Card>
                                    <center>
                                        <Image src={Followers} />
                                        <Stat> 90% </Stat>
                                        <Text> Positive Feedback </Text>
                                    </center>
                                </Card>
                            </Col>
                            <Col xs={6} md={3}>
                                <Card>
                                    <center>
                                        <Image src={Twitter} />
                                        <Stat> +100k </Stat>
                                        <Text> Twitter Contest </Text>
                                    </center>
                                </Card>
                            </Col>
                            <Col xs={6} md={3}>
                                <Card>
                                    <center>
                                        <Image src={Feedback} />
                                        <Stat> +200k </Stat>
                                        <Text> Followers </Text>
                                    </center>
                                </Card>
                            </Col>
                            <Col xs={6} md={3}>
                                <Card>
                                    <center>
                                        <Image src={Followers} />
                                        <Stat> +100k </Stat>
                                        <Text> Twitter Contest </Text>
                                    </center>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stats;