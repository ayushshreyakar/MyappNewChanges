import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import './Cart.css'

const Cart = () => {
  const { cartItems, restaurants, removeFromCart } = useContext(StoreContext)

  // Group cart items by restaurant
  const getCartByRestaurant = () => {
    const grouped = {}

    restaurants.forEach((rest) => {
      const itemsInRest = rest.food_list.filter(
        (food) => cartItems[`${rest.id}_${food._id}`] > 0
      )

      if (itemsInRest.length > 0) {
        grouped[rest.id] = {
          restaurant: rest,
          items: itemsInRest,
        }
      }
    })

    return grouped
  }

  const cartByRestaurant = getCartByRestaurant()
  const restaurantIds = Object.keys(cartByRestaurant)
  const multipleRestaurants = restaurantIds.length > 1

  // Calculate subtotal per restaurant
  const calculateSubtotal = (items, restaurantId) => {
    return items.reduce(
      (acc, item) =>
        acc + item.price * (cartItems[`${restaurantId}_${item._id}`] || 0),
      0
    )
  }

  // ✅ Calculate final total across all restaurants
  const finalTotals = restaurantIds.reduce(
    (acc, restId) => {
      const { items, restaurant } = cartByRestaurant[restId]
      const subtotal = calculateSubtotal(items, restaurant.id)
      const deliveryFee = 30
      acc.subtotal += subtotal
      acc.deliveryFee += deliveryFee
      acc.total += subtotal + deliveryFee
      return acc
    },
    { subtotal: 0, deliveryFee: 0, total: 0 }
  )

  return (
    <div className="cart-container">
      {restaurantIds.map((restId) => {
        const { restaurant, items } = cartByRestaurant[restId]
        const subtotal = calculateSubtotal(items, restaurant.id)
        const deliveryFee = 30
        const total = subtotal + deliveryFee

        return (
          <div className="cart-card" key={restId}>
            <h2 className="cart-restaurant-name">{restaurant.name}</h2>

            {/* Items Table */}
            <div className="cart-items">
              <div className="cart-header">
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              <hr />

              {items.map((item) => (
                <div className="cart-row" key={item._id}>
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[`${restaurant.id}_${item._id}`]}</p>
                  <p>₹{item.price * cartItems[`${restaurant.id}_${item._id}`]}</p>
                  <p
                    className="remove-btn"
                    onClick={() => removeFromCart(restaurant.id, item._id)}
                  >
                    ×
                  </p>
                </div>
              ))}
            </div>

            {/* Cart Totals for this restaurant */}
            <div className="cart-totals">
              <h3>Cart Totals</h3>
              <div className="totals-line">
                <p>Subtotal</p>
                <p>₹{subtotal}</p>
              </div>
              <div className="totals-line">
                <p>Delivery Fee</p>
                <p>₹{deliveryFee}</p>
              </div>
              <div className="totals-line total-bold">
                <b>Total</b>
                <b>₹{total}</b>
              </div>
            </div>
          </div>
        )
      })}

      {/* Extra warning if multiple restaurants */}
      {multipleRestaurants && (
        <p className="multi-rest-warning">
          ⚠️ You are ordering from multiple restaurants. Delivery will be charged separately per restaurant.
        </p>
      )}

      {/* ✅ Final Total Card (Sticky at Bottom with Checkout Button) */}
      {restaurantIds.length > 0 && (
        <div className="final-total-card sticky-summary">
          <h2>Final Payment Summary</h2>
          <div className="totals-line">
            <p>Total Subtotal</p>
            <p>₹{finalTotals.subtotal}</p>
          </div>
          <div className="totals-line">
            <p>Total Delivery Fee</p>
            <p>₹{finalTotals.deliveryFee}</p>
          </div>
          <div className="totals-line total-bold">
            <b>Grand Total</b>
            <b>₹{finalTotals.total}</b>
          </div>

          <div className="checkout-container">
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
