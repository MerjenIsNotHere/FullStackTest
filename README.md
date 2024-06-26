Frontend of this project (Front) was bootstrapped with [Creat React App](https://github.com/facebook/create-react-app.git).
In the project directory you can run:
**npm start**

Open http://localhost:3000 to view it in browser.


To run backend (Back) run:
**npm start**
 

**API TEST**
To test APIs you will need API testing platform such as [Postman](https://www.postman.com)

**Register**: localhost:5000/api/auth/register
**Method**: POST
**Body**:  "username": "Somename",
       "email": "somename@gmail.com",
       "password": "123456"

**Login**: localhost:5000/api/auth/login
**Method**: POST
**Body**: "username": "Somename",
          "password": "123456"

**Get single user**: localhost:5000/api/users/find/{user_id}
**Method**: GET

**Get user list**: localhost:5000/api/users
**Method**: GET

**Update user info**: localhost:5000/api/users/find/{user_id}
**Method**: PUT
**Body**: "username": "SomeUpdatedName"

**Delete user**: localhost:5000/api/users/find/{user_id}
**Method**: DELETE

**Create new product**: localhost:5000/api/products
**Method**: POST
**Body**: {
           "title": "Guitar",
           "desc": "Gibson",
           "img":"https://static.bax-shop.es/image/product/46222/161174/70fc5f26/450x450/Fender_Kurt_Cobain_Sonic_Blue.jpg",
           "category":["music","acoustic"],
           "price":120
          }

**Get all products**: localhost:5000/api/products
**Method**: GET

**Get single product**: localhost:5000/api/product/find/{product_id}
**Method**: GET


**Update product info**: localhost:5000/api/users/find/{product_id}
**Method**: PUT
**Body**: "username": "SomeUpdatedName"

**Delete product**: localhost:5000/api/users/find/{product_id}
**Method**: DELETE


**Create new order**: localhost:5000/api/orders
**Method**: POST
**Body**: {
    "userId": "user_id",
    "products": [
              {
            "productId":"2level",
            "quantity":2
           },
           {
            "productId":"hsdjsfjk",
            "quantity":1
          }
         ],
             "amount":50,
             "address":"Russia"
       }

**Get all orders**: (Admin only): localhost:5000/api/orders
**Method**: GET

**Get single order**: localhost:5000/api/product/find/{user_id}
**Method**: GET


**DATABASE**

As database we use MongoDB ATLAS cloud cluster.
To store data in cluster you need to create free cluster on MongoDB Atlas or use existing one.
Look for URL at ".env" file.
