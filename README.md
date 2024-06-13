# CLI Shopping Cart Application

A Command Line Interface (CLI) shopping cart application allowing users to add products to a cart and review the total price upon purchase completion.

## Table of Contents

- [How It Works](#how-it-works)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)

## How It Works

Upon launching the application, the CLI prompts the user to input the products they wish to add to the shopping cart. Each product should be entered on a new line, specifying the quantity with a space.

Example:
```sh
❯ Apple 2
❯ Imported Wine 1
❯ Banana 6
```

After completing the entries, the user can review the selected products along with the total price, including applicable taxes and duties.

Example Output:
```sh
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
Import Duty: 120
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

## Key Features

- **Selected Products**: Displays the name, price, applicable tax, quantity, import duty charges, and total cost of each product.
- **Calculation of Total Price**:
  - **Discount Calculation**: If the total price (excluding tax) exceeds Rs 5000, a 5% discount is applied.
  - **Tax Calculation**: Tax rates vary by product category. For example, fruits are taxed at 5% and liquor at 30%. Imported goods incur an additional 12% import duty.
  - **Cess Calculation**: A cess of 4% is applied to the total tax amount.

## Technologies Used

- Node.js v16.19.0
- npm v8.19.3
- MySQL v8.0.31
- [Bluebird](http://bluebirdjs.com/docs/getting-started.html) (JavaScript Library) v3.7.2

## Installation

1. **Install Node.js and npm**: Ensure Node.js and npm are installed on your system.

2. **Clone the Repository**:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

3. **Install Dependencies**:
   ```sh
   npm install
   ```

4. **Set Up MySQL Database**:
   - Create a MySQL database.
   - Import the [init.sql](database/init.sql) and [ecart.sql](database/ecart.sql) files into your database.

## Usage

1. **Run the Application**:
   ```sh
   node ecart.js
   ```

2. **Add Products to the Cart**:
   Enter the product name and quantity (`<productName> <quantity>`) on each line to add products to the cart.

3. **Complete Shopping**:
   Press `Ctrl+D` to finish shopping and review the shopping cart and total price.

## Configuration

Update the database configuration in `./codebase/db.js` as needed:
```javascript
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecart",
    port: 3306
});
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Developed by [Amburi Roy](https://www.linkedin.com/in/amburi/). For any inquiries, please contact via LinkedIn.
