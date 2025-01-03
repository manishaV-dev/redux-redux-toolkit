const redux = require("redux");
const createStore = redux.createStore;

const applyMiddleWare = redux.applyMiddleware;
const thunk = require("redux-thunk").thunk;

const axios = require("axios");

// 2-  action
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

// 1. state
const initialState = {
  loading: false,
  products: [],
  error: false,
};

// 3. action creator
function fetchRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

// here we receive data from API so have to pass that as a parameter
function fetchSuccess(products) {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
}

function fetchError() {
  return {
    type: FETCH_ERROR,
  };
}

// 4 - Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

// 6. Thunk Action creator - this action creator return a function (does not have to be pure function whuch means we call define asynchronousapp call and make side effects) unlike other action creator and also we can dispatch an action inside this function

const fetchProducts = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // const products = res.data
        // console.log(products);

        const products = res.data.map((product) => product.title);
        // console.log(products);
        dispatch(fetchSuccess(products))
        
      })
      .catch((error) => {
        dispatch(fetchError());
      });
  };
};

// 5. Create store
const store = createStore(reducer, applyMiddleWare(thunk));

// 7
store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchProducts());

// Thunk allows redux to wait before dispatch fetch data inside the store

// To use async API call in redux we need two package
// 1. axios - Make get request to an API endpoint

// 2. Redux-Thunk - Using redux thank, we can define an action creator with network request using which we can make api call
