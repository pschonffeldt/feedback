import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/contants";

type FeedbackFromProps = {
  onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedbackFromProps) {
  const [text, setText] = useState("");
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
    onAddToList(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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
