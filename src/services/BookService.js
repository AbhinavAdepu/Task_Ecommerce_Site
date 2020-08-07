import { NY_TIMES_BOOKS } from "./../constants/constants";
import { logErrorMsg } from "./../util/Helper";
import { Http } from "./../util/Http";

/**
 * @description Helper class for API calls related to Books only
 * @class
 * @author Abhinav Adepu
 */
export class BOOKSERVICE_GET {
  /**
   * @description TO GET BOOK LIST
   * @returns data response
   */
  static get BOOKS_API_URL() {
    return `${NY_TIMES_BOOKS.BOOKS_API_URL}`;
  }

  static get BOOKS_API_KEY() {
    return `${NY_TIMES_BOOKS.BOOKS_API_KEY}`;
  }

  static get GET_BOOKS_URL() {
    return `${this.BOOKS_API_URL}${this.BOOKS_API_KEY}`;
  }
  //PLS READ THIS
  static async getBooksFromAPI() {
    try {
      /*you can uncommnet below code to check cloud json api by NewYorkTimes for Books List, 
      Be sure that API is returnung with Price for all books as "0"(ZERO) so i have used my 
      custom json taking their API as reference.
      */
      // return await Http.get(this.GET_BOOKS_URL);
      return await Http.get("db.json");
    } catch (err) {
      logErrorMsg(err, `getBooksFromAPI`);
      throw err;
    }
  }
}
