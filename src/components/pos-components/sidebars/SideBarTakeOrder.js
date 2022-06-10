import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { SideBarUserDetails } from './SideBarUserDetails'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import {
  orderDetailsState,
  sidebarSwitcherState,
} from '../../../lib/recoil-atoms'
const people = [
  { id: 1, name: 'Walk Away Customer' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

const SideBarTakeOrder = () => {
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')
  const [orderDetails, setOrderDetails] = useRecoilState(orderDetailsState)
  const [sidebarSwitcher, setSideBarSwitcher] =
    useRecoilState(sidebarSwitcherState)
  function handleChange(event) {
    setOrderDetails((prevDetails) => {
      return {
        ...prevDetails,
        ordertype: event.target.name,
        customername: selected.name,
        itemDetails: [],
      }
    })
    setSideBarSwitcher('transaction')
  }

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="sidebar">
      <SideBarUserDetails />
      <div className="flex h-full w-full flex-col place-content-center gap-7">
        <span className="text-center text-sm font-light">
          Hey Anmol <br />
          Ready To Take New Order{' '}
        </span>

        <div className="flex w-full flex-row items-center gap-5 text-sm font-light">
          Customer:
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative z-50 mt-1 w-full">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(person) => person.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-primary text-white' : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-teal-600'
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <button className="primary-button" name="dinein" onClick={handleChange}>
          Dine In
        </button>
        <button
          className="primary-button"
          name="takeaway"
          onClick={handleChange}
        >
          Takeaway
        </button>
      </div>
    </div>
  )
}

export default SideBarTakeOrder
