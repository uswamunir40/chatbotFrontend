import axiosInstance from "../axios/axios.js";

const loginUser = async (email, password) => {
    try {
        // const res = await axiosInstance.post("/login");
        const res = await axiosInstance.post("/login ", { email, password });
        if (res.status === 200) {

            return res.data;

        }
    } catch (e) {
        console.log(e);
        throw new Error("Unable to login");
    }

}

export { loginUser }