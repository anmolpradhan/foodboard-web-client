import React from "react";
import FoodBox from "../FoodBox";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function FoodOptions() {
  var foodDetail = {
    name: "Chicken Reshami Leg Kabab",
    price: 400,
  };

  function select() {
    console.log("Selected");
  }
  return (
    <div className="w-full flex flex-col p-5 bg-white">
      <h1 className="text-xl">MoMo Options</h1>
      <div className="flex flex-row w-full">
        <div className="grid grid-cols-7 gap-3">
          <div className="flex flex-col col-span-5 gap-1">
            <h2 className="text-lg font-light">Variants</h2>
            <div className="grid grid-cols-5 gap-2">
              <FoodBox foodDetail={foodDetail} onPress={() => select()} />
              <FoodBox foodDetail={foodDetail} onPress={() => select()} />
              <FoodBox foodDetail={foodDetail} onPress={() => select()} />
              <FoodBox foodDetail={foodDetail} onPress={() => select()} />
              <FoodBox foodDetail={foodDetail} onPress={() => select()} />
            </div>
          </div>
          <div className="flex flex-col col-span-2 gap-1">
            <h2 className="text-lg font-light">Add Ons</h2>
            <div className="grid grid-rows-3 grid-flow-col gap-2">
              <button className="box-button py-2" value="Hello">
                Dine In
                <br />
                <span className="text-sm font-light">+Rs.20</span>
              </button>
              <button className="box-button py-2" value="Hello">
                Dine In
                <br />
                <span className="text-sm font-light">+Rs.20</span>
              </button>
              <button className="box-button py-2" value="Hello">
                Dine In
                <br />
                <span className="text-sm font-light">+Rs.20</span>
              </button>
              <button className="box-button py-2" value="Hello">
                Dine In
                <br />
                <span className="text-sm font-light">+Rs.20</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4 items-center w-full">
        <div className="basis-2/3">
          Chicken MoMo &nbsp;&nbsp;&nbsp;&nbsp; Rs.200,
          <span className="text-sm">
            &nbsp;+ extra jhol &nbsp;&nbsp;&nbsp; Rs.200,
          </span>
          <span className="text-sm">
            &nbsp;+ extra jhol &nbsp;&nbsp;&nbsp; Rs.200,
          </span>
        </div>
        <div className="basis-1/3">
          <button className="primary-button p-auto px-2">
            <RemoveIcon />
          </button>
          <input
            type="number"
            className="p-auto form-input mx-1 text-base w-16 outline-none focus:outline-offset-0 focus:ring-0"
            name="quantity"
          />
          <button className="primary-button p-auto px-2">
            <AddIcon />
          </button>

          <span className="text-lg mx-3 font-medium"> Rs. 130000</span>
          <button className="primary-button mx-3 px-16 py-3">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodOptions;
