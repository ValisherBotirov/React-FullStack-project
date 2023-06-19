import axios from "./api";

const AuthService = {
  async  userRegister(user) {
    const res = await  axios.post("/users", { user });
    return res.data
  },
};


export default AuthService