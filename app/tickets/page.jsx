
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
const tickets = () => {

  
 
  return (
    <div>tickets
     
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
        
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>


      {/* <svg width="400" height="35" xmlns="http://www.w3.org/2000/svg">
  <path
    id="pathItem"
    d="M5 20 Q 80 5 190 25"
    stroke="black"
    fill="transparent"
    stroke-width="7"
    stroke-linecap="round"
  />
</svg> */}
      
    </div>
  )
}

export default tickets