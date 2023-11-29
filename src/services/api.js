import axios from 'axios'

export const fetchAdverts = async () => {
  try {
    const response = await axios.get(
      'https://656701a564fcff8d730f8bbc.mockapi.io/adverts/advert/?page=1&limit=12'
    )
    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}
