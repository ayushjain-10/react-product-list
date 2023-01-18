import data from './data.json'

const allCategories = data.map(obj => obj.category)

// Make an object where each key is a category name
const categoryObjects = allCategories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!
  // Make an arr array of the keys
  const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = data.reduce((obj, cat) => {
    // check if cat exists as a key on obj
    // if category key does not exist
    // add that key with a value of 1
    // else 
    // add 1 to the current value of that key
    if (!obj[cat.category]) {
        obj[cat.category] = 1
    } else {
        obj[cat.category] += 1
    }
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!

  const namesAndCategories = categoriesUnique.map(name => {
    // return an object here with the name and count
    return {
        name,
        count: categoriesWithCounts[name]
    }
  })
export default data // export the native JS array

export { allCategories, namesAndCategories }