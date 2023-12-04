import Link from 'next/link';
import React from 'react'

async function getTickets() {
    
    await new Promise(resolve => setTimeout(resolve , 3000))

    const res = await fetch("http://localhost:4000/tickets")

    return res.json();
}



const TicketList = async ({params}) => {
    const tickets = await getTickets()
    // const selectTickets = await getSelectTickets(params)
  return (
      <>
        {tickets.map((ticket) => {
            return (
                <Link href={`/tickets/${ticket.id}`} key={ticket.id}>
                <div className='card mx-36' >
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                </div>
                </Link>
            )
        })}
          {
              tickets.length === 0 && (
                  <p className='text-center'>No more tickets left ! </p>
                  
              )
          }
      </>
      
  )
}

export default TicketList