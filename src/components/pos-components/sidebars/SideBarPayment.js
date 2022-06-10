import { SideBarUserDetails } from './SideBarUserDetails'
import { useRecoilState } from 'recoil'
import {
  sidebarSwitcherState,
  orderDetailsState,
} from '../../../lib/recoil-atoms'
const SideBarPayment = () => {
  const [sidebarSwitcher, setSideBarSwitcher] =
    useRecoilState(sidebarSwitcherState)
  const [orderDetails, setOrderDetails] = useRecoilState(orderDetailsState)

  return (
    <div className="sidebar">
      <SideBarUserDetails />
      <div className="flex h-full w-full flex-col place-content-center gap-7">
        <h1 className="text-center font-light">Payment</h1>
        <button
          className="primary-button"
          onClick={() => {
            setSideBarSwitcher('paymentmethod')
          }}
        >
          Pay Now
        </button>
        <button
          className="primary-button"
          onClick={() => {
            setOrderDetails({})
            setSideBarSwitcher('default')
          }}
        >
          Pay Later and Print Invoice
        </button>
      </div>
    </div>
  )
}

export default SideBarPayment
