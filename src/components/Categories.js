import '../styles/Categories.css'

export default Categories


function Categories({ categories, activeCategory, setActiveCategory }) {
    return (
        <div className='lmj-categories'>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>

        </div>
    )
}