import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import "./styles.css";

export default function App() {
  const [jokeList, setjokeList] = useState([]);

  useEffect(() => {}, [jokeList]);

  async function addJoke() {
    let url = "https://official-joke-api.appspot.com/random_joke";
    let response = await fetch(url);
    let joke = await response.json();

    setjokeList([...jokeList, joke]);
  }

  function removeJoke() {
    jokeList.pop();
    setjokeList([...jokeList]);
  }

  function renderJoke(_props) {
    return jokeList.map((eachJoke) => {
      return <Joke setup={eachJoke.setup} punchline={eachJoke.punchline} />;
    });
  }

  return (
    <div className="App">
      {renderJoke()}
      <button className="button-62" onClick={addJoke}>
        Add joke !
      </button>
      <button className="button-62" onClick={removeJoke}>
        Remove joke
      </button>
    </div>
  );
}
