import axios from 'axios'

export const axiosInstance = () => {
  const axiosInstance = axios.create({
   // baseURL: import.meta.env.VITE_API_URL,
    params: {
      headers: {
        Accept: 'application/json',
      },
    },
     /* timeout: 5000, */
  })

  return axiosInstance
}

export const getCsrfToken = async () => {
  try {
    const { headers } = await axiosInstance().get('/sanctum/csrf-cookie')
    return headers
  } catch (err) {
    return err
  }
}

export const getWithAxios = async (url) => {
  let data
  try {
    data = axiosInstance()
      .get(url)
      .then((response) => {
        return response.data
      })
  } catch (err) {
    return err
  }

  return data
}

export const postWithAxios = async (url, dataToSend) => {
 
  try {
    const { data } = await axiosInstance().post(url, dataToSend)
    return data
  } catch (error) {
    return error.response.data
  }
}

export const putWithAxios = async (url, dataToSend) => {
 
  try {
    const { data } = await axiosInstance().put(url, dataToSend)
    return data
  } catch (error) {
    return error.response.data
  }
}

export const getUserFromAPI = async () => {
  const res = await getWithAxios('/user')
  return res
}



