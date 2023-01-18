import data, { allCategories, namesAndCategories } from './data'

// Use Array.map() to transform the category array into an array of JSX/Components You can import categories into any module with import { namesAndCategories } from './data.js'
const categories = namesAndCategories.map((cat, i) => {
    return (
        <div key={i}>
        <h2>{cat.name}</h2>
        <p>{cat.count}</p>
        </div>
    )
    }
)

// Use Array.map() to transform the data array into an array of JSX/Components
const products = data.map((product, i) => {
    return (
        <div key={i}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}
)

