import React from 'react'
import _ from 'lodash'
import { useRecoilState } from 'recoil'
import { orderDetailsState, itemDetailsState } from '../../lib/recoil-atoms'


import PosHeader from '../../components/pos-components/PosHeader'
import OrderContent from '../../components/pos-components/OrderContent'
import SideBarTemplate from '../../components/pos-components/sidebars/SideBarTemplate'
import SideBarOrderDetails from '../../components/pos-components/sidebars/SideBarOrderDetails'
import data from '../../data.json'

function Order(props){
  const [orderDetails] = useRecoilState(orderDetailsState) 
  var allOrderDetails = data.orders
  return (
    <div>
      <div className="flex h-screen flex-row overflow-hidden">
        <div className="flex w-3/4 flex-col">
          <PosHeader />
          <input
            type="text"
            className="primary-input ml-2 mt-2"
            placeholder="Search...."
          />
          <OrderContent
            allOrderDetails={allOrderDetails}
          />
        </div>
        {_.isEmpty(orderDetails) ? (
          <SideBarTemplate />
        ) : (
          <SideBarOrderDetails orderDetails={orderDetails} />
        )}
      </div>
    </div>
  )
}

export default Order
