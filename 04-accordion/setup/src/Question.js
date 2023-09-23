import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [isPlus, setIsPlus] = useState(true);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsPlus(!isPlus)}>
          {isPlus ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!isPlus && <p>{info}</p>}
    </article>
  );
};

export default Question;
