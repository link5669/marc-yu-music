import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "../components/Navbar";
import Quote from "../components/Quote";
import MarcFooter from "../components/Footer";
import Credit from "../components/Credit";

function Credits() {
  return (
    <>
      <div
        style={{ width: "100vw", background: "black", lineHeight: "1.9rem" }}
      >
        <MarcNavbar />
        <Container>
          <Row>
            <Col />
            <Col xl={7}>
              <div class="textboxCredits">
                <h2 class="subheadCredits">Awards</h2>
                <br />
                <ul>
                  <Credit
                    title="Outstanding Achievement in Leadership (2023)"
                    from="Berklee College of Music"
                  />
                  <Credit
                    title="Recognition of Leadership in Screen Scoring (2023)"
                    from="Berklee College of Music"
                  />
                  <Credit
                    title="Certificate of Recognition (2023)"
                    from="Charleston Music Competition"
                  />
                  <Credit
                    title="Outstanding Teacher (2023)"
                    from="Global Music Organization"
                  />
                  <Credit
                    title="Curtain Up Musical Theater Winner (2022)"
                    from="Berklee College of Music"
                  />
                  <Credit
                    title="Certificate of Recognition (2022)"
                    from="Charleston Music Competition"
                  />
                  <Credit
                    title="Best Soundtrack Award (2021)"
                    from="Berklee XR Game Jam"
                  />
                  <Credit
                    title="Outstanding Achievement in Leadership (2020)"
                    from="Berklee College of Music"
                  />
                  <Credit
                    title="Most Innovative Person Award (2008)"
                    from="World Summit on Innovation & Entrepreneurship"
                  />
                  <Credit
                    title="Young Steinway Artist (2008)"
                    from="Steinway & Sons"
                  />
                  <Credit
                    title="Davidson Fellows Award (2007)"
                    from="Davidson Institute"
                  />
                </ul>
              </div>
            </Col>
            <Col />
          </Row>
          <div style={{ paddingTop: "8%" }}></div>
          <div
            style={{
              height: "1px",
              backgroundColor: "white",
              width: "100%",
            }}
          />
          <Row>
            <Col />
            <Col xl={7}>
              <div class="textboxCredits">
                <h2 class="subheadCredits">Credits</h2>
                <ul>
                  <Credit
                    title="Missing Twin"
                    from="Lifetime Feature Film | Composer"
                  />
                  <Credit
                    title="A Paris Proposal "
                    from="Hallmark Feature Film | Composer Assistant"
                  />
                  <Credit
                    title="A Very Venice Romance"
                    from="Hallmark Feature Film | Composer Assistant"
                  />
                  <Credit
                    title="Joyeux Noel"
                    from="Hallmark Feature Film | Composer Assistant"
                  />
                  <Credit
                    title="The Lift"
                    from="Feature Film | Composer Assistant"
                  />
                  <br />
                  <Credit title="Scamper" from="Short Film | Composer" />
                  <Credit title="Shpilkes" from="Short Film | Composer" />
                  <Credit title="Stalling" from="Short Film | Composer" />
                  <Credit
                    title="Ceiba Y Sus Raíces Taínas"
                    from="Short Film | Music Supervisor"
                  />
                  <br />
                  <Credit
                    title="Ridley Jones"
                    from="Netflix TV Series | Composer Assistant"
                  />
                  <Credit
                    title="The Ideal City"
                    from="TV Series | Composer Assistant"
                  />
                  <br />
                  <Credit title="Alistair" from="Video Game | Composer" />
                  <Credit
                    title="Jade Island Simulator"
                    from="Video Game | Audio Director"
                  />
                  <Credit
                    title="Space Shark"
                    from="Video Game | Audio Director"
                  />
                  <Credit
                    title="Esception"
                    from="Video Game | Sound Designer"
                  />
                  <br />
                  <Credit
                    title="Nightingale’s Piano Bar (Disney Wish)"
                    from="Disneyland Cruise Line | Arranger"
                  />
                  <Credit
                    title="Zootopia Artist Loft Storefront"
                    from="Disneyland Parks | Arranger"
                  />
                  <Credit
                    title="Avengers, Assemble!"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <Credit
                    title="The Amazing Spider-Man!"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <Credit
                    title="Doctor Strange: Mysteries of the Mystic Arts"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <Credit
                    title="The Warriors of Wakanda"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <Credit
                    title="Star Wars: Galactic Starcruiser"
                    from="Disneyland Parks | Editor Assistant"
                  />
                  <br />
                  <Credit
                    title="A Bard’s Tale: Norse Vol. 1"
                    from="Library Music | Composer"
                  />
                  <Credit
                    title="A Bard’s Tale: The Plane of Elemental Chaos Vol. 1"
                    from="Library Music | Composer"
                  />
                  <Credit
                    title="The High Citadel"
                    from="Library Music | Composer Assistant"
                  />
                  <Credit
                    title="Through the Interface"
                    from="Library Music | Composer Assistant"
                  />
                  <br />
                  <Credit
                    title="Preludes for Emma"
                    from="Video Game | Composer"
                  />
                  <Credit
                    title="Pilot Growth Equity"
                    from="Private Equity Conference featuring President Clinton | Composer"
                  />
                  <Credit
                    title="Commit Together"
                    from="Video Poetry | Composer"
                  />
                  <br />
                </ul>
              </div>
            </Col>
            <Col />
          </Row>
          <div style={{ paddingTop: "5%" }}></div>
          <div
            style={{
              height: "1px",
              backgroundColor: "white",
              width: "100%",
            }}
          />
          <Row>
            <Col />
            <Col xl={7}>
              <div
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  fontSize: "1.1rem",
                }}
              >
                <div class="textboxCredits">
                  <h2 class="subheadCredits">Other Recognitions</h2>
                  <b>Notable Performances</b>
                  <ul>
                    <li>BBC Proms at the Royal Albert Hall</li>
                    <li>Carnegie Hall with Lang Lang</li>
                    <li>GRAMMYs’ Salute to Classical Music at Disney Hall</li>
                    <li>
                      US China Strategic Economic Dialogue; George W. Bush
                      Administration
                    </li>
                    <li>
                      World Summit on Innovation and Entrepreneurship in Dubai
                    </li>
                  </ul>
                  <br />
                  <b>Notable Orchestral Performances</b>
                  <ul>
                    <li>Warsaw National Philharmonic</li>
                    <li>Reno Philharmonic</li>
                    <li>California Philharmonic Orchestra</li>
                    <li>West Michigan Symphony Orchestra</li>
                    <li>Mobile Symphony Orchestra</li>
                  </ul>
                  <br />
                  <ul>
                    <b>
                      News, Television, Documentary, Book, and Speaking
                      Appearances
                    </b>
                    <Credit
                      title="My Brilliant Brain"
                      from="National Geographic Documentary"
                    />
                    <Credit
                      title="Far from the Tree"
                      from="NY Times Best Seller by Andrew Solomon"
                    />
                    <Credit title="Off the Charts" from="by Ann Hulbert" />
                    <li>
                      <b>Conferences: </b>SENG, Idea Festival, Committee of 100
                    </li>
                    <li>
                      <b>News: </b>CNN, BBC, MSNBC, Rai 1, NPR
                    </li>
                    <li>
                      <b>Newspapers: </b>LA Times, NY Times, Chicago Tribune,
                      Washington Post
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col />
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

export default Credits;
