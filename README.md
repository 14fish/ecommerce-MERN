Host: https://eshop-hadisov.herokuapp.com/

**Frontend:**
- React
- Redux
- React Bootstrap

**Backend:**
- Express.js
- Mongoose
- JSON Web Token

**Features:**
- Login/Register
- Profile edit
- Search product
- Add rating, Write a comment
- Order item
- Check status of orders
- Admin Panel: 
    - Edit users/orders/products
    - Create new product

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server",
    "server": "nodemon server/server",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "data:import": "node server/seeder",
    "data:destroy": "node server/seeder -d",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
  }
