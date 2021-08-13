import axios from 'axios';
// eslint-disable-next-line
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

// GET CURRENT USERS PROFILE
export const getCurrentProfile = () => async dispatch => {
  try {
    // know what profile to load from the token we sent so you do not need id
    const res = await axios.get('api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
