import React, { useContext, useState } from 'react'
import {FiEdit} from 'react-icons/fi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import productContext from '../context/productContext';

const Card = (props) => {
  const context = useContext(productContext);
  const {deleteProduct, editProduct} = context;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {card} = props;
  const [product, setProduct] = useState({
    eid: card.id,
    etitle: card.title,
    edescription: card.description,
    eimageLink: card.imageLink,
  })
  
  const handleEditPassword = () => {
    setSelectedProduct(card);
    // updateProduct(product);
   
  };

  // const updateProduct = (currentProduct) => {
  //   setProduct({etitle: currentProduct.title, edescription: currentProduct.description, eimageLink: currentProduct.imageLink})
  // }

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value }); // Remove square brackets around e.target.value
  };

  const handleClick = (e) => {
    e.preventDefault();
    editProduct({
      id: product.eid,
      title: product.etitle,
      description: product.edescription,
      imageLink: product.eimageLink,
    });
    setSelectedProduct(null);

  }

  return (
    <div className='text-center shadow-lg p-10 rounded-xl my-10 ml-4 flex flex-col items-center'>
      <div className='flex ml-96'>
        <RiDeleteBin6Line size={20} className='text-red-700 ml-12 cursor-pointer' onClick={() => {deleteProduct(card.id)}}></RiDeleteBin6Line>
        <FiEdit className='ml-4 cursor-pointer' size={18} onClick={handleEditPassword}></FiEdit>
      </div>
    <img src={card.imageLink} width={200} height={200} alt={card.title} />
    <h3 className="text-lg font-medium pt-8 pb-2">{card.title}</h3>
    <p className="py-2">{card.description}</p>
    <h4 className="py-4 text-teal-600 cursor-pointer">Buy Now</h4>
    {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow w-full sm:max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            {/* Form to edit password details */}
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Title</label>
                <input
                  type="text"
                  name='etitle'
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={product.etitle}
                  // Add onChange handler to update the username
                  onChange={onChange}
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-sm font-bold mb-1">Description</label>
                <div className="flex items-center">
                  <input
                    type={ 'text'}
                    name="edescription"
                    id=""
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    defaultValue={product.edescription}
                    onChange={onChange}

                  />
                  <button
                    type="button"
                    
                    className="ml-2 text-gray-600"
                  >
                    
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Image Link</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  name='eimageLink'
                  value={product.eimageLink}
                  // Add onChange handler to update the website
                  onChange={onChange}

                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleClick}
                  // Add onClick handler to update the password
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
  </div>
    
  )
}

export default Card
