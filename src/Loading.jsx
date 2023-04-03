import React from 'react'
import { Oval } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='loading'>
      <div className='oval'>
        <Oval
          height={80}
          width={80}
          color=' hsl(209, 61%, 16%)'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor='#c59d5f'
          strokeWidth={2}
          strokeWidthSecondary={2}
          className='oval'
        />
      </div>

      <p className='loading-text'>Loading products, please wait...</p>
    </div>
  )
}

export default Loading
