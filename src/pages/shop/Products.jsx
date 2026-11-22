import { useContext, useState } from "react";
import { products } from "../../utils/Products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/button-icon.png"
import { ThemeContext } from "../../Context/ThemeContext";

const Products = ({ headline }) => {
  

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  const [selectCategory, setSelectCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filterProducts = products.filter(
    (product) => product.category === selectCategory,
  );
  console.log(filterProducts);
  
  // visible products function
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
   <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-secondary-bg'}`}>
  
    <div className="text-secondary  bg-gray-100 dark:bg-gray-950 dark:text-white">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center my-12">{headline}</h2>

        {/*category tabs  */}
     <div className="w-full max-w-md sm:max-w-fit mx-auto mb-16 py-3 px-3 rounded-full bg-gray-500 sm:bg-green-100 sm:dark:bg-gray-500 sm:rounded-full md:p-2.5">
  <div className="flex flex-row items-center gap-4 sm:gap-4 overflow-x-auto sm:overflow-visible sm:justify-center md:justify-between [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    {categories.map((category, index) => (
      <button
        key={index}
        onClick={() => {
          setSelectCategory(category);
          setVisibleProducts(4);
        }}
        className={`shrink-0 whitespace-nowrap px-3 py-1 text-sm sm:text-base rounded-full cursor-pointer transition-colors
          hover:bg-primary hover:text-white
          ${
            selectCategory === category
              ? "text-primary bg-green-100 dark:bg-gray-300 font-semibold"
              : "bg-secondary-bg dark:bg-gray-400 dark:text-gray-950"
          }`}
      >
        {category}
      </button>
    ))}
  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Grid */}
          {filterProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* load more button  */}
        {
          visibleProducts < filterProducts.length && (
            <div className="flex items-center justify-center mt-12">
               <button 
               onClick={loadMoreProducts}
               className='text-lg font-medium text-primary flex items-center gap-1 cursor-pointer'>
                      View More 
                      <img src={btnIcon} alt="" />
                  </button>
            </div>
          )
        }
      </div>
    </div>
 </div>
   
  );
};

export default Products;
