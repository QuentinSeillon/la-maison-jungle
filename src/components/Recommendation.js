export default Recommendation


function Recommendation() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    
    if(!isSpring) {
        return <div>Ce n'est pas le moment de rempotez</div>
    }
    return <div>C'est le printemps, rempotez ! 🌱</div>
}
