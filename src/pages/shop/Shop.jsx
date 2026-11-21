import bannerImg from '../../assets/banner.png'
import Products from './Products';

const Shop = () => {
    return (
        <section className='min-h-screen'>
            <div className={`w-full h-100 bg-cover bg-center text-white flex justify-center items-center `} style={{ backgroundImage: `url(${bannerImg})` }}>
                <h1 className='text-4xl font-bold'>Shop Our Products</h1>
 </div>
                <Products headline="What's Your Choice"/>
       
        </section>
         
    );
};

export default Shop;