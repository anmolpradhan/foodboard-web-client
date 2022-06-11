import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import _ from 'lodash'
import { useRecoilState } from 'recoil'
import {
  itemDetailsState,
  orderDetailsState,
  sidebarSwitcherState,
} from '../../lib/recoil-atoms'
import FoodBox from './FoodBox'
import data from '../../data.json'

function PosContent(props) {
  const categories = data.categories
  const [itemDetails, setItemDetails] = useRecoilState(itemDetailsState)
  const [sidebarSwitcher, setSideBarSwitcher] =
    useRecoilState(sidebarSwitcherState)
  const [orderDetails] = useRecoilState(orderDetailsState)
  const foodDetails = data.foods
  function addItems(foodDetail) {
    if (sidebarSwitcher === 'transaction') {
      if (!_.isEmpty(orderDetails)) {
        setItemDetails({ name: foodDetail.name, price: foodDetail.price })
        setSideBarSwitcher('addtocart')
      }
    }
  }
  return (
    <div className="mt-2 flex h-full flex-row gap-5">
      <div className="flex w-32 flex-col gap-3 ">
        {categories.map((category) => (
          <button
            key={category.key}
            className="group flex flex-row items-center gap-2 rounded-3xl px-3 py-2 text-sm active:bg-primary active:text-white"
          >
            <LocalDiningIcon className="rounded-full p-1 group-active:bg-white group-active:text-secondary" />
            {category.name}
          </button>
        ))}
      </div>
      <div className="food-list noscroll grid h-5/6 w-full grid-cols-5 gap-4 overflow-y-auto">
        {foodDetails.map((foodDetail) => {
          return (
            <FoodBox
              foodDetail={foodDetail}
              onPress={() => addItems(foodDetail)}
              key={foodDetail.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PosContent
