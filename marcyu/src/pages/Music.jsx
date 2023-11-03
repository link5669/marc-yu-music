import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "../components/Navbar";
import MarcFooter from "../components/Footer";
import { Link } from "react-router-dom";
import Album from "../components/Album";
import shp from "../assets/shp.jpeg";
import bard1 from "../assets/DND+NRS+Album+Cover.png";
import bard2 from "../assets/DND+ELM+Album+Cover.jpeg";
import stalling from "../assets/STL+Album+Cover.png";
import stallingAudio from "../assets/STL+DEMO+M10+At+Shit_s+End.mp3";
import bardAudio from "../assets/NRS+DEMO+105+Pursuit.mp3";
import shpAudio from "../assets/SHP+M03v3_Final+Mix_320kbps.mp3";
import missingTwin from "../assets/HMT+Album+Cover.jpg"
import alistair from "../assets/BXR+Album+Cover.jpg"

function Music() {
  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <br />
        <br />
        <Container style={{ padding: "5%" }}>
          <Row>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Georgia",
              }}
            >
              <i>
                Interested in music for your project?{" "}
                <Link style={{ color: "grey" }} to="/contact">
                  Send a message
                </Link>{" "}
                to request a custom demo reel!
              </i>
            </p>
            <Col style={{ padding: "3%" }}>
              <Album img={shp} file={shpAudio} title="Shpilkes" description="Short Film / Psychological Thriller" />
              <Album img={bard2} title="A Bard’s Tale: The Plane of Elemental Chaos Vol. 1" description="Library Music / Contemporary" />
            </Col>
            <Col style={{ padding: "3%" }}>
              <Album img={bard1} file={bardAudio} title="A Bard’s Tale: Norse Vol. 1" description="Library Music / Norse, Folk, Metal" />
              <Album img={missingTwin} title="Missing Twin" description="Feature Film / Drama, Thriller" />
            </Col>
            <Col style={{ padding: "3%" }}>
              <Album img={stalling} file={stallingAudio} title="Stalling" description="Short Film / Musical Comedy" />
              <Album img={alistair} title="Alistair" description="Video Game / Horror, Electronic" />
            </Col>
          </Row>
          <div style={{ paddingTop: "5%" }}></div>
          <div
            style={{
              height: "3px",
              backgroundColor: "white",
              width: "100%",
            }}
          />
          <div style={{ paddingTop: "5%" }}></div>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </Container>

        <MarcFooter />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Music;
