# Cartify Ecommerce Project

Cartify is an ecommerce fullstack application with Login and Credit card payment features, built with Angular as frontend & Spring boot as backend.

**[Live Link](https://cartify-sg.vercel.app)** 

**[Backend url - Deployed on Azure](https://cartify-backend.azurewebsites.net/api)** 

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![CockroachLabs](https://img.shields.io/badge/Cockroach%20Labs-6933FF?style=for-the-badge&logo=Cockroach%20Labs&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![Cartify Logo](cartify-ui/src/assets/images/logo.png)

### Snapshots

1. Homepage items according to category
   ![Homepage](images/feature2.0_findbyCategory.png)

2. Cart Items with Increment, Decrement, Remove feature
   ![Cart Items](images/feature2.0_cart-details.png)

3. Pagination 
   ![Pagination](images/feature2.0_Pagination.png)

4. Item Details 
   ![Item Details ](images/feature2.0_ProductDetail.png)

5. Checkout
   ![Item Details ](images/feature2.0_checkoutForm_layout2.png)
   ![Item Details ](images/feature2.0_checkoutForm_layout1.png)

### Docker commands
```sh
# Build
docker build -t swarnadeepghosh/cartify-ecommerce:0.0.1-RELEASE .
 
# Run in local
docker run -d -p 8081:8080 --name=cartify-ecommerce swarnadeepghosh/cartify-ecommerce:0.0.1-RELEASE

# push to dockerhub
docker push swarnadeepghosh/cartify-ecommerce:0.0.1-RELEASE
```

## License

[![Licence](https://camo.githubusercontent.com/3dbcfa4997505c80ef928681b291d33ecfac2dabf563eb742bb3e269a5af909c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f496c65726961796f2f6d61726b646f776e2d6261646765733f7374796c653d666f722d7468652d6261646765)](https://github.com/Ileriayo/markdown-badges/blob/master/LICENSE)
