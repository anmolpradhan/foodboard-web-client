import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import { useEffect, useState } from 'react'

const FoodListItem = (props) => {
  const [quantity, setQuantity] = useState(props.itemDetail.quantity)
  const totalPrice=quantity*props.itemDetail.price
  function handleChange(event) {
    setQuantity(event.target.value)
  }
  function callback() {
    props.parentCallback(quantity,props.id,totalPrice)
  }
  useEffect(callback,[quantity])
  return (
    <div className="grid w-full grid-flow-col items-center border-b-2 border-slate-700 pb-4 text-xs">
      <div className="flex w-32 flex-col">
        <span className="text-sm font-medium">{props.itemDetail.name}</span>
        <span className="text-sm font-light">{props.itemDetail.price}</span>
        <span className="font-light">+jhol,+achar</span>
      </div>
      <div className="flex h-1/2 flex-row justify-self-center pr-4">
        <button
          className="primary-button w-fit p-0"
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
          className="p-auto form-input mx-1 w-10 rounded-md p-1 text-xs text-secondary outline-none drop-shadow-xl"
          value={quantity}
          onChange={handleChange}
        />
        <button
          className="primary-button w-fit p-0"
          onClick={() => setQuantity(quantity + 1)}
        >
          <AddIcon />
        </button>
      </div>
      <span className="w-fill pr-4 text-sm">
        Rs. {props.itemDetail.price * quantity}
      </span>
      <button
        className="bg-transparent text-primary hover:text-opacity-70 active:text-opacity-100"
        onClick={props.onDelete}
      >
        <DeleteOutlineIcon />
      </button>
    </div>
  )
}

export default FoodListItem
