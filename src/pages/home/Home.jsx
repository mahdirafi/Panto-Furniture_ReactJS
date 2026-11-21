import Products from "../shop/Products";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Materials from "./Materials";
import WhyChoose from "./WhyChoose";


const Home = () => {
    return (
        <>
         <Hero/>   
         <WhyChoose/>  
          <Products headline="Best Selling Product"/> 
          <Experiences/>
          <Materials/>
        </>
    );
};

export default Home;