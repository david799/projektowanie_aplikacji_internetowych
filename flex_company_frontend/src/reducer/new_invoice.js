export const SET_CLIENT_CONTACT_INFO = "SET_CLIENT_CONTACT_INFO";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_DETAILS = "SET_DETAILS";
export const SET_SUM_UP = "SET_SUM_UP";
export const SELLER_INFO = "SELLER_INFO";

const initialState = {
  clientContactInfo: {},
  products: [],
  details: {},
  sumUp: {},
  sellerInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLIENT_CONTACT_INFO": {
      const newclientContactInfo = action.payload;
      return {
        ...state,
        clientContactInfo: newclientContactInfo,
      };
    }
    case "SET_PRODUCTS": {
      return {
        ...state,
        menuToEdit: action.payload,
      };
    }
    case "SET_DETAILS": {
      return {
        ...state,
        details: action.payload,
      };
    }
    case "SET_SUM_UP": {
      return {
        ...state,
        sumUp: action.payload,
      };
    }
    case "SELLER_INFO": {
      return {
        ...state,
        sellerInfo: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export const SetClientContactInfo = (clientContactInfo, dispatch) => {
  if (dispatch({ type: SET_CLIENT_CONTACT_INFO, payload: clientContactInfo })) {
    return true;
  }
};
export const SetProducts = (products, dispatch) => {
  if (dispatch({ type: SET_PRODUCTS, payload: products })) {
    return true;
  }
};
export const SetDetails = (details, dispatch) => {
  if (
    dispatch({type: SET_DETAILS, payload: details,})
  ) {
    return true;
  }
};
export const SetSumUp = (sumUp, dispatch) => {
  if (dispatch({ type: SET_SUM_UP, payload: sumUp })) {
    return true;
  }
};
export const SetSellerInfo = (sellerInfo, dispatch) => {
  if (dispatch({ type: SELLER_INFO, payload: sellerInfo })) {
    return true;
  }
};
