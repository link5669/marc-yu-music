import { useState, useRef, useEffect } from "react";
const RandomList = () => {
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
  const [selectedWord, setSelectedWord] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const randomPosition = Math.floor(Math.random() * scrollWidth);
      scrollContainer.scrollTo({
        left: randomPosition,
        behavior: "smooth",
      });
      const selectedIdx = Math.floor(
        randomPosition / (scrollWidth / words.length)
      );
      setSelectedWord(words[selectedIdx]);
    }
  });

  return (
    <div>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "scroll",
          whiteSpace: "nowrap",
          padding: "10px",
          //   border: "1px solid #ccc",
          width: "100vw",
          height: "100px",
        }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              paddingRight: "20px",
              fontSize: "3rem",
              color: "white",
            }}
          >
            {word == selectedWord ? <b>{word}</b> : <i>{word}</i>}
          </span>
        ))}
      </div>
      {selectedWord && <p>Randomly selected word: {selectedWord}</p>}
    </div>
  );
};

export default RandomList;
