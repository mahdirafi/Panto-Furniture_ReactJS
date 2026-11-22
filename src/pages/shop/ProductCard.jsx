import { FaPlus } from "react-icons/fa";
import Rating from "../../Components/Rating";
import { getImageUrl } from "../../utils/getImageUrl";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

 

const ProductCard = ({product}) => {
    // cart count
  const {AddToCart} = useContext(CartContext);


    return (
        <div className=" ">
            <div className="bg-[#FAFAFA] shadow-xl">
                <img src={getImageUrl(`${product.imageUrl}`)} alt="" />
            </div>

            <div className={`p-6 dark:bg-gray-900 dark:text-white  bg-white shadow-sm space-y-4`}>
                <h4 className='text-base  mb-1'>{product.category}</h4>
                <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                <Rating rating={product.rating} />
                <div className="mt-5 flex items-center justify-between mx-4">
                    <p className="text-xl font-semibold"> <sup>$</sup> <span>{product.price}</span></p>

                    <button 
                    onClick={()=> {
                        AddToCart(product) 
                    }}

                    className="bg-blue-950 text-white px-2  py-2 rounded-full cursor-pointer text-xl"><FaPlus /></button>
                </div>
        </div>
        </div>
    );
};

export default ProductCard;