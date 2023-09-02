import React from 'react'

const DetailPage = ({title,
    category,image,description
    }:ListElement) => {
  return (
    <section className="flex flex-row gap-8 py-8">
    <div className="flex-1 flex flex-col gap-5 px-20 py-16">
    <p className="text-logocolor text-sm font-normal capitalize truncate">
    --{category}
    </p>    
    <img src={image} 
    className=" h-96 w-full object-contain 
    object-center"/>
    </div>
    <div className="flex-1 flex flex-col px-20 py-16
    justify-start items-start gap-6">
    <h1 className="text-logocolor text-3xl
    font-extrabold">
    {title}</h1>
    <p className="text-description capitalize">
    {description}
    </p>
    <button className="hero-button" type="button">Add to Cart</button>
    </div>
    </section>
  )
}

export default DetailPage