import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [length, setLength] = useState(10);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(Number(length));
      setList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${isError ? 'error' : null}`}
          />
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="10"
            style={{ marginLeft: '25px' }}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              length={length}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
