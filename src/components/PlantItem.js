import CareScale from "./CareScale"
import '../styles/PlantItem.css'
import { useState } from "react";

export default PlantItem

function PlantItem({ name, cover, light, water, price }) {
    const [isVisible, setIsVisible] = useState(false);

    const rendreVisible = () => {
        setIsVisible(!isVisible);
    };

    if(isVisible) {
        document.body.classList.add('active-modal')
    }else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div>
            {isVisible && (
                <div className="modal">
                    <div className="overlay" onClick={rendreVisible}></div>
                    <div className="modal-content" onClick={rendreVisible}>
                        <h3>Plus d'infos sur {name}</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, modi. Doloremque molestias molestiae a harum excepturi provident laudantium? Repellendus tempore asperiores in non hic molestias, explicabo totam. Dolores, ipsum mollitia.</p>

                    </div>
                </div>

            )

            }
            <li className="lmj-plant-item" id='li' onClick={rendreVisible}>
                <span className="lmj-plant-item-price">{price}€</span>
                <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
        </div>
    )
}
