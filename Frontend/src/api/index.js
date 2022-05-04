
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const createUser = (userData) => api.post(`/user`, userData)
export const getAllUsers = () => api.get(`/users`)
export const getUserByAuth0Id = (auth0Id) => api.get(`/user/byAuth0Id/` + auth0Id)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)

export const createPosts = (payload) => api.post(`/post`, payload)
export const getAllPosts = () => api.get(`/posts`)

const apis = {
    // user related
    createUser,
    getAllUsers,
    getUserByAuth0Id,

    // posts related
    createPosts,
    getAllPosts,
}

export default apis
