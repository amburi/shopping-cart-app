
# CLI Shopping Cart Application (2021)

A CLI Shopping Application which will allow users to add products to shopping a cart and review the total price once the shopping is done.

Once the app is started, the CLI app should ask for the products through "Command Prompt" user wanted to add to shopping cart. Each product will be separated by new line or enter mark. Product count could be mentioned with space.

** _CLI: Command Line Interface which a user could run the program in a terminal_


# Solution

## Technologies Used
 1. Node JS (v14.16.0)
 2. Express JS
 3. MySQL (v8.0.7)

## Project Set Up

1. Install <a href="https://nodejs.org/en/download/">Node JS</a>.
2. Clone the <a href="codebase">codebase</a>
3. Install NPM 
```
npm install
```
4. Create MySQL database. Import following files - <a href="database/init.sql">init.sql</a> and <a href="database/ecart.sql">ecart.sql</a>.

## Project Execute/Run

Now run the application:

```
$ cd codebase
$ node ecart.js
```

Then enter Product Name and Quantity `<ProductName> <Quantity>` in each line. Press `Ctrl+D` if you are done with shopping.

```
$ Apple 2
$ Imported Wine 1
$ Banana 6
```
_(Press Ctrl+D to exit)_

Once the products are selected, the following lines will be displayed in CLI.

**Output:**

```
PS F:\shopping-cart-app\codebase> node ecart.js
Apple 2
Imported Wine 1
Banana 6

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
### Explain Output

1. **Selected Products:** Give the list of selected product with name, price, applicable tax, quantity, import duty charges and total cost.

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
```

2. **Total Value Calculation:**

```
Total Discount: Rs 0
Total: Rs 1479
Cess: Rs 1.68
Grand Total: Rs 1480.68
```

- <u>Discount Calculation:</u> If the Total price (not including Taxes) is above 5000 then discount is 5% on the Total price
- <u>Tax Calucation:</u>
    - Tax for each Product will vary based on Product Category. For e.g., Tax will be 5% for Fruits, and 30% for Liquor.
    - Imported product will have an additional Import Duty of 12%.
- <u>Cess Calculation:</u> Cess which is 4% will be calculated for Tax amount.



