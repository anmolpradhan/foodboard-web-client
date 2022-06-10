import React from 'react'
import _ from 'lodash'

import { useRecoilState } from 'recoil'
import {
  orderDetailsState,
  itemDetailsState,
  sidebarSwitcherState,
} from '../../lib/recoil-atoms'


import PosHeader from '../../components/pos-components/PosHeader'
import SidebarTransaction from '../../components/pos-components/sidebars/SidebarTranscations'
import SideBarTakeOrder from '../../components/pos-components/sidebars/SideBarTakeOrder'
import AddToCart from '../../components/pos-components/sidebars/AddToCart'
import PosContent from '../../components/pos-components/PosContent'
import SideBarPayment from '../../components/pos-components/sidebars/SideBarPayment'
import SideBarCashPayment from '../../components/pos-components/sidebars/SideBarCashPayment'
import SideBarPaymentMethod from '../../components/pos-components/sidebars/SideBarPaymentMethod'

function POS(props){
  const [orderDetails] = useRecoilState(orderDetailsState)
  const [itemDetails] = useRecoilState(itemDetailsState)
  const [sidebarSwitcher] = useRecoilState(sidebarSwitcherState)
  function renderSidebars(val) {
    switch (val) {
      case 'default':
        return <SideBarTakeOrder />
      case 'transaction':
        return <SidebarTransaction orderDetails={orderDetails} />
      case 'addtocart':
        return <AddToCart itemDetails={itemDetails} />
      case 'payment':
        return <SideBarPayment />
      case 'paymentmethod':
        return <SideBarPaymentMethod />
      case 'cashpayment':
        return <SideBarCashPayment />
    }
  }
  return (
    <div className="">
      <div className="flex h-screen flex-row overflow-hidden">
        <div className="flex w-3/4 flex-col">
          <PosHeader />
          <input
            type="text"
            className="primary-input ml-2 mt-2"
            placeholder="Search...."
          />
          <PosContent />
        </div>
        {renderSidebars(sidebarSwitcher)}
      </div>
    </div>
  )
}
export default POS
