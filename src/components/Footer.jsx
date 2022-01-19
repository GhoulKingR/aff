import NavItems from "./NavItems";
import styled from "styled-components";

import Discord from "../assets/Discord.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Tweet.svg";
import Email from "../assets/Email.svg";
import Forward from "../assets/Forward.svg";
import { Col, Container, Row } from "react-bootstrap";

const Title = styled.div`
color: "#DB2A2B";
`;

function Footer() {

    let categories = [
            ["History", "/"],
            ["Events", "/"],
            ["Partners", "/"],
            ["Payments", "/"],
        ],
        usefulLinks = [
            ["Payment & Tax", "/"],
            ["Terms of service", "/"],
            ["My Account", "/"],
            ["Discount", "/"],
        ],
        resources = [
            ["Blog", "/"],
            ["Whitepaper", "/"],
            ["Reports", "/"],
        ];

    const discordLink = "/";
    const twitterLink = "/";
    const facebookLink = "/";

    let privacyPolicy = "/", t_and_c = "/";
    
    return <footer style={footer()} id="footer" className="pt-4 mt-10">

        <Container className="pb-4">
            <Row>
                <Col xs={12} md={3}>
                    <Title className="text-red-500 text-4xl">AFF</Title>
                    <div className="flex">
                        <img src={Twitter}  className="ml-2 mr-2" alt="" onClick={() => document.location.assign(discordLink)} />
                        <img src={Discord}  className="ml-2 mr-2" alt="" onClick={() => document.location.assign(twitterLink)} />
                        <img src={Facebook} className="ml-2 mr-2" alt="" onClick={() => document.location.assign(facebookLink)} />
                    </div><br />
                    <div>Get on the List</div>
                    <form style={emailSection()}>
                        <span  style={emailIcon()}>
                            <img src={Email} alt="" style={{ position: "relative", top: "8px" }} />
                        </span>
                        <input type="text" placeholder="Email Address..." style={input()}/>
                        <button type="submit" style={button()}>
                            <img src={Forward} alt="" />
                        </button>
                    </form>                
                </Col>
                <Col xs={6} md={3}>
                    <NavItems title="Categories" items={categories} />
                </Col>
                <Col xs={6} md={3}>
                    <NavItems title="Useful Links" items={usefulLinks} />
                </Col>
                <Col xs={6} md={3}>
                    <NavItems title="Resources" items={resources} />
                </Col>
            </Row>
        </Container>

        <div style={footersFooter()}>
            <Container>
                <Row>
                    <Col className="flex justify-between">
                        <div>
                            © 2022 
                            <a href="http://angryfrogs.io" style={link()}> angryfrogs.io</a>
                        </div>
                        <div></div>
                    </Col>
                    <Col className="flex justify-between">
                        <div></div>
                        <div>
                            <a href={privacyPolicy} style={customLook()}>Privacy Policy</a> | 
                            <a href={t_and_c} style={customLook()}>  Terms & Conditions</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
}

function link() {
    return {
        color: "white",
        textDecorationLine: "none",
    }
}

function customLook() {
    return {
        color: "white",
        textDecorationLine: "none",
    }
}

function button() {
    return {
        backgroundColor: "transparent",
        border: "none",
        paddingRight: "15px",
        paddingLeft: "15px",
    }
}

function input() {
    return {
        backgroundColor: "black",
        color: "white",
        border: "none",
        padding: "10px",
        width: "150px",
        fontSize: "small",
        display: "inline",
        paddingLeft: "30px",
    }
}

function footer() {
    return {
        borderTop: "1px solid gray",
        display: "flex",
        flexDirection: "column",
    }
}

function footersFooter() {
    return {
        backgroundColor: "#1A1A1A",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "10px",
        paddingBottom: "10px",
    }
}

function emailIcon() {
    return {
        position: "absolute",
        verticalAlign: "middle",
        paddingLeft: "10px",
        paddingTop: "8px",
    }
}

function emailSection() {
    return {
        backgroundColor: "#141A28",
        padding: "3px",
        width: "fit-content",
    }
}

export default Footer;