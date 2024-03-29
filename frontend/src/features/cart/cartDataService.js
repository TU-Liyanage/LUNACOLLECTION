import axios from 'axios'

const checkCart = async (id, qty) => {
	const { data } = await axios.get(`/api/products/${id}`)
	return {
		product: data._id,
		name: data.name,
		image: data.image,
		price: data.price,
		countInStock: data.countInStock,
		qty: parseInt(qty),
	}
}

const cartDataService = {
	checkCart,
}
export default cartDataService
