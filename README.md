
# Bagz Galore

<p>[Bagz Galore](git@github.com:gisellec60/purseDisplay).git is a website that hosts new and used designer purses for sale by  various sellers. The idea for Bagz Galore came from Poshmark which is a website which hosts various new and used items for sale by different sellers. </p>

## How it used?
### The User
The user reads the information on the website. If they want more information about a particular purse they can click on the image and a description box will pop up with more information. The user then has the option of contacting the seller through email to get more information and/or purchase the product. 

There are four buttons on each card but the only buttons a user will see are the "Available/Unavailable" and "Contact" buttons. The only buttons a user will be able to access is the "Contact" button.

Note: No purchases can be made from the site. The user must contact the seller for purchase.  

### The Owner
The owner has full access to the website. The owner will be able to:
    Set the purse(s) to available/unavailable
    Edit purse(s) information
    Delete a purse(s) 
    Contact Seller
    Add purse(s) 

## More about Bagz Galore
The purse information is in Json format on a Json server. The information consist of the following:
    brand 
    style
    color
    size
    image
    description
    condition
    price
    seller's email

The information on the cards is limited:
    brand 
    style
    color
    condition 
    price

## File format
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
### Purse Card
!(image.png) 