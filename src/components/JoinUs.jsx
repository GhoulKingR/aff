import { Col, Container, Row } from "react-bootstrap";
import { Discord } from 'react-bootstrap-icons';
import styled from "styled-components";

const JoinUsBtn = styled.button`
transition: background-color 0.5s ease-in-out;
`;

const DiscordBtn = styled.button`
background-color: rgba(255, 255, 255, 0);
transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
`;

function JoinUs(secondText) {
    return ( <Container>
        <Row>
            <Col xs={6}>
                <JoinUsBtn className="rounded p-2 mt-2 ml-2 mr-2 mb-px w-full bg-red-500 hover:bg-red-900">Join Us</JoinUsBtn>
            </Col>
            <Col xs={6}>
                <DiscordBtn className="flex justify-center rounded p-2 mt-2 ml-2 mr-2 mb-px w-full border-1 hover:bg-white hover:text-black">
                    <div className="flex">
                        <div className="pt-1 pr-2">
                            <Discord />
                        </div>
                        <div>
                            Discord
                        </div>
                    </div>
                </DiscordBtn>
            </Col>
        </Row>
    </Container>
    );
}

export default JoinUs;