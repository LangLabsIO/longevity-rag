import React, { useContext } from 'react'
import Card from './components/Card'
import productContext from './context/productContext';

const Products = (props) => {
    const context = useContext(productContext);
    const {products} = context;
    
  return (
    <div className={` ${props.darkMode?"dark": ""}`}>
       <div className="dark:bg-gray-900 bg-white">
       <div className='grid grid-cols-3 gap-8 dark:text-white mr-4'>
       {products.map((card, index) => (
        <Card key={index}  card={card}/>
      ))}
        </div>
    
    </div>

    </div>
  )
}

export default Products
