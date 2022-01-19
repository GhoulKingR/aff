import { useState } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink, Collapse } from "react-bootstrap";
import { CaretDown } from "react-bootstrap-icons";
import styled from 'styled-components';

const Logo = styled.div`
`;

const Button = styled.button`
background-color: black;
display: inline;
height: inherit;
`;

const CollapsedItem = styled.div`
`;

const Header = () => {
    let [position, setPosition] = useState(0);

    return <div className="fixed top-0 bg-black w-full">
            <Container onBlurCapture={() => setPosition(0)}>
                <Row>
                    <Col xs={3}>
                        <Logo className="flex">
                            <div className="text-red-500 text-4xl">
                                AFF
                            </div>
                            <div className="text-sm ml-1">
                                <div>ANGRY</div>
                                <div>FROGS</div>
                            </div>
                            <div className="text-sm ml-1">
                                FAGMILIA
                            </div>
                        </Logo>
                    </Col>
                    <Col xs={5} className="md:hidden block">
                    </Col>
                    <Col xs={9} className="md:block hidden">
                        <Nav variant="pills" className="flex justify-center">
                            <NavItem>
                                <NavLink className="text-white text-lg">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => setPosition(position === 2 ? 0 : 2) } className="py-2 px-7 w-fit">Services <CaretDown className="inline" /></Button>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => setPosition(position === 1 ? 0 : 1) } className="py-2 px-7 w-fit">Pages <CaretDown className="inline" /></Button>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white text-lg">
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>

                    <Col xs={4} className="md:hidden flex ">
                        <Button onClick={() => setPosition(position === 3 ? 0 : 3) } className="py-2 px-7 w-fit">Menu <CaretDown className="inline" /></Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Collapse id="pages" className={ position === 1 && "show"}>
                            <div>
                                <CollapsedItem className="py-1">pages</CollapsedItem>
                                <CollapsedItem className="py-1">pages</CollapsedItem>
                                <CollapsedItem className="py-1">pages</CollapsedItem>
                                <CollapsedItem className="py-1">pages</CollapsedItem>
                            </div>
                        </Collapse>
                    </Col>
                    <Col xs={12}>
                        <Collapse id="services" className={ position === 2 && "show"}>
                            <div>
                                <CollapsedItem className="py-1">services</CollapsedItem>
                                <CollapsedItem className="py-1">services</CollapsedItem>
                                <CollapsedItem className="py-1">services</CollapsedItem>
                                <CollapsedItem className="py-1">services</CollapsedItem>
                            </div>
                        </Collapse>
                    </Col>
                    <Col xs={12}>
                        <Collapse id="services" className={ position === 3 && "show"}>
                            <div>
                                <CollapsedItem className="py-1">services</CollapsedItem>
                                <CollapsedItem className="py-1">services</CollapsedItem>
                                <CollapsedItem className="py-1">services</CollapsedItem>
                                <CollapsedItem className="py-1">services</CollapsedItem>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </div>
}

export default Header;