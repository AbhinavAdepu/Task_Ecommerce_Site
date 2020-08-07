/**
 * @description To fetchProducts from API By hitting JSON Rest
 * @class fetchProducts
 * @author Abhinav Adepu
 */
import { FETCH_PRODUCTS } from "./types";
import { BOOKSERVICE_GET } from "./../services/BookService";
export const fetchProducts = () => {
  return dispatch => {
    (async () => {
      const data = await BOOKSERVICE_GET.getBooksFromAPI();
      const books = data.results.books;
      dispatch({ type: FETCH_PRODUCTS, payload: books });
    })();
  };
};
