import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    function supprimerElement(nomPlant) {
        // Recherche de l'index de l'élément à décrémenter dans le panier
        const plantAModifier = cart.findIndex((plant) => plant.name === nomPlant);

        // Vérification si l'élément a été trouvé
        if (plantAModifier !== -1) {
            // Création d'une copie du panier pour éviter la mutation directe de l'état
            const updatedCart = [...cart];

            // Décrémentation de la quantité de l'élément dans la copie du panier
            if (updatedCart[plantAModifier].amount > 1) {
                updatedCart[plantAModifier].amount -= 1;
            } else {
                // Si la quantité est égale à 1, supprimer complètement l'élément
                updatedCart.splice(plantAModifier, 1);
            }

            // Mise à jour du panier via la fonction de mise à jour parente
            updateCart(updatedCart);
        } else {
            console.log('Élément non trouvé dans le panier');
        }
    }

    /**
     * Affiche une alert a chaque fois que j'ajoute ou retire une plante de mon panier
     * ET
     * quand je change la catégorie de plante
    */
    // useEffect(() => {
    //     alert(`J'aurai ${total}€ à payer 💸`)
    // }, [total, activeCategory])

    /**
     * Declanche une alert uniquement au premier chargement de la page
     */
    // useEffect(() => {
    //     alert('Bienvenue dans La maison jungle')
    // }, [])

    /**
     * Change dynamiquement le titre de l'onglet internet en fonctione du montant du panier
     */
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                                <button onClick={() => supprimerElement(name)}>x</button>
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart