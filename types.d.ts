interface ListElement{
    image:string;
    title:string;
    category?:string;
    description?:string;
    price?:string;
    id?:number;
    rating:{
        rate:number;
        count:number;
    }
}