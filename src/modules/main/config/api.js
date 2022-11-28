import axios from "axios"

const fetchProducts = async () => {
    try {
        const response = await axios.get('https://api.npoint.io/b5875c18864c86a080d3')
        return response.data
    } catch (Error) {
        console.log(Error)
    }
}

const fetchProduct = async (productId) => {
    try {
        const response = await axios.get(`https://api.npoint.io/b5875c18864c86a080d3/${productId}`)
        return response.data
    } catch (Error) {
        console.log(Error)
    }
}

const api = { fetchProducts, fetchProduct }

export default api