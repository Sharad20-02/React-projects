import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(() => {
        return 0;
      });
    } else {
      setIndex((currentIndex) => {
        const newIndex = currentIndex + 1;
        return newIndex;
      });
    }
  };

  const prevPerson = () => {
    if (index === 0) {
      setIndex(() => {
        return people.length - 1;
      });
    } else {
      setIndex((currentIndex) => {
        const newIndex = currentIndex - 1;
        return newIndex;
      });
    }
  };

  const checkNumber = (number) => {
    if (index === people.length - 1) {
      return 0;
    }
    if (index === 0) {
      return people.length - 1;
    }
    return number;
  };

  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex = index + 1;
    }
    setIndex(checkNumber(newIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={prevPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
