import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
      <div>
          <p>
              There is no page like this
          </p>
          <p>404 ERROR</p>
          <div className='text-center'>
            <Link href="/" >Back To Dashboard</Link>
          </div>
      </div>
  )
}

export default NotFound