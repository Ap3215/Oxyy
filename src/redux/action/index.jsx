import { buy_book } from "./book_type";

const Purchase_Book = (payload) => {
  return {
    type: buy_book,
    payload,
  };
};

export default Purchase_Book;
