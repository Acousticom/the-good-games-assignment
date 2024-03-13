import React from 'react'

const ProductsCard = ({data}) => {
  const {name,image_url,description,ingredients}=data
  return (
    <div className=' border-2 border-gray-300 w-[18rem] flex flex-col items-center py-6 px-3 rounded-lg shadow-xl'>
      <img src={image_url} alt="" className='h-[10rem] mb-3'/>
      <h2 className='text-xl font-semibold'>{name}</h2>
      <div>
      <p className='text-xs'>{description}</p>
      <p><strong>Ingredients:</strong> {ingredients.malt?.map((item)=><p>{item.name}-{item.amount.value} {item.amount.unit}</p>)}</p>
      </div>
    </div>
  )
}

export default ProductsCard