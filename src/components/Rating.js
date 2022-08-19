import React, { useState } from "react";

const Rating = ({select}) => {
  const [selected, setSelected] = useState();
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value);
  };
  return (
    <>
      <ul className="rating">
        <li>
          <input
            type="radio"
            id="number1"
            name="rating"
            value="1"
            onChange={handleChange}
            checked={selected === 1}
          />
          <label htmlFor="number1">1</label>
        </li>
        <li>
          <input
            type="radio"
            id="number2"
            name="rating"
            value="2"
            onChange={handleChange}
            checked={selected === 2}
          />
          <label htmlFor="number2">2</label>
        </li>
        <li>
          <input
            type="radio"
            id="number3"
            name="rating"
            value="3"
            onChange={handleChange}
            checked={selected === 3}
          />
          <label htmlFor="number3">3</label>
        </li>
        <li>
          <input
            type="radio"
            id="number4"
            name="rating"
            value="4"
            onChange={handleChange}
            checked={selected === 4}
          />
          <label htmlFor="number4">4</label>
        </li>
        <li>
          <input
            type="radio"
            id="number5"
            name="rating"
            value="5"
            onChange={handleChange}
            checked={selected === 5}
          />
          <label htmlFor="number5">5</label>
        </li>
        <li>
          <input
            type="radio"
            id="number6"
            name="rating"
            value="6"
            onChange={handleChange}
            checked={selected === 6}
          />
          <label htmlFor="number6">6</label>
        </li>
        <li>
          <input
            type="radio"
            id="number7"
            name="rating"
            value="7"
            onChange={handleChange}
            checked={selected === 7}
          />
          <label htmlFor="number7">7</label>
        </li>
        <li>
          <input
            type="radio"
            id="number8"
            name="rating"
            value="8"
            onChange={handleChange}
            checked={selected === 8}
          />
          <label htmlFor="number8">8</label>
        </li>
        <li>
          <input
            type="radio"
            id="number9"
            name="rating"
            value="9"
            onChange={handleChange}
            checked={selected === 9}
          />
          <label htmlFor="number9">9</label>
        </li>
        <li>
          <input
            type="radio"
            id="number10"
            name="rating"
            value="10"
            onChange={handleChange}
            checked={selected === 10}
          />
          <label htmlFor="number10">10</label>
        </li>
      </ul>
    </>
  );
};

export default Rating;
