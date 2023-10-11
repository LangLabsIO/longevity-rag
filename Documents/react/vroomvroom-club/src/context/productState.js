import { useState } from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
    const cardData = [
        {
          id: 1,
          title: 'Car 1',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
          imageLink: "car1.png"
        },
        {
            id: 2,
          title: 'Car 2',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
          imageLink: "https://imgs.search.brave.com/I4Wk82dKQZcWimvZLR8r4rsqOnySOoAcBB2qXuREzSY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9DYXIucG5n"

        },
        {
            id: 3,
          title: 'Car 3',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
          imageLink: "https://imgs.search.brave.com/J1rW3rwg05XqTocUHsKcEfO7F4-OT9nMHzV-ghwS80A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2Nhci1wbmct/Y2FyLXBuZy1maWxl/LXBuZy1pbWFnZS0x/MzEyLnBuZw"

        },
        {
            id: 4,
            title: 'Car 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imageLink: "https://imgs.search.brave.com/RqXd43X9UFj4FGInYhQ_pjHKAaKy7j-GXkRD6hev54o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2Nhci1wbmct/anBnLXNwb3J0cy1j/YXItd2FsbHBhcGVy/cy1jb2xsZWN0aW9u/LTE2MDAuanBn"
          },
          {
            id: 5,
            title: 'Car 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imageLink: "https://imgs.search.brave.com/YHba5O5UGNAx_87vwIFrI_e5Dae3lJSfzqmm6WKzVvA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9DYXItVHJhbnNw/YXJlbnQucG5n"
  
          },
          {
            id: 6,
            title: 'Car 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imageLink: "https://imgs.search.brave.com/p07ACLsLoKE3vXj8GHDzx9EFFgJxzX9qAWFspt_6fOk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1oZC1v/Zi1jYXItY2FyLXBu/Zy1oZC1wbmctaW1h/Z2UtMTAyNC5wbmc"
  
          },
          {
            id: 7,
            title: 'Car 7',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imageLink: "https://imgs.search.brave.com/i9tNjDnIfYnqUKFu9MnyNdijAq83khL1x1qOwwu5uMs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/NC9MdXh1cnktQ2Fy/LVRyYW5zcGFyZW50/LnBuZw"
          },
          {
            id: 8,
            title: 'Car 8',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imageLink: "https://imgs.search.brave.com/YN0g8VqgsUfuxaSNE9es4EnMtoCQCNnDHUyzt3weBbc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1RveW90/YS1DYXItUE5HLVBp/Y3R1cmUucG5n"
  
          },
          {
            id: 9,
            title: 'Car 9',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imageLink: "https://imgs.search.brave.com/d5nTRSR6DDcBgZqH-1pNXVVH6fnJFYPm-sXT2j5YfoE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzU1LTU1NTQz/N19vdXItaG91cnMt/bXVzY2xlLWNhcnMt/cG5nLXRyYW5zcGFy/ZW50LnBuZw"
  
          },
      ];

      const [products, setProducts] = useState(cardData);

      const editProduct = ({id, title, description, imageLink}) => {
  

        let newProducts = [...products];
        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            if(element.id === id){
                newProducts[index].title = title;
                newProducts[index].description = description;
                newProducts[index].imageLink = imageLink;
                break;
            }
            
        }
       
        
        setProducts(newProducts);
        
      }
    //  
      
      const deleteProduct = (id) => {
        
        const newProducts = products.filter((product) => product.id !== id); 
        setProducts(newProducts);
      }
    return(
        <ProductContext.Provider value={{products, setProducts, editProduct, deleteProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;