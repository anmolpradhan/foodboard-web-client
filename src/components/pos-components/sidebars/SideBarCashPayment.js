import React from 'react'
import { useEffect, useState } from 'react'
import { SideBarUserDetails } from './SideBarUserDetails'
import {
  orderDetailsState,
  sidebarSwitcherState,
} from '../../../lib/recoil-atoms'
import { useRecoilState } from 'recoil'

const SideBarCashPayment = () => {
  const [sidebarSwitcher, setSideBarSwitcher] =
    useRecoilState(sidebarSwitcherState)
  const [orderDetails, setOrderDetails] = useRecoilState(orderDetailsState)
  const [cash, setCash] = useState(0)
  const contentType = 'application/json'
  function handleChange(event) {
    const casha = event.target.validity.valid ? event.target.value : cash
    setCash(casha)
  }

  async function handleClick() {
    try {
      await fetch('/api/orderdetail', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(orderDetails),
      })
      console.log(JSON.stringify(orderDetails));
      alert('Success')
      setSideBarSwitcher('default')
      setOrderDetails({})
    } catch (error) {
      console.log('Failed to add order ' + error)
    }
  }
  useEffect(
    () =>
      setOrderDetails((prevDetails) => {
        return { ...prevDetails, payment: true }
      }),
    [sidebarSwitcher]
  )
  return (
    <div className="sidebar gap-3 text-sm">
      <SideBarUserDetails />
      <hr />
      <span></span>
      <div className="grid w-full grid-cols-2 text-base font-medium">
        <span>Payable Amount</span>
        <span className="justify-self-end">
          Rs. {orderDetails.payableAmount}/-
        </span>
      </div>
      <hr />
      <span></span>
      Cash Received
      <input
        type="tel"
        value={cash}
        pattern="[0-9]*"
        onChange={handleChange}
        className="bg-transparent text-right text-xl text-white focus:border-primary focus:ring-primary"
      ></input>
      <span className="grid grid-cols-2">
        Return <span>Rs. {cash - orderDetails.payableAmount}</span>
      </span>
      <button
        className="primary-button mt-10"
        name="paying"
        onClick={handleClick}
      >
        Pay And Print Invoice
      </button>
    </div>
  )
}

export default SideBarCashPayment
