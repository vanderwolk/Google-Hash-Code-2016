
// DO NOT EDIT THIS FILE!!!
// Make a copy for yourself and work on it there

var data = require('./Solution.js');
var h = require('./Helper.js');

// Usage:
// h.load(droneID, warehouseID, productID, amount);
// h.deliver(droneID, orderID, productID, amount);
// h.wait(droneID, numOfTurns);

setTimeout(function() {

    // WRITE YOUR CODE HERE...

    // EXAMPLE USAGE BELOW

    console.log("There are " + data.rows + " rows, " + data.cols + " columns, " + data.drones + " drones with max payload " + data.payload + "u and " + data.turns + " max turns.");

    console.log("There are " + data.productsNum + " products in total.")
    for(var i = 0; i < data.productsNum; i++) {

        var productWeight = data.products[i];
        console.log("Product #" + (i + 1) + " weights " + productWeight + "u.");

    }

    console.log("There are " + data.warehousesNum + " warehouses in total.")
    for(var i = 0; i < data.warehousesNum; i++) {

        var warehouse = data.warehouses[i];
        console.log("Warehouse #" + (i + 1) + " is located at (" + warehouse.x + ", " + warehouse.y + ").");

        // To access quantities of products left in the warehouse
        for(var productID = 0; productID < data.productsNum; productID++) {
            var quantityLeft = warehouse.products[productID];
        }

    }

    console.log("There are " + data.ordersNum + " orders in total.")
    for(var i = 0; i < data.ordersNum; i++) {

        var order = data.orders[i];
        console.log("Order #" + (i + 1) + ": Deliver " + order.productsNum + " items to (" + order.x + ", " + order.y + ").");

        // To access IDs of products
        for(var k = 0; k < order.productsNum) {
            var id = order.products[k];
        }

    }

    // END OF EXAMPLES

}, 400)