import React from 'react'

import { Link,useLocation } from 'react-router-dom';

function PosHeader(props) {
  const router = useLocation()
  return (
    <div className="g-gray-300 flex flex-row space-x-4 bg-white py-2 pl-20 font-sans text-sm">
      <Link to="/pos/table" className={router.pathname === '/pos/table' ? 'text-primary topbar-link' : 'topbar-link'}>
        Table
      </Link>
      <Link to="/pos" className={router.pathname === '/pos' ? 'text-primary topbar-link' : 'topbar-link'}>
        POS
      </Link>
      <Link to="/pos/orders" className={router.pathname === '/pos/orders' ? 'text-primary topbar-link' : 'topbar-link'}>
        Order Status
      </Link>
      <Link to="/pos/payment" className={router.pathname === '/pos/payment' ? 'text-primary topbar-link' : 'topbar-link'}>
        Payment
      </Link>
    </div>
  )
}

export default PosHeader
