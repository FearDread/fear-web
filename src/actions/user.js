import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    CLEAR_ERRORS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
  
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_REQUEST,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    UPDATE_USER_REQUEST,
    USER_DETAILS_FAIL,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_FAIL,
    DELETE_USER_SUCCESS,
  } from "../variables/constants";

  export function login(email, password) {

    return async function (dispatch) {
      try {
        dispatch({ type: LOGIN_REQUEST });
  
        const config = { headers: { "Content-Type": "application/json" } };
  
        const { data } = await axios.post(
          `http://fear.master.com:4000/fear/api/login`,
          { email, password },
          config
        );
  
        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
      } catch (error) {
  
        dispatch({ type: LOGIN_FAIL, payload: error.message });
      }
    };
  }

// resgister user
export function register(signupData) {

    return async function (dispatch) {
      try {
        dispatch({ type: REGISTER_USER_REQUEST });
        const config = {
          headers: { "Content-Type": "multipart/form-data" },
        };
  
        const { data } = await axios.post(
          `http://fear.master.com:4000/fear/api/register`,
          signupData,
          config
        );
  
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });

      } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.message })
      }
    }
  }

  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };