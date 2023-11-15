import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Link } from "react-router-dom";

const Album = (props) => {
  return (
    <div style={{ width: "100%", paddingBottom: "12%" }}>
      {props.title == "Shpilkes" ? (
        <Link
          style={{ textDecoration: "none", color: "gray" }}
          to="/music/shpilkes"
        >
          <img
            style={{ width: "100%", paddingBottom: "10%" }}
            alt="album cover"
            src={props.img}
          />
        </Link>
      ) : (
        <img
          style={{ width: "100%", paddingBottom: "10%" }}
          alt="album cover"
          src={props.img}
        />
      )}
      {props.file ? (
        <div style={{ paddingBottom: "5%" }}>
          <AudioPlayer
            src={props.file}
            onPlay={(e) => console.log("onPlay")}
            showSkipControls={false}
            showJumpControls={false}
            layout={"stacked"}
            style={{ backgroundColor: "#1b1b1b", borderRadius: "10px" }}
          />
        </div>
      ) : (
        <></>
      )}
      <p style={{ color: "white", fontFamily: "Georgia" }}>
        <b>
          {props.title}
          <br />
        </b>
        <i>{props.description}</i>
        {props.title == "Shpilkes" ? (
          <div>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="/music/shpilkes"
            >
              Learn more...
            </Link>
          </div>
        ) : (
          <div style={{ color: "black" }}>{"."}</div>
        )}
      </p>
    </div>
  );
};

export default Album;
