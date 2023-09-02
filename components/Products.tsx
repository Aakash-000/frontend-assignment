import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation';


const Products = () => {
    const router = useRouter()

    const {isLoading,error,data} = useQuery(["products"],()=>
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res => {
    return res})
    )

    console.log(data)
    if(data == undefined){
        return;
    }

    return (
    <div className="w-full flex flex-col gap-3 pt-5">
        <h3 className="text-center text-3xl font-extrabold text-logocolor">Product Listing</h3>
        <div className="grid grid-cols-1 gap-8 px-8 py-5 lg:grid-cols-4 md:grid-cols-3">
        {data.slice(0,6).map((item:ListElement)=>{
        let array:string[] = []
        let ratenum = item?.rating.rate
        function rating(){
            for(let i = 0; i <= ratenum ; i++){
                array.push(`${ratenum}`)
            }
            return array
        }

        return(
        <div className="product-card" onClick={()=>router.push(`/${item.id}`)}>
        <img src={item.image} 
        alt={item.title}
        className="h-48 w-full object-cover object-top"/>
        <p className="text-logocolor text-sm font-semibold truncate">{item.title}</p>    
        <div className="flex flex-row items-center"> 
        {rating().map((value,index)=>(       
        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4 text-ratingicon">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd">
        </path>
        </svg>        
        ))}
        <p className="text-logocolor text-xs font-light ml-3 mt-1">
        {ratenum}/5
        </p>
        </div>
        <p className="text-logocolor text-sm font-semibold">
        {item.price}$   
        </p>
        </div>
        )})}
        </div>
    </div>
  )
}

export default Products