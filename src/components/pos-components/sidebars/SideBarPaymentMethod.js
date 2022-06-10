import { SideBarUserDetails } from './SideBarUserDetails'
import { useRecoilState } from 'recoil'
import {
  orderDetailsState,
  sidebarSwitcherState,
} from '../../../lib/recoil-atoms'
import { useEffect, useState } from 'react'

const SideBarPaymentMethod = () => {
  const [sidebarSwitcher, setSideBarSwitcher] =
    useRecoilState(sidebarSwitcherState)
  const [orderDetails, setOrderDetails] = useRecoilState(orderDetailsState)
  const [discountState, setDiscountState] = useState(false)
  const [couponState, setCouponState] = useState(false)
  const [values, setValues] = useState({
    discount: 0,
    couponcode: '',
  })
  var discountAmount = 0
  var payableAmount = orderDetails.payableAmount
  function handleChange(evt) {
    const value = evt.target.value
    setValues({
      ...values,
      [evt.target.name]: value,
    })
  }
  function update() {
    discountAmount = (values.discount / 100) * orderDetails.subTotal
    payableAmount = payableAmount - discountAmount
  }
  function handleClick() {
    setOrderDetails((prevDetails) => {
      return {
        ...prevDetails,
        discount: discountAmount,
        payableAmount: payableAmount,
      }
    })
    setSideBarSwitcher('cashpayment')
  }
  useEffect(update, [values])
  return (
    <div className="sidebar gap-3 text-sm">
      <SideBarUserDetails />
      <hr />
      <div className="mt-8 grid w-full grid-cols-3 border-2 border-dashed border-primary py-2 px-1 text-xs">
        <span>Add</span>
        <span></span>
        {discountState ? (
          <span></span>
        ) : (
          <span
            className="cursor-pointer justify-self-center text-primary"
            onClick={() => setDiscountState(true)}
          >
            Discount
          </span>
        )}
        {/* {couponState ? (
          <span></span>
        ) : (
          <span
            className="cursor-pointer justify-self-center text-primary"
            onClick={() => setCouponState(true)}
          >
            Coupon
          </span>
        )}{' '} */}
      </div>
      <div className="grid w-full grid-cols-2 font-normal">
        <span>Sub Total</span>
        <span className="justify-self-end">Rs. {orderDetails.subTotal}/-</span>
      </div>
      {discountState ? (
        <div className="grid w-full grid-cols-3 items-center font-normal">
          <span>Discount</span>
          <input
            type="text"
            className="py-1 px-2 text-xs text-secondary"
            name="discount"
            value={values.discount}
            pattern="[0-9]*"
            onChange={handleChange}
          ></input>
          <span className="justify-self-end">
            Rs. {(values.discount / 100) * orderDetails.subTotal}/-
          </span>
        </div>
      ) : (
        <></>
      )}
      {couponState ? (
        <div className="grid w-full grid-cols-3 font-normal">
          <span>Coupon</span>
          <input
            type="text"
            className="py-1 px-2 text-xs text-secondary"
            name="couponcode"
            value={values.couponcode}
            pattern="[0-9]*"
            onChange={handleChange}
          ></input>
          <span className="justify-self-end">Rs. 200/-</span>
        </div>
      ) : (
        <></>
      )}
      <hr />
      <div className="grid w-full grid-cols-2 text-base font-medium">
        <span>Payable Amount</span>
        <span className="justify-self-end">
          Rs.{' '}
          {payableAmount -
            (values.discount / 100) * orderDetails.subTotal}
          /-
        </span>
      </div>
      <hr />
      <button
        className="primary-button mt-10"
        name="cash"
        onClick={handleClick}
      >
        Cash
      </button>
      <button
        className="primary-button"
        name="card"
        onClick={() => alert('This feature is in developing phase')}
      >
        Card
      </button>
    </div>
  )
}

export default SideBarPaymentMethod
