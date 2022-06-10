import React from 'react'
const OrderBox = (props) => {
  return (
    <div
      className="delay-5 flex h-48 w-full cursor-pointer flex-col  rounded-xl bg-white px-2 py-1 font-sans text-xs drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:drop-shadow-2xl active:translate-y-0 active:filter-none"
      onClick={props.onPress}
    >
      <span className="font-light text-sm">Token : #{props.orderDetail.token}</span>
      <span className="text-sm">Table 21</span>
      <span className="mb-1 font-light">{props.orderDetail.customername}</span>
      <hr />
      <span className="noscroll mt-1 flex h-full w-full flex-col gap-1 overflow-y-auto">
        {props.orderDetail.itemDetails.map((itemDetail) => (
          <span className="flex">
            <span className="grid-row-2 grid w-3/4">
              {itemDetail.name}
              <span className="font-light">+achar</span>
            </span>
            <span className="w-1/4 self-center text-right">
              0/{itemDetail.quantity}
            </span>
          </span>
        ))}
      </span>
    </div>
  )
}

export default OrderBox
