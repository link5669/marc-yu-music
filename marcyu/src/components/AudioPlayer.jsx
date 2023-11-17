import "./App.css";
import React, { useEffect } from "react";
import { Reaplay } from "reaplay";

const NewAudioPlayer = ({ trackName, songs, trackInfo }) => {
  let globalPlayer;
  if (trackName == "Shpilkes Preview")
    songs = [require("../assets/shp/SHP_Soundtrack_Preview_v1.mp3")];
  else if (trackName == "Stalling")
    songs = [require("../assets/STL+DEMO+M10+At+Shit_s+End.mp3")];
  else if (trackName == "A Bard’s Tale: Norse Vol. 1")
    songs = [require("../assets/NRS+DEMO+105+Pursuit.mp3")];

  useEffect(() => {
    let trackIndex = -1;
    for (let i = 0; i < trackInfo.length; i++) {
      if (trackName == trackInfo[i].title) {
        trackIndex = i;
      }
    }
    console.log(songs, trackName, trackInfo)
    globalPlayer.setTrackIndex(trackIndex);
  }, [trackName]);

  return (
    <Reaplay tracks={songs} startIndex={0} isPlaying={false}>
      {(player) => {
        globalPlayer = player;
        return (
          <>
            <div className="audio-player">
              <h1 className="track-name">{trackName}</h1>
              <div style={{ alignItems: "center", width: "100%" }}>
                <div style={{ display: "flex", paddingBottom: "8px" }}>
                  <div
                    className={`circular-play-pause-button ${
                      player.isPlaying ? "playing" : ""
                    }`}
                    onClick={() => {
                      player.setIsPlaying(player.isPlaying ? false : true);
                    }}
                    style={{
                      alignSelf: "center",
                    }}
                  >
                    {player.isPlaying ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi bi-pause"
                        viewBox="0 0 16 16"
                        style={{
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          borderStyle: "solid",
                          borderColor: "black",
                          borderRadius: "50%",
                        }}
                      >
                        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                      </svg>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "40px",
                          height: "40px",
                          borderStyle: "solid",
                          borderColor: "black",
                          borderRadius: "50%",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          class="bi bi-play-fill"
                          viewBox="0 0 16 16"
                          style={{
                            width: "40px", // Adjust the width of the SVG as needed
                            height: "40px", // Adjust the height of the SVG as needed
                            transform: "translateX(1px)",
                          }}
                        >
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <input
                    type="range"
                    value={player.trackProgress}
                    step="1"
                    min="0"
                    max={
                      player.duration ? player.duration : `${player.duration}`
                    }
                    className="progress"
                    onChange={(e) => player.onScrub(e.target.value)}
                    onMouseUp={(e) => player.onScrubEnd(e)}
                    onKeyUp={(e) => player.onScrubEnd(e)}
                    style={{
                      alignSelf: "center",
                      width: "100%",
                    }}
                  />
                  <p
                    style={{
                      alignSelf: "center",
                      marginBottom: "0",
                    }}
                  >
                    {player.trackProgressText.substring(1)}/
                    {player.durationText.substring(1)}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Reaplay>
  );
};

export default NewAudioPlayer;
