
import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";

const DefaultData = async()=>{
    try {
        await Product.insertMany(products);
        console.log("data import sucessful");
        
    } catch (error) {
        console.log('error 1',error.message);
        
    }

}

export default DefaultData;