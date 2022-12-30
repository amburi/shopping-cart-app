
# CLI Shopping Cart Application
By [Amburi Roy](https://www.linkedin.com/in/amburi/)

CLI shopping application allows users to add products to a shopping cart and review the total price once the purchase is complete. 

Once the application is launched, the CLI app will ask for the products the user wants to add to the shopping cart via command prompt. Each product will be separated by a new line or enter symbol. Product quantity can be entered with spaces.

```
❯ Apple 2
❯ Imported Wine 1
❯ Banan
```
Once user completes the purchase, user will be able to review the product and total price.
```
Selected Products

Name: Apple
Price: 50
Tax: 12
Quantity: 2
Cost: 112


Name: Imported Wine
Price: 1000
Tax: 18
Quantity: 1
ImportDuty: 120
Cost: 1300


Name: Banana
Price: 10
Tax: 12
Quantity: 6
Cost: 67.2


Total Discount: Rs 0
Total: Rs 1479
Cess: Rs 1.68
Grand Total: Rs 1480.68
```
**Selected Products**: List the chosen products with name, price, applicable tax, quantity, import duty charges, and total cost. <br />

**Calculation of Total Price**:
- Discount calculation: If the total price (not including tax) is above 5000, the discount is 5% on the total price.
- Tax Calculation: The tax for each product will vary based on the product category. For example, the tax will be 5% for fruits and 30% for liquor. There will be an additional import duty of 12% on imported goods.
- Calculation of Cess: Cess, which is 4%, will be calculated on the tax amount.

---
## Technologies used
* Node v16.19.0
* Npm 8.19.3
* MySQL v8.0.31
* [Bluebird](http://bluebirdjs.com/docs/getting-started.html) (Javascript Library) v3.7.2

---
## How to run

* Install node and npm
* Install dependencies `❯ npm install`
* Download/Clone <a href="codebase">codebase</a>
* Create MySQL database and import [init.sql](database/init.sql) and [ecart.sql](database/ecart.sql) files.
* Run the application `❯ node ecart.js`
* Enter the product name and quantity (`<productName> <quantity>`) in each line to add the product to the cart.
* Press `Ctrl+D`  to finish your shopping.
* Review the full shopping cart and total price once purchase is complete.
---
### Configuration

`./codebase/db.js` update database configuration
```
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecart",
    port: 3306
});
```