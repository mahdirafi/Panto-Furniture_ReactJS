import { FaPlus } from "react-icons/fa";
import Rating from "../../Components/Rating";
import { getImageUrl } from "../../utils/getImageUrl";

 

const ProductCard = ({product}) => {
    return (
        <div >
            <div className="bg-[#FAFAFA] shadow-xl">
                <img src={getImageUrl(`${product.imageUrl}`)} alt="" />
            </div>

            <div className={`p-6   bg-white shadow-sm space-y-4`}>
                <h4 className='text-base  mb-1'>{product.category}</h4>
                <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                <Rating rating={product.rating} />
                <div className="mt-5 flex items-center justify-between mx-4">
                    <p className="text-xl font-semibold"> <sup>$</sup> <span>{product.price}</span></p>
                    <button className="bg-blue-950 text-white px-2  py-2 rounded-full cursor-pointer text-xl"><FaPlus /></button>
                </div>
        </div>
        </div>
    );
};

export default ProductCard;