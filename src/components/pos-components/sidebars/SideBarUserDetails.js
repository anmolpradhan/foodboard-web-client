import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export function SideBarUserDetails({}) {
  return <div className="grid h-fit w-full grid-cols-3 items-center text-xs text-white  text-opacity-70">
        <span className="col-span-2">
          {' '}
          <AccessTimeIcon /> Fri Apr 1,2022 | 2:01:50
        </span>
        <span className="justify-self-end">Anmol</span>
      </div>;
}
  