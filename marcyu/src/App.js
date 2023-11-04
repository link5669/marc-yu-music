import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "./components/Navbar";
import Quote from "./components/Quote";
import MarcFooter from "./components/Footer";
import RandomList from "./components/RandomList";

function App() {
  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <RandomList/>
        <Container>
          <Row>
            <Col>
              <img style={{ width: "50vw" }} src={require("./marc_yu.jpeg")} />
            </Col>
            <Col>
              <div class="textbox">
                <h2 class="subhead">
                  Marc Yu is an award-winning pianist, composer, and arranger
                  from Los Angeles.
                </h2>
                <p
                  style={{
                    color: "white",
                    fontFamily: "Georgia",
                    lineHeight: "2rem",
                  }}
                >
                  With a passion for film and mixed media, Marc has scored
                  Lifetime’s <b>Missing Twin</b>, short films <b>Stalling</b>,{" "}
                  <b>Shpilkes</b>, and <b>Scamper</b>, and more. His
                  professional work can be heard on Netflix’s animated{" "}
                  <b>Ridley Jones</b>, Hallmark’s romantic comedy{" "}
                  <b>A Paris Proposal</b>, and psychological horror film{" "}
                  <b>The Lift</b> amongst others. Marc specializes in his
                  diverse writing of different genres, from solo works to
                  orchestral, black metal to aleatoric contemporary, striving to
                  bring visual media to life.
                </p>
              </div>
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
            <Col>
              <Quote
                quote={
                  "That [Lang Lang] has served as a role model was evident not just in Mr. Yu's camera-ready tousled hair and his bright red socks, which peeked out from under crisp black trousers, but also in the way his torso swayed and his hands fluttered through the air as he and Mr. Lang played a clean, slightly demure account of Schubert's Rondo in A."
                }
                media={"The New York Times"}
                date={"October 2009"}
              />
              <Quote
                quote={
                  "To the uninitiated, a pianist of Yu's age presuming to play so subtle and complex a work…might seem a novelty. Marc Yu banished such thoughts with a passion and technical proficiency that belie his years."
                }
                media={"Press-Register"}
                date={"November 2008"}
              />
              <Quote
                quote={
                  "The well-traveled and accomplished…music star from Los Angeles, California entertained two local crowds, impressing with his old veteran-like piano-playing."
                }
                media={"Laredo Morning Times"}
                date={"May 2006"}
              />
            </Col>
            <Col>
              {" "}
              <Quote
                quote={
                  "The bonus of spending as long as I did writing about prodigies was getting to meet Marc at age 6 and being able to keep checking in until he was on the brink of applying to college. I'd never heard such a young child play so well, or seen a mix of high spirits and unrelenting industriousness like his."
                }
                media={
                  "Ann Hulbert, Interview for Off the Charts: The Hidden Lives and Lessons of American Child Prodigies"
                }
                date={"January 2018"}
              />
              <Quote
                quote={
                  "As one of the youngest musicians ever to appear at the Royal Albert Hall throughout the Proms' 114-year history, Marc was only too aware of the significance of the occasion. [His] precocious talent has earned him comparisons to Mozart…"
                }
                media={"Evening Standard"}
                date={"September 2008"}
              />
            </Col>
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

export default App;
