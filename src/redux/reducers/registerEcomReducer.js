import { GLOBALTYPES } from "../actions/globalTypes";

const RegisterEcomReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.REGISTERECOM:
      console.log("ACTION", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default RegisterEcomReducer;
