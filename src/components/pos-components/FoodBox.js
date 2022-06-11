import React from 'react'
function FoodBox(props) {
  return (
    <div
      className="box-button"
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
