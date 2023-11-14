import { useState, useRef, useEffect } from "react";
import TextLoop from "react-text-loop";
import { useTimer } from "react-timer-hook";
const RandomList = (props) => {
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
        setCurrWord(nextWord);
      } else {
        nextWord =
          props.primary[Math.floor(Math.random() * props.primary.length)];
        props.removeItemPrimary(nextWord);
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
      const time = new Date();
      time.setSeconds(time.getSeconds() + 0.5);
      timestamp += 2000;
      restart(time);
    },
  });

  return (
    <>
      <span style={{ color: "grey" }}>
        <i>
          {isRunning ? (
            <TextLoop interval="10" style={{ padding: 0, margin: 0 }}>
              {words.map((word, index) => (
                <p key={index}>
                  <span >
                    {word.toUpperCase()}
                  </span>
                </p>
              ))}
            </TextLoop>
          ) : (
            <span>{currWord.toUpperCase()} </span>
          )}
        </i>
      </span>
    </>
  );
};

export default RandomList;
