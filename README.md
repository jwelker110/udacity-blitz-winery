# Project-Web
Web Challenge Project - Level 1

Here at U & B Winery, our mission is to be the preeminent wine producer in California. We focus on providing world class service and a portfolio that encompasses wines of authenticity, family ownership and renowned quality.

We are looking to update our website. 

## Overview

At the moment our site navigation is clunky, navigation does not fit correctly, our navigation section does not expand and contract when viewing on mobile, and the site will not display properly on tablet devices. We prefer our site built from scratch utilizing the latest trend in javascript technologies. You are free to use third party frontend API's. 

Our main product focus will be three types of wines:

- Good
- Better
- Best

Starter code provided is to jump start your development.

## Images

Logo & stock images are located within “img” directory

## Data

We have a simple product api with read only access. API will provide information regarding our wines. For this project we will use direct access to json data located witin data/products.json & data/featured_products.json files.

Example json object:
```
{
	"1": {
		"name": "Merlot",
		“category”:”Good”,
		"winemaker": "John Doe",
		"tastSummary": ["toasty", "cherry", "oak"],
		"foodPairings": ["meats", "pastas", "vegetarian"],
		"tastingNotes": "Merlot is a unique drinkable wine created in partnership with John Doe.Its bright cherry color and subtle notes of toasty spice are a result of aging in a combination of American and French oak barrels.Rich tannins make our Merlot a perfect match with a range of main courses including meats,pastas and vegetarian dishes.",
		"wineType": "Red Wine",
		"blend": "Merlot",
		"alcoholByVolume": 13.5,
		"containerType": "Bottle",
		"bottleMaterial": "Glass",
		"productPhotos": ["example1", "example2", "example3"]
	}
}
```

## Tip:

To get you started we created a simple script to load featured products data located in the bottom section of index.html

![image](https://cloud.githubusercontent.com/assets/2653576/15756763/89a2b448-28b7-11e6-85d3-a353cb192c70.png)

# Required Components
- All pages functional
- Project take advantage of image assets located within img directory
- Project contains a data/featured_products.json module that supplies featured wines within homepage. Project loads featured products from featured_products.json via jQuery.
- Project contains a data/products.json module that supplies wines product listing within Wines page. Project loads products from products.json via jQuery.
- Project contains contact page. The contact page will submit to test email address.
- Project contains a fully functional mobile menu which expands and contracts to display menu options 
- Codebase must have comments for all functions

## Suggestions to Make Your Project Stand Out!
- Make the site unique by including external library for smooth animation transitions between products.
- Have the website display a loading indicator while images are being fetched from the server and cached to brower.
- Add mobile menu with identification for active page


