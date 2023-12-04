import { notFound } from 'next/navigation';
import React from 'react'
import { resolve } from 'styled-jsx/css';

export async function getStaticParams() {
    const res = await fetch("http://localhost:4000/tickets")

    const tickets = await res.json();

    return tickets.map((each) => {
        return { id: each.id }
    })
    
}

async function getTickets(id) {

    await new Promise(resolve => setTimeout(resolve , 3000))
    const res = await fetch(`http://localhost:4000/tickets/` + id, {
        next: {
            revalidate : 60
        }
    })

    if (!res.ok) {
        notFound()
    }

    return res.json();
}
  
export default async function TicketDetails({ params }) {
    // const id = params.id
    const ticket = await getTickets(params.id)
  
    return (
      <main>
        <nav>
          <h2>Ticket Details</h2>
        </nav>
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </main>
    )
}