module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    var  numElements = 10;
    return {
	items: _.times(numElements, function(n){
	    return {
		id: n,
		color: faker.commerce.color(),
		productAdjective: faker.commerce.productAdjective(),
		department: faker.commerce.department(),
		name: faker.commerce.productName(),
		price: faker.commerce.price()
	    }
	})
    }
}
