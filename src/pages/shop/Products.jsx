import { useState } from "react";
import { products } from "../../utils/Products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/button-icon.png"

const Products = ({ headline }) => {
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
    <div className="text-secondary  bg-gray-100">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center my-12">{headline}</h2>

        {/*category tabs  */}
        <div className="bg-green-100 max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectCategory(category);
                  setVisibleProducts(4);
                }}
                className={`hover:bg-primary px-3 py-1 hover:text-white hover:py-1 hover:px-3 
                  hover:rounded-full cursor-pointer transition-colors 
                      ${
                        selectCategory === category
                          ? "text-primary rounded-full bg-green-100 font-semibold"
                          : "bg-secondary-bg rounded-full"
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
  );
};

export default Products;
