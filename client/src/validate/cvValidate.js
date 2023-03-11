import * as yup from "yup"
import env from "../assets/env.json"
import { toast } from "react-toastify"
function showErr(mess){
  toast.error(mess)
}
const cvSchema = yup.object().shape({
  dob: yup.date().required(()=>showErr(env.REACT_APP_DOB_REQUIRED)),
  // gender: yup.string().required(()=>showErr(env.REACT_APP_GENDER_REQUIRED)),
	email: yup.string().required().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,()=>showErr(env.REACT_APP_WRONG_EMAIL)),
	phone: yup.string().required(()=>showErr(env.REACT_APP_PHONE_REQUIRED)).matches(/[0-9]+/g,()=>showErr(env.REACT_APP_WRONG_PHONE)),
  fullAddress: yup.string().required(()=>showErr(env.REACT_APP_JOBADDRESS_REQUIRED)),
  title: yup.string().required(()=>showErr(env.REACT_APP_JOB_REQUIRED))
})
export default cvSchema