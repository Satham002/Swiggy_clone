import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

// , category
const FoodItem = ({ id, name, price, description, image }) => {

    // const [itemCount, setItemCount] = useState(0);
    const {cartItems, addToCart, removeFormCart} = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img src={image} className='food-item-img' alt="" />
                {
                    !cartItems[id] ?
                        <img className='add' alt='' onClick={() => addToCart(id)} src={assets.add_icon_white}></img>
                        : <div className='food-item-counter'>
                            <img src={assets.remove_icon_red} onClick={() => removeFormCart(id)} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green}></img>
                        </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
