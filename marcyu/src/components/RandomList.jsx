import { useState, useRef, useEffect } from "react";
import TextLoop from "react-text-loop";
import { useTimer } from "react-timer-hook";
const RandomList = (props) => {
  let called = 0;
  let timestamp = props.time;
  timestamp.setSeconds(timestamp.getSeconds() + 0.5);
  const [currWord, setCurrWord] = useState("");
  let primary = ["Film", "TV", "Video Game", "Animation"];
  const words = [
    "Film",
    "TV",
    "Video Game",
    "Animation",
    "Interactive",
    "Theme Park",
    "Multimedia",
    "Multi-Genre",
    "Library",
    "Musical Theater",
    "J-Pop & Anime",
  ];
  const { isRunning, restart } = useTimer({
    autoStart: true,
    expiryTimestamp: timestamp,
    onExpire: () => {
      let nextWord;
      if (primary.includes(currWord)) {
        nextWord =
          props.secondary[Math.floor(Math.random() * props.secondary.length)];
        props.removeItemSecondary(nextWord);
        console.log(props.secondary);
        setCurrWord(nextWord);
      } else {
        nextWord =
          props.primary[Math.floor(Math.random() * props.primary.length)];
        props.removeItemPrimary(nextWord);
        console.log(props.primary);
        setCurrWord(nextWord);
      }
      const time = new Date();
      time.setSeconds(time.getSeconds() + 3);
      restartSecond(time);
    },
  });

  const { restart: restartSecond } = useTimer({
    autoStart: false,
    expiryTimestamp: timestamp,
    onExpire: () => {
      called++;
      const time = new Date();
      time.setSeconds(time.getSeconds() + 0.5);
      timestamp += 2000;
      restart(time);
    },
  });

  return (
    <>
      <div style={{ justifyContent: "center" }}>
        {isRunning ? (
          <TextLoop interval="10" style={{ padding: 0, margin: 0 }}>
            {words.map((word, index) => (
              <p key={index}>{word.toUpperCase()}</p>
            ))}
          </TextLoop>
        ) : (
          <span>{currWord.toUpperCase()} </span>
        )}
        {" | "}
        COMPOSER
      </div>
    </>
  );
};

export default RandomList;
