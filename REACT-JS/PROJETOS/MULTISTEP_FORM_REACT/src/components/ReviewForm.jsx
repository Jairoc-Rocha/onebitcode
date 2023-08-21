import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFiledHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            onChange={(e) => updateFiledHandler("review", e.target.value)}
            checked={data.review === "unsatisfied"}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            onChange={(e) => updateFiledHandler("review", e.target.value)}
            checked={data.review === "neutral"}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            required
            onChange={(e) => updateFiledHandler("review", e.target.value)}
            checked={data.review === "satisfied"}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="very-satisfied"
            name="review"
            required
            onChange={(e) => updateFiledHandler("review", e.target.value)}
            checked={data.review === "very-satisfied"}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto...."
          required
          onChange={(e) => updateFiledHandler("comment", e.target.value)}
          value={data.comment || ""}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
