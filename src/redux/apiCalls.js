import { loginStart, loginSuccess, loginFailure, userLogoutSuccess, userLogoutStart, userLogoutFailure ,userLogout } from "./userSlice";
import { userRequest, publicRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess } from "./productSlice";


export const login = async (dispatch , user) => {
    dispatch(loginStart());
    try {
        const res = await userRequest.post("/auth/login" , user )
        dispatch(loginSuccess(res.data));
        console.log(loginSuccess(res.data));
        console.log(res);
        console.log(user);
    }catch(err) {
        dispatch(loginFailure());
    }
}

export const logout = async ( dispatch , user ) => {
    try {
        const res = await userRequest.post(`/auth/logout/${user._id}`)
        console.log(res)
        dispatch(userLogout(res.data));
    }
    catch(err) {
        console.log(err);
    }
    // dispatch(userLogoutStart());
    // try {
    //     const res = await userRequest.post(`/auth/logout/${user._id}`)
    //     console.log(res.data);
    //     dispatch(userLogoutSuccess(res.data))
    //     console.log(userLogoutSuccess(res))
    // }
    // catch(err) {
    //     dispatch(userLogoutFailure());
    //     console.log(err);
    // }
}

export const addProducts = async (dispatch,product) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/product/post`,product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };

export const getUserCartCall = async (id)=> {
    try {
        const res = await userRequest.get(`/cart/find/${id}`);
        return res;
    }catch(err) {
        console.log(err);
    }
}