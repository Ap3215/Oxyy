import { buy_book } from "../action/book_type";

const initialState = {
  numberOfBooks: 20,
};

const BookReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case buy_book:
      return { ...state, numberOfBooks: state.numberOfBooks - action.payload };
    default:
      return state;
  }
};

export default BookReducer;
