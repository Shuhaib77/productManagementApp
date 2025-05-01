import * as Yup from 'yup'

 export const loginschema=Yup.object().shape({
    email:Yup.string().email("enter valid mail").required("email is requird"),
    password:Yup.string().min(5,"5character requird").required("passwordrequird")
 })