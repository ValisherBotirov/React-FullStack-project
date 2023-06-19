import axios from "./api";

const AuthService = {
  // register
  async  userRegister(user) {
    const res = await  axios.post("/users", { user });
    return res.data
  },

//   login
  async userLoginIn(user){
    const res = await axios.post("/users/login",{user})
    return res.data
  }

};


export default AuthService