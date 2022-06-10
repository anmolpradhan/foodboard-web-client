import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { useRecoilState } from 'recoil'

import { itemDetailsState, orderDetailsState, sidebarSwitcherState } from '../../../lib/recoil-atoms'
import { useEffect, useState } from 'react'

const AddToCart = (props) => {
  const [itemDetails, setItemDetails] = useRecoilState(itemDetailsState)
  const [orderDetails, setOrderDetails] = useRecoilState(orderDetailsState)
  const [sidebarSwitcher, setSideBarSwitcher] =
    useRecoilState(sidebarSwitcherState)
  const [quantity, setQuantity] = useState(1)
  const totalPrice = itemDetails.price * quantity
  function handleClick() {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      itemDetails: [...prevDetails.itemDetails, itemDetails],
    }))
    setSideBarSwitcher("transaction")
    setItemDetails({})
  }

  useEffect(() => {
    setItemDetails((prevDetails) => {
      return {
        ...prevDetails,
        quantity: quantity,
        totalPrice: totalPrice,
      }
    })
  }, [quantity])

  function handleChange(event) {
    setQuantity(event.target.value)
  }
  return (
    <div className="sidebar">
      <div className="flex justify-center">
        <img
          src="/image 4.png"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4 text-base font-light">
        <div className="grid grid-cols-2 font-bold">
          {props.itemDetails.name}
          <span className="justify-self-end font-medium">
            {props.itemDetails.price}/-
          </span>
        </div>
        <div className="flex flex-row items-center gap-8 text-sm">
          Variants{' '}
          <div className="relative w-full border-none">
            <select className="inline-block w-full appearance-none rounded border-none bg-white py-3 pl-3 pr-8 text-sm leading-tight text-secondary outline-none">
              <option className="pt-6">GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <i className="fas fa-chevron-down text-secondary"></i>
            </div>
          </div>
        </div>
        <hr />
        <span className="text-sm">Add Ons</span>
        <div className="grid grid-cols-2 gap-y-3 text-sm font-normal">
          <label className="inline-flex items-center">
            <input type="checkbox" className="checkbox" /> Cheese
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="checkbox" /> extra Jhol
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="checkbox" /> Cheese
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="checkbox" /> extra Jhol
          </label>
        </div>
        <div className="mt-3 inline-flex self-center">
          <button
            className="primary-button p-auto w-auto"
            onClick={() => {
              setQuantity(() => {
                if (quantity > 1) return quantity - 1
                else return quantity
              })
            }}
          >
            <RemoveIcon />
          </button>
          <input
            type="number"
            className="p-auto form-input mx-1 w-20 rounded-md bg-secondary p-1 text-base text-white outline-none focus:outline-offset-0 focus:ring-0"
            value={quantity}
            name="quantity"
            onChange={handleChange}
          />
          <button
            className="primary-button p-auto w-auto"
            onClick={() => setQuantity(quantity + 1)}
          >
            <AddIcon />
          </button>
        </div>
        <button
          className="primary-button mt-3 text-base font-normal"
          onClick={handleClick}
        >
          Add To Cart
        </button>
        <span className="w-full text-base font-light">
          Total: <span className="text-right font-medium">{totalPrice}/-</span>
        </span>
      </div>
    </div>
  )
}

export default AddToCart
