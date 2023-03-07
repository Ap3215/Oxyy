import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Purchase_Book from "./action/index";

const Books = () => {
  const noOfBook = useSelector((state) => state.numberOfBooks);
  const dispatch = useDispatch();
  const [number, setNumber] = useState();
  return (
    <>
      <div>Books</div>
      <div>
        <h2>Number Of Books are - {noOfBook}</h2>
        <input
          type="number"
          placeholder="Enter a Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => dispatch(Purchase_Book(number))}>
          Buy Book
        </button>
      </div>
    </>
  );
};

export default Books;
