const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

export function createCustomer(fullname, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: fullname,
      nationalID: nationalID,
      createdAt: new Date().toLocaleString(),
    },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}