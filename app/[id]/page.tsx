import DetailPage from "./components/DetailPage";

type Params= {
    params:{
        id:string;
    }
}
const page = async({params}: Params) => {

    const request = await fetch(`https://fakestoreapi.com/products/${params.id}`,{method:"GET"})
    const response = await request.json()
    let data = response
    console.log(data)
        
    if(!params.id) return;
    
    return (
    <DetailPage category={data.category}
    title={data.title} image={data.image}
    description={data.description} 
    rating={data.rate}/>
  )
}

export default page







