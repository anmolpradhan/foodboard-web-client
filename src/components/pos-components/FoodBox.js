import React from 'react'
function FoodBox(props) {
  return (
    <div
      className="delay-5 flex h-fit w-full cursor-pointer flex-col place-items-center gap-2 rounded-xl bg-white py-3 font-sans drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:drop-shadow-2xl active:translate-y-0 active:filter-none"
      onClick={props.onPress}
    >
      <img
        src="/image 4.png"
        className="rounded-full"
        style={{height:"100px",width:"100px"}}
        alt={props.foodDetail.name}
      />
      <span>{props.foodDetail.name}</span>
      <span className="text-sm font-light">Rs. {props.foodDetail.price}</span>
    </div>
  )
}

export default FoodBox
