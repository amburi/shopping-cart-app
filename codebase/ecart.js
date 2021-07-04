const readline = require('readline');
var Promise = require("bluebird");
var db = require('./db');
var querySql = db.querySql;

var cart = [];
var totalTaxablePrice = 0;
var totalNonTaxablePrice = 0;
var totalTax = 0;

// read line start
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// get all config amounts
function getConfig() {
    var sql = 'SELECT * FROM config';
    return querySql(sql).then(function (rows) {
        if (rows.length == 0) {
            return Promise.reject("did not find config");
        }
        var c = rows[0];
        return c;
    });
}

// get all products
function getProduct(productName) {
    var sql = 'SELECT * FROM product AS p, productType AS t WHERE p.productTypeId = t.productTypeId AND p.name LIKE ? ';
    return querySql(sql, [productName]).then(function (rows) {
        if (rows.length == 0) {
            return Promise.reject("did not find product");
        }
        var p = rows[0];
        return p;
    });
}

// on line read
rl.on('line', (input) => {
    var productName = input.substring(0, input.lastIndexOf(" ") + 1).trim();
    var quantity = parseInt(input.substring(input.lastIndexOf(" ") + 1, input.length).trim());

    Promise.resolve().then(function () {
        return getConfig();
    }).then(function (config) {
        if (quantity > 0) {
            Promise.resolve().then(function () {
                return getProduct(productName);
            }).then(function (foundItem) {
                let found = {};
                found.Name = foundItem.name;
                found.Price = foundItem.price;
                found.Tax = foundItem.taxInPercent;
                if (found) {
                    found.Quantity = quantity;
                    var nonTaxablePrice = quantity * foundItem.price;
                    var cost = (nonTaxablePrice + (nonTaxablePrice * (foundItem.taxInPercent / 100)));

                    if (foundItem.isImported === 'yes') {
                        var importDutyForProd = (nonTaxablePrice * config.importedDuty / 100);
                        cost += importDutyForProd;
                        found.ImportDuty = importDutyForProd;
                    }
                    found.Cost = cost;

                    totalTax += parseInt(foundItem.taxInPercent);
                    totalTaxablePrice += parseInt(found.Cost);
                    totalNonTaxablePrice += nonTaxablePrice;
                    cart.push(found);
                } else {
                    console.log('Product out of stock');
                }
            }).catch(function (err) {
                console.error("got error: " + err);
            });
        } else {
            console.log('Please enter proper quantity');
        }
    }).catch(function (err) {
        console.error("config details not found " + err);
    });
});

// execute it on press Clt+d
rl.on('close', () => {
    displayCart(cart);
    displayTotal();
});

// display cart - all items
function displayCart(cart) {
    console.log('\nSelected Products\n');
    for (c of cart) {
        for (const [key, value] of Object.entries(c)) {
            console.log(`${key}: ${value}`);
        }
        console.log('\n');
    }
}

// display total and grand total amounts
function displayTotal() {
    Promise.resolve().then(function () {
        return getConfig(); // get all configs
    }).then(function (config) {
        var applicableCess = totalTax * config.cess / 100;
        var grandTotal = totalTaxablePrice + applicableCess;
        var discountProd = 0;
        if (totalNonTaxablePrice > 5000) {
            discountProd = config.discount;
            discountProd = (totalNonTaxablePrice * config.discount / 100);
            grandTotal -= discountProd;
        }
        console.log('Total Discount: Rs ' + discountProd);
        console.log('Total: Rs ' + totalTaxablePrice);
        console.log('Cess: Rs ' + applicableCess);
        console.log('Grand Total: Rs ' + grandTotal);
    });
}