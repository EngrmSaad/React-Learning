//this file contain all apis related to to Admin section of LL (line leader)

//importing part
// -this import is from reducer


// -this import is from api-routes


import axios from "axios";
import { CREATE_DEMOREQUEST } from "../../Apiroutes/apiRoutes";
// import { toast } from "react-toastify";


//this function has API call in which it get all Question from AdminLL


//this function has API call in which you can create or add question for admin LL
export const creatDemoRequest = async (dispatch, inputData) => {
  console.log("result from createQuestionSH fnction", inputData);
 
  try {
    const result = await axios.post(`${CREATE_DEMOREQUEST}`, inputData);
    console.log("result ", result);
    
    // toast.success("Inserted Successfully");
    return result;
  } catch (err) {
    
   return err
  }
};

//this function has API call in which you can update question from admin LL

