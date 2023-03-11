import * as yup from "yup"
import { toast } from "react-toastify"
import env from "../assets/env.json"
function showErr(mess){
	toast.error(mess)
}
const profileSchema = yup.object().shape({
	name: yup.string().required(()=>showErr(env.REACT_APP_NAME_REQUIRED)),
	gender: yup.string().required(()=>showErr(env.REACT_APP_GENDER_REQUIRED)),
	email: yup.string().required().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,()=>showErr(env.REACT_APP_WRONG_EMAIL)),
	phone: yup.string().required(()=>showErr(env.REACT_APP_PHONE_REQUIRED)).matches(/[0-9]+/g,()=>showErr(env.REACT_APP_WRONG_PHONE)),
	// avatar: avatar,
	addressId: yup.string().required(()=>showErr(env.REACT_APP_JOBADDRESS_REQUIRED)),
	title: yup.string().required(()=>showErr(env.REACT_APP_JOB_REQUIRED))
	// fullAddress: '',
	// skills: '',
	// educationCv: JSON.stringify(convertToRaw(education.getCurrentContent())),
	// objectiveCv: JSON.stringify(convertToRaw(target.getCurrentContent())),
	// activitiesCv: JSON.stringify(convertToRaw(activity.getCurrentContent())),
	// certificationsCv: JSON.stringify(convertToRaw(certificate.getCurrentContent())),
	// aboutMe: JSON.stringify(convertToRaw(aboutMe.getCurrentContent())),
	// experienceCv: JSON.stringify(convertToRaw(experience.getCurrentContent())),
})
export default profileSchema