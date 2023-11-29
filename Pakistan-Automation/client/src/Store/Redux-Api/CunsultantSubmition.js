//this file contain all apis related to to Admin section of LL (line leader)

//importing part
// -this import is from reducer

import {
  createAdminDDFailure,
  createAdminDDStart,
  createAdminDDSuccess,

} from "../Reducer/CunsultantSubmitionReducer";
// -this import is from api-routes


import axios from "axios";
// import { toast } from "react-toastify";
import { CREATE_CUNSALTAION } from "../../Apiroutes/apiRoutes";

//this function has API call in which it get all Question from AdminLL


//this function has API call in which you can create or add question for admin LL
export const creatCunsultation = async (dispatch, inputData) => {
  console.log("result from createQuestionSH fnction", inputData);
  dispatch(createAdminDDStart());
  try {
    const result = await axios.post(`${CREATE_CUNSALTAION}`, inputData);
    console.log("result ", result);
    dispatch(createAdminDDSuccess(result));
    // toast.success("Inserted Successfully");
    return result;
  } catch (err) {
    
    dispatch(createAdminDDFailure());
  }
};

//this function has API call in which you can update question from admin LL

