import * as yup from "yup"

const LoginSchema = yup.object().shape({
    username: yup.string().required("Vui lòng nhập tài khoản"),
    password: yup.string().required("Vui lòng nhập mật khẩu")
})

export default LoginSchema