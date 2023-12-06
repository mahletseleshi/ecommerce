import Product1T from "../images/image-product-1-thumbnail.jpg"
import Product1 from "../images/image-product-1.jpg"
import Product2T from "../images/image-product-2-thumbnail.jpg"
import Product2 from "../images/image-product-2.jpg"
import Product3T from "../images/image-product-3-thumbnail.jpg"
import Product3 from "../images/image-product-3.jpg"
import Product4T from "../images/image-product-4-thumbnail.jpg"
import Product4 from "../images/image-product-4.jpg"

const Desktop = () => {
  return (
   <div>


    <div>
      <img src={Product1} alt="product1" />
      <div>
      <img src={Product1} alt="product1" />
      <img src={Product2} alt="product2" />
      <img src={Product3} alt="product3" />
      <img src={Product4} alt="product4" />
      </div>
    </div>

    <div>
      <p className=""> SNEAKER COMPANY</p>

    </div>
   </div>
  )
}

export default Desktop
