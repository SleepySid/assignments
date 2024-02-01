/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
  const map = new Map()
  for(let e of transactions){
    if(!map.get(e.category)){
      map.set(e.category , e.price)
    }else {
      map.set(`${e.category}` ,(map.get(`${e.category}`) + e.price) )
    }
  }
  const result = []
  for(let [key , value] of map){
    result.push({
      category : key,
      totalSpent : value
    })
  }
  return (result)
}

module.exports = calculateTotalSpentByCategory;
