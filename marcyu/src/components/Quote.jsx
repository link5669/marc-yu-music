const Quote = (props) => {
  return (
    <>
      <p style={{color: "white", fontFamily: "Georgia", lineHeight: "1.7rem", padding: "2%", fontSize: "1.1rem" }}>
        <i>"{props.quote}"</i><br/>—{" "}
        <b>
          {props.media} {props.date}
        </b>
      </p>
    </>
  );
};

export default Quote