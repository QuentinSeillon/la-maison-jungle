import { useState } from "react";
import '../styles/Footer.css'

export default Footer

function Footer() {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    // useEffect(() => {
    //     console.log(`1️⃣ Cette alerte s'affiche à chaque rendu`);
    // })

    // useEffect(() => {
    //     console.log(`2️⃣ Cette alerte d'affiche au premier rendu`);
    // }, [])

    // useEffect(() => {
    //     console.log(`3️⃣ Cette alerte s'affiche au premier rendu et quand mon panier est mis à jour`);
    // }, [cart])

    // useEffect(() => {
    //     return () =>
    //         console.log(`4️⃣ Cette alerte s'affiche quand Footer est supprimer du DOM`);
    // })

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes("@")) {
            setErrorMessage("Attention, il n'y a pas d'@, ceci n'est pas une adresse mail");
        } else {
            setErrorMessage(""); // Réinitialise le message d'erreur s'il est valide
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionés de plantes 🌿🪴🌵
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
            <input
                placeholder="Entrez votre mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
            {errorMessage && <div>{errorMessage}</div>}
        </footer>
    )
}