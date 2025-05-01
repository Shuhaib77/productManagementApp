import * as Yup from 'yup'


export const registerSchema=Yup.object().shape({
    email:Yup.string().email("enter valid mail").required("mail is requird"),
    name:Yup.string().required("name requird"),
    password:Yup.string().min(5).required("password requird"),
    // confirmpassword:Yup.string().oneOf([Yup.ref("password")],"password not match").required("confirm pass requird")
})
