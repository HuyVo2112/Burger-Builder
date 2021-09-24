import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (tokenId, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId: tokenId,
        userId: userId,
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}


export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiryDate");

    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const authLogout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiresIn)
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    

        //Sign up URL
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbiP7HxlMpgSWd1zw1S_CTepkCgOTJ_WU"

        if (!isSignup) {
            //Sign in URL
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbiP7HxlMpgSWd1zw1S_CTepkCgOTJ_WU";
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expiryDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem("userId", response.data.localId);
                localStorage.setItem("token", response.data.idToken);
                localStorage.setItem("expiryDate", expiryDate)
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(authLogout(response.data.expiresIn*1000));
            })
            .catch( error => {
                console.log(error.response.data.error.message);
                dispatch(authFail(error.response.data.error));
            })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path:  path,
    }
}

export const authSetState = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        if (token != null) {
            const expiryDate = new Date(localStorage.getItem("expiryDate"));

            const timeDiff = expiryDate.getTime() - new Date().getTime();
            if (timeDiff > 0) {
                const userId = localStorage.getItem("userId");
                dispatch(authSuccess(token, userId));
                dispatch(authLogout(timeDiff));
            }
            else {
                dispatch(logout());
            }
        }
        else {
            dispatch(logout());
        }
    }
}