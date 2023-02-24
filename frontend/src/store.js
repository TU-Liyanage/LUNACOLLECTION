import { configureStore } from '@reduxjs/toolkit'

import productListDataReducer from './features/products/productListDataSlice'
import productDataReducer from './features/products/productDataSlice'
import cartDataReducer from './features/cart/cartDataSlice'
import orderDataReducer from './features/order/orderDataSlice'
import logInDataReducer from './features/users/logInDataSlice'
import profileDataReducer from './features/users/profileDataSlice'
import userListDataReducer from './features/users/userListDataSlice'

const store = configureStore({
	reducer: {
		productList: productListDataReducer,
		productDetails: productDataReducer,
		cart: cartDataReducer,
		logInDetails: logInDataReducer,
		profileDetails: profileDataReducer,
		orders: orderDataReducer,
		allUsers: userListDataReducer,
	},
})

export default store
