import { REGISTER_ECOM_TYPES } from "../actions/RegisterEcomAction";
import { EditData, DeleteData } from "../actions/globalTypes";

const initialState = {
  loading: false,
  register_ecoms: [],
  result: 0,
  page: 2,
};

const handleRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ECOM_TYPES.CREATE_REGISTER_ECOM:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case REGISTER_ECOM_TYPES.LOADING_POST:
      return {
        ...state,
        loading: action.payload,
      };
    case REGISTER_ECOM_TYPES.GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        result: action.payload.result,
        page: action.payload.page,
      };
    // case POST_TYPES.UPDATE_POST:
    //     return {
    //         ...state,
    //         posts: EditData(state.posts, action.payload._id, action.payload)
    //     };
    // case POST_TYPES.DELETE_POST:
    //     return {
    //         ...state,
    //         posts: DeleteData(state.posts, action.payload._id)
    //     };
    default:
      return state;
  }
};

export default handleRegisterReducer;
