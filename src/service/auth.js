
import api from "./api";


export const register = async (values,navigate) => {
  await api.post("register", values);
  navigate("/")
};
export const login = async (values, navigate) => {
    try {
      const res = await api.post("/login", values);
      sessionStorage.setItem("id", res.data.user._id);
      sessionStorage.setItem("token", res.data.token);
      res.data.user?.role === "admin" ? navigate("/admin/view") : navigate("/home");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

//   export const getData = async (values,navigate) => {
//     useEffect(()=>{
//         getProductData(values)
//     },[])
//   };