import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/contants";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(event.target.value);
  };

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="Tula"
        spellCheck={false}
      />
      {/* MARKUP */}
      <label>
        Enter your feedback here, remember to #hashtag your colleague
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button className="">
          <span>SUBMIT</span>
        </button>
      </div>
    </form>
  );
}
