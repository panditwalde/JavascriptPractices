import { useEffect, useReducer } from 'react'
import axios from 'axios'
import Product from './Product'
import Cart from './Cart'
import { cartReducer } from '../reducers/cartReducer'

function ECommMain() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  })

  const fetchData = async () => {
    let { data } = await axios.get("https://dummyjson.com/products")    
    dispatch({ type: 'ADD_PRODUCTS', payload: data.products })

  }


  useEffect(() => { fetchData() }, [])

  return (
    <div style={{ display: 'flex' }}>
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />

    </div>
  )
}

export default ECommMain
