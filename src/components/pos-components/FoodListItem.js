const FoodListItem = (props) => {
  return (
    <div className="grid w-full grid-cols-4 items-center border-b-2 border-slate-700 pb-4 text-xs">
      <div className="col-span-2 flex flex-col">
        <span className="text-sm font-medium">{props.itemDetail.name}</span>
        <span className="text-sm font-light">{props.itemDetail.price}</span>
        <span className="font-light">+jhol,+achar</span>
      </div>
      <div className="text-sm justify-self-end">
        {props.itemDetail.quantity}
      </div>
      <span className="text-sm justify-self-end">
        Rs. {props.itemDetail.quantity * props.itemDetail.price}
      </span>
    </div>
  );
}

export default FoodListItem;