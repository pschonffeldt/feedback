import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Colleague</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis enim,
            expedita vero obcaecati voluptates eaque eum, dolores soluta modi
            alias veniam! Illum laborum repudiandae at aperiam eligendi,
            molestias asperiores animi.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
