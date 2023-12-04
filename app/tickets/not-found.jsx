import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
      <div>
          <p>
              No tickets available right now
          </p>
          <Link href="/tickets">Go to tickets page</Link>
      </div>
      
  )
}

export default NotFound