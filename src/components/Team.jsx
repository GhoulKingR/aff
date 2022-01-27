import FlowerL from "../assets/FlowerL.png";
import FlowerR from "../assets/FlowerR.png";
import Member from "../components/Member";
import Founder1 from "../assets/Founder1.png";
import Founder2 from "../assets/Founder2.png";
import Member1 from "../assets/Member1.png";
import Member2 from "../assets/Member2.png";
import Member3 from "../assets/Member3.png";
import Member4 from "../assets/Member4.png";
import OpenSea from "../assets/OpenSea.svg";
import { Container, Row, Col } from "react-bootstrap";

function Team () {
    
    return <div id="team">
        <Container>
            <Row>
                <Col xs={12}>
                    <h2 style={titleStyle()}>MEET THE TEAM</h2>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="hidden md:flex justify-between">
                    <div></div>
                    <img src={FlowerL} alt=""  style={stdHeight()}/>
                </Col>
                <Col xs={6} md={3} className="flex justify-center">
                    <Member image={Founder1} name="Don Frogleone" pos="Founder" style={stdHeight()}/>
                </Col>
                <Col xs={6} md={3} className="flex justify-center">
                    <Member image={Founder2} name="Don Caleone" pos="Founder" style={stdHeight()}/>
                </Col>
                <Col md={3} className="hidden md:flex justify-between">
                    <img src={FlowerR} alt="" style={stdHeight()}/>
                    <div></div>
                </Col>
            </Row>
            <Row>
                <Col md={3} xs={6}>
                    <Member image={Member1} name="Feleapo Hylamedici" pos="Skipper" style={stdHeight()}/>
                </Col>
                <Col md={3} xs={6}>
                    <Member image={Member2} name="Giovanni Profrogi" pos="Wet works" style={stdHeight()}/>
                </Col>
                <Col md={3} xs={6}>
                    <Member image={Member3} name="Milliana Frogiano" pos="PR Consigliere" style={stdHeight()}/>
                </Col>
                <Col md={3} xs={6}>
                    <Member image={Member4} name="Taytalia" pos="The Messenger" style={stdHeight()}/>
                </Col>
            </Row>
            <Row>
                <div style={titleStyle()}>To become a member, by an Angry Frogs on OpenSea.</div>
            </Row>
            <Row className="flex justify-content-center">
                <button style={{ width: "250px"}} className="flex h-47 bg-red-500 rounded my-5 w-40">
                    <img src={OpenSea} style={imageStyle()} alt="" className="align-topline"/> 
                    <div className="flex flex-column justify-content-center w-35">
                        Buy on Opensea
                    </div>
                </button>
            </Row>
            <Row>
                <h2 className="text-center">STAKING DEVICE</h2>
            </Row>
        </Container>
    </div>
}

function titleStyle() {
    return {
        textAlign: "center",
        paddingTop: "70px",
    }
}

function imageStyle() {
    return {
        margin: "10px",
        height: "24px",
        verticalAlign: "middle",
    }
}

function stdHeight() {
    return {
        height: "150px",
        margin: "20px",
    }
}

export default Team;