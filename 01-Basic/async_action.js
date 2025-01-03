const redux = require("redux");
const createStore = redux.createStore;

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


// 5. Create store
const store = createStore(reducer)


// Thunk allows redux to wait before dispatch fetch data inside the store