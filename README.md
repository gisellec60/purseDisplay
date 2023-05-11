
# Bagz Galore

[Bagz Galore](https://gisellec60.github.io/purseDisplay/) is a website that hosts new and used designer purses for sale by various sellers. The idea for [Bagz Galore](https://gisellec60.github.io/purseDisplay/) came from [Poshmark](https://poshmark.com/) which is a website that hosts various new and used items for sale by different sellers. 

## **Who are the Users?**
Bagz Galore currently supports two classification of users, ***customer*** and ***administrator***.

### *Customer*
The customer comes to [Bagz Galore](https://gisellec60.github.io/purseDisplay/) looking for a high-end purse and possibly a deal.  On the website are ***cards*** with information about high-end purses for sale. The Customer reads the cards and if they want more information they can click on the ***purse image*** and a description box pops up. The customer has the option of contacting the seller to get more information and/or purchase the product. 

There are four buttons on each card but the only buttons a customer will see are the **Available/Unavailable** and **Contact** buttons. The only button a customer will be able to access is the **Contact** button.

***Note***: No purchases can be made from the site at this time. The customer must contact the seller for purchase.  

### *Administrator*
The **admin** has full access to the website for administration purposes. The admin will be able to:
   - Set the purse(s) to available/unavailable
   - Edit purse(s) information
   - Delete a purse(s) 
   - Contact Seller
   - Add purse(s) 

***Note***: At this time a seller must contact the admin for any and all administration purposes to include:
- Adding/Editing Purse Information
- Marking purse unavailable
- Deleting purses

## More about [Bagz Galore](https://gisellec60.github.io/purseDisplay/)
The information for the purses is in Json format on a Json server with the data consisting of the following:
   - brand 
   - style
   - color
   - size
   - image
   - description
   - condition
   - price
   - seller's email

The information on the cards is limited to the items below with the option of getting more information by clicking on the ***purse image***.
   - brand 
   - style
   - color
   - condition 
   - price

## File Format
```
{
  "purseData": [
    {
      "id": 4,
      "brand": "Louis Vuitton",
      "style": "Grace MM",
      "color": "Monogram coated canvas",
      "size": "Large",
      "img": "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-graceful-mm-monogram-handbags--M43703_PM1_Back%20view.png?wid=2048&hei=2048",
      "desc": "Pivoine Pink Monogram coated canvas Natural cowhide-leather trim Textile lining Gold-color hardware Leather tab magnetic closure Name tag Zipped inside pocket Handle:Single",
      "condition": "New",
      "price": "1,890",
      "email": "george@gmail.com"
    },
    {
      "id": 5,
      "brand": "Louis Vuitton",
      "style": "Graceful PM",
      "color": "Monogram coated leather",
      "size": "Large",
      "img": "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-graceful-pm-damier-azur-handbags--N42249_PM1_Back%20view.png?wid=2048&hei=2048",
      "desc": "Rose Ballerine Pink Damier Azur coated canvas Natural cowhide-leather trim Textile lining Gold-color hardware Leather tab magnetic closure Name tag Zipped inside pocket Handle:Single",
      "condition": "New",
      "price": "1,760.00",
      "email": "mary@gmail.com"
    },
    {
      "id": 10,
      "brand": "Bvlgari",
      "style": "SERPENTI FOREVER CHAIN WALLET",
      "color": "green",
      "size": "Small",
      "img": "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw3c23e163/images/images/1361597.png",
      "desc": "Serpenti Forever chain wallet in emerald green calf leather with black nappa leather interior. Captivating snakehead magnetic closure in light gold-plated brass, embellished with black and white agate enamel scales and green malachite eyes.",
      "condition": "New",
      "price": "2,000",
      "email": "mary@gmail.com"
    },
    {
      "id": 11,
      "brand": "Arcadia",
      "style": "Arco Large Satchel",
      "color": "Black",
      "size": "Large",
      "img": "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw1e110be0/images/images/1390156.png",
      "desc": "Smooth nappa calf leather / Dimensions: / 24(H)x32(L)x14(D) cm / 9.50”(H)x12.50”(L)x5.50”(D) inches / Weight: 1 kg / Handle drop 12cm – 4.75” inches / Clasp closure / Inside zipper pocket / Brushed hardware / Branded lining / Removable shoulder strap drop 60 cm – 23.50” inches / Protective metal feet / Internal metal plate “Arcadia Made in Italy”",
      "condition": "Used: Very Good",
      "price": "430",
      "email": "nancy@gmail.com"
    }
  ]
}
```
## What's Next?
Currently the [Bagz Galore](https://gisellec60.github.io/purseDisplay/) is maintained by the admin/author.  This means the admin/author will be the one maintaining the purse data.  As the website grows the task of the author maintaining the data will become more daunting. Therefore, there is a plan to allow the ***seller*** to act as admin for their items. The seller will be given a login which will give them acccess to their purses ***only***. 

## About the Author
Giselle Smith is the author of [Bagz Galore](https://gisellec60.github.io/purseDisplay/) and is currenlty a student at [Flatiron School](https://flatironschool.com).
