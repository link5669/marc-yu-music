import ReactAudioPlayer from "react-audio-player";

const Album = (props) => {
  return (
    <div style={{ width: "100%", paddingBottom: "12%" }}>
      <img
        style={{ width: "100%", paddingBottom: "10%" }}
        alt="album cover"
        src={props.img}
      />
      {props.file ? (
        <div style={{paddingBottom: "5%"}}>
        <ReactAudioPlayer id={props.id}
          style={{ width: "100%", container: "square" }}
          src={props.file}
          autoPlay
          controls
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
      </p>
    </div>
  );
};

export default Album;
