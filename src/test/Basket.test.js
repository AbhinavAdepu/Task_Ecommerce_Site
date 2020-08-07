import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Basket from "../components/Basket";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const itemzz = {
  rank: 1,
  rank_last_week: 0,
  weeks_on_list: 0,
  asterisk: 0,
  dagger: 0,
  primary_isbn10: "1455521213",
  primary_isbn13: "9781455521210",
  publisher: "Grand Central",
  description:
    "The government hit man Will Robie uncovers a serious threat as he tries to stop Jessica Reel, a fellow assassin who has gone rogue.",
  price: 45.12,
  title: "THE HIT",
  author: "David Baldacci",
  contributor: "by David Baldacci",
  contributor_note: "",
  book_image: "https://s1.nyt.com/du/books/images/9781455521289.jpg",
  book_image_width: 128,
  book_image_height: 194,
  amazon_product_url:
    "http://www.amazon.com/The-Will-Robie-David-Baldacci/dp/1455521302?tag=NYTBS-20",
  age_group: "",
  book_review_link: "",
  first_chapter_link: "",
  sunday_review_link: "",
  article_chapter_link: "",
  isbns: [
    { isbn10: "1455521213", isbn13: "9781455521210" },
    { isbn10: "1455529478", isbn13: "9781455529476" },
    { isbn10: "1455521280", isbn13: "9781455521289" },
    { isbn10: "1455521175", isbn13: "9781455521173" },
    { isbn10: "1455521302", isbn13: "9781455521302" }
  ],
  buy_links: [
    {
      name: "Amazon",
      url:
        "http://www.amazon.com/The-Will-Robie-David-Baldacci/dp/1455521302?tag=NYTBS-20"
    },
    {
      name: "Apple Books",
      url:
        "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+HIT&author=David+Baldacci"
    },
    {
      name: "Barnes and Noble",
      url:
        "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781455521210"
    },
    {
      name: "Books-A-Million",
      url:
        "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BHIT%2FDavid%2BBaldacci%2F9781455521210"
    },
    {
      name: "Bookshop",
      url: "https://bookshop.org/a/3546/9781455521210"
    },
    {
      name: "Indiebound",
      url: "https://www.indiebound.org/book/9781455521210?aff=NYT"
    }
  ],
  book_uri: "nyt://book/966df040-70eb-574d-b346-7e7d8d7e8bbc"
};
const initialState = {
  cart: {
    items: [itemzz]
  },
  selectedItem: itemzz
};
const store = mockStore(initialState);

describe("Basket", () => {
  let mountedWrapper;

  const logBagDetails = {
    addToCart: jest.fn(),
    cartItems: [itemzz],
    history: {
      length: 3,
      action: "POP",
      location: {},
      createHref: jest.fn(),
      push: jest.fn()
    },
    location: { pathname: "/BuyNow", search: "", hash: "", state: undefined },
    match: { path: "/BuyNow", url: "/BuyNow", isExact: true, params: {} },
    products: [],
    selectAnItem: jest.fn(),
    selectedBook: { selectedItem: {} },
    staticContext: undefined
  };

  const wrapper = (props = logBagDetails) => {
    if (!mountedWrapper) {
      mountedWrapper = mount(
        <Provider store={store}>
          <Basket {...props} />
        </Provider>
      );
    }
    return mountedWrapper;
  };

  beforeEach(() => {
    mountedWrapper = undefined;
    localStorage.setItem(
      "cartItems",
      JSON.stringify(initialState.cart.items[0])
    );
    localStorage.setItem(
      "selectedItem",
      JSON.stringify(initialState.cart.items[0])
    );
  });

  it("should Test cart Value is 1", () => {
    const component = wrapper();
    const inst = component;
    expect(parseInt(inst.find("#cartItems").text())).toEqual(1);
  });
});
