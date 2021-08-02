import * as types from './actionsType'
import axios from 'axios'
const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})

export const loadUsers = () =>{
    return async function (dispatch) {
        const res = await axios.get(`S{process.env.REACT_APP_API}`)
        console.log(res);
        await dispatch(getUsers(res.data))
        .catch((error) => console.log(error))
    }
}

