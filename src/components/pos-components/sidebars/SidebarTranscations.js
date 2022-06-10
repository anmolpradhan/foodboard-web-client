import { SideBarUserDetails } from './SideBarUserDetails'
import React, { useState, useEffect } from 'react'
import FoodListItem from '../FoodListItemEditable'

import { useRecoilState } from 'recoil'
import {
  orderDetailsState,
  sidebarSwitcherState,
} from '../../../lib/recoil-atoms'
import _ from 'lodash'

function SidebarTransactions(props) {
  const [itemDetails, setItemDetails] = useState(props.orderDetails.itemDetails)
  const contentType = 'application/json'
  let subtotal
  let copy = [...itemDetails]

  const [orderDetails, setOrderDetails] = useRecoilState(orderDetailsState)
  const [sidebarSwitcher, setSideBarSwitcher] =
    useRecoilState(sidebarSwitcherState)

  function deleteItem(index) {
    copy.splice(index, 1)
    setItemDetails(copy)
  }
  function handleCallback(quantity, index, totalPrice) {
    copy[index] = { ...copy[index], quantity: quantity, totalPrice: totalPrice }
    setItemDetails(copy)
  }
  useEffect(() => {
    setOrderDetails((prevDetails) => {
      return {
        ...prevDetails,
        itemDetails: itemDetails,
        subTotal: subtotal,
        payment: false,
        discount: 0,
        payableAmount: subtotal,
      }
    })
  }, [itemDetails])
  async function process() {
    try {
      await fetch('/api/orderdetail', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(orderDetails),
      })
      alert('Success')
      setSideBarSwitcher('payment')
    } catch (error) {
      console.log('Failed to add order ' + error)
    }
  }
  return (
    <div className="sidebar">
      <SideBarUserDetails />
      <div className="grid h-fit w-full grid-cols-3 items-center py-3 text-xs font-light text-white text-opacity-70">
        <span className="grid-row-2 grid gap-1">
          Order Number
          <span className="text-sm font-normal text-white">#0003</span>
        </span>
        <span className="grid-row-2 grid gap-1">
          Customer{' '}
          <span className="text-sm font-normal text-white">
            {props.orderDetails.customername}
          </span>
        </span>
        <span className="grid-row-2 grid gap-1">
          {props.orderDetails.ordertype === 'dinein' ? (
            <>Table Number</>
          ) : (
            <>Takeaway</>
          )}
          <span className="text-sm font-normal text-white">A10</span>
        </span>
      </div>
      <hr />
      <div className="mt-4 flex h-full flex-col gap-2">
        {itemDetails.map((itemDetail, index) => {
          return (
            <FoodListItem
              itemDetail={itemDetail}
              id={index}
              key={index}
              onDelete={() => deleteItem(index)}
              parentCallback={handleCallback}
            />
          )
        })}
      </div>
      <div className="flex h-1/4 w-full flex-col gap-1 self-end text-sm font-light">
        <div className="mb-3 grid w-full grid-cols-2 items-center border-4 border-dashed border-primary py-2 px-1">
          <span>Add Note</span>
          <span className="justify-self-end">
            <input
              type="text"
              className="primary-input h-8 text-sm text-secondary"
            />
          </span>
        </div>
        <div className="grid w-full grid-cols-2 font-medium">
          <span>Sub Total</span>
          <span className="justify-self-end">
            Rs. {(subtotal = _.sumBy(itemDetails, 'totalPrice'))}/-
          </span>
        </div>
        <hr />

        <button className="primary-button mt-5" onClick={process}>
          Process Order
        </button>
      </div>
    </div>
  )
}

export default SidebarTransactions
