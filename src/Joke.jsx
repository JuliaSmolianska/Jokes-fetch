import React, { useState, useRef } from "react";

export default function Joke({ setup, punchline }) {
  const [showJoke, setshowJoke] = useState(false);
  const [displayPunch, setDisplayPunch] = useState("");
  const buttonText = useRef("Show");

  return (
    <div>
      <p>
        <b>{setup}</b>
      </p>
      <p>{displayPunch}</p>
      <button className="button-62" onClick={showFullJoke}>
        {buttonText.current} joke!
      </button>
      <hr />
    </div>
  );
  function showFullJoke() {
    if (showJoke) {
      buttonText.current = "Show";
      setshowJoke(false);
      setDisplayPunch("");
    } else {
      buttonText.current = "Hide";
      setshowJoke(true);
      setDisplayPunch(punchline);
    }
  }
}
