import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/contants";

type FeedbackFromProps = {
  onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedbackFromProps) {
  const [text, setText] = useState("");
  const [showValidIndicator, setshowValidIndicator] = useState(false);
  const [showInvalidIndicator, setshowInvalidIndicator] = useState(false);
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.includes("#") && text.length >= 5) {
      setshowValidIndicator(true);
      setTimeout(() => setshowValidIndicator(false), 2000);
    } else {
      setshowInvalidIndicator(true);
      setTimeout(() => setshowInvalidIndicator(false), 2000);
      return;
    }
    onAddToList(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      }`}
    >
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="Tula"
        spellCheck={false}
      />
      <label>
        Enter your feedback here, remember to #hashtag your colleague
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>SUBMIT</span>
        </button>
      </div>
    </form>
  );
}
