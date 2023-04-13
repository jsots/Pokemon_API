<!-- Headings -->

# Pokemon API

> Gotta catch 'em all! Then...we gotta store their data. This API is a collection of the first 721 Pokemon and their stats. This includes images of the Pokemon and their shiny forms. Enjoy!

## What this API Includes:

This API will capture the following information for the first 721 Pokemon (according to the National Dex):

- dexNumber: String
    - The Pokedex number of the Pokemon, written as a string in the JSON file.
- name: String
    - The name of the Pokemon, written as a string in the JSON file.
- type1: String
    - The first type of the Pokemon, written as a string in the JSON file.
- type2: String
    - The second type of the Pokemon, written as a string in the JSON file.
- total: String
    - The stat total of the Pokemon, written as a string in the JSON file.
- hp: String
    - The hp stat of the Pokemon, written as a string in the JSON file.
- attack: String
    - The attack stat of the Pokemon, written as a string in the JSON file.
- defense: String
    - The defense stat of the Pokemon, written as a string in the JSON file.
- specialAttack: String
    - The Sp. Attack stat of the Pokemon, written as a string in the JSON file.
- specialDefense: String
    - The Sp. Def stat of the Pokemon, written as a string in the JSON file.
- speed: String
    - The Speed stat of the Pokemon, written as a string in the JSON file.
- generation: String
    - The generation of the Pokemon, written as a string in the JSON file.
- legendary: String
    - The legendary status of the Pokemon, written as a string in the JSON file.
- sprite: String
    - The sprite animation of the Pokemon, written as a string in the JSON file.
- shiny_sprite: String
    - The shiny sprite animation of the Pokemon, written as a string in the JSON file.
- og_art: String
    - The original artwork of the Pokemon, written as a string in the JSON file.
- og_art_shiny: String
    - The shiny original artwork of the Pokemon, written as a string in the JSON file.

Below, you can see a screenshot of an example of the data.

![Screenshot of Data](./Images/dataEg.png?raw=true "Screenshot of Data")

---

---

## Installation
If you would like to use/take components of this API for your own project, follow the steps below:

- Install a Code Editor of your choice. I use [VS Code](https://code.visualstudio.com/)
- Fork and clone this repository
- Initialize the Node Package Manager by typing the following into your terminal:

```
npm i
```

- In order to create a localized version of this database, you must seed the data first! This will take the raw data (in JSON form) and reconfigure it through the Pokemon Model that I have created. Essentially, this will transform the data so that it has the specific parameters that you would like to see, in it's "prettier" form. For your convenience, I have made a script that does this for you. All you have to do is type the following into your terminal:

```
npm run db:seed
```

- In order to view the data, you must launch a server! For your convenience, I have created a script that does this for you (and updates live as you make changes to the js files). Run the **dev** script to initialize by typing the following into your terminal:
```
npm run dev
```
- The API will be visible in your local host 4614 after your launch it. You can copy the below code and paste it in your browser to view the data!
```
http://localhost:4614/pokemon
```
When you open up the root route, select "highlight anyway" in order to see it in "prettier" format. You will get a "warning" message, see below. 

![Screenshot of warning window](./Images/json.png?raw=true "Screenshot of warning window")


## How to Use

This link will navigate you to the [Pokemon API](https://pokemonapi-production-04ea.up.railway.app/pokemon).

When you open up the root route, select "highlight anyway" in order to see it in "prettier" format. 

![Screenshot of warning window](./Images/json.png?raw=true "Screenshot of warning window")


**NOTE:** The current API's files will only be (reasonably) viewable with a JSON viewer extension installed on your browser to display/"pretty" the large datasets in your browser. I use the [JSON Viewer Extension on Google Chrome.](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US)

---

---

## Routes

This RESTful API includes CRUD functionality with the routes defined below. Defined below:

- Create
    - Post - /pokemon
- Read
    - All pokemon - /pokemon
    - All legendary pokemon - /pokemon/legendary
    - Find pokemon by:
        - Dex Number - /pokemon/:dexnum
        - Type - /pokemon/type/:type
        - Generation - /pokemon/gen/:gen
- Update
    - Put - /pokemon/:id
- Delete
    - Delete - /pokemon/:id

In order to perform any CRUD functionality, you must have an API platform. I use, and would recommend, [Postman](https://www.postman.com/).

### **Create** - Pokemon

In order to update a Pokemon, set the HTTP variable to POST. Then, select the "body" in the sub-menu. Select "raw" and change "TEXT" to JSON. Once this has been done, enter the information you wish to update in proper JSON format. See the image below for reference. 

![Screenshot of Creating a Pokemon](./Images/post.png?raw=true "Screenshot of Creating a Pokemon")

***Insert picture here***

### **Read** - Find All Legendary Pokemon

Finding all legendary pokemon is as simple as copying and pasting the below link.

```bash
https://pokemonapi-production-04ea.up.railway.app/pokemon/legendary
```

### **Read** - Find by Dex Number

Finding a specific Pokemon will require knowing the pokemon's Pokedex number. The link below will navigate you to the first pokemon, Bulbasaur. The "1" in the url can be changed to any Pokedex number (up to 721) and the page will display the Pokemon of interest and its stats. 

```
https://pokemonapi-production-04ea.up.railway.app/pokemon/1
```

### **Read** - Find by Type

Finding all pokemon of a specific type will require adding the route "/type/***type of interest***"

When searching by type, it will show all Pokemon with that type (whether it is their primary or secondary type). 

```
https://pokemonapi-production-04ea.up.railway.app/pokemon/type/Poison
```

### **Read** - Find by Generation

If you would like to find Pokemon based on the generation they are from, you can simply navigate to the route "/gen/***generation of interest***".

Below, is an example of finding all the 3rd gen pokemon. 

```
https://pokemonapi-production-04ea.up.railway.app/pokemon/gen/3
```

### **Update** - Pokemon

In order to update a Pokemon, set the HTTP variable to PUT. Then, select the "body" in the sub-menu. Select "raw" and change "TEXT" to JSON. Once this has been done, enter the information you wish to update in proper JSON format. See the image below for reference. 

![Screenshot of Updating a Pokemon](./Images/put.png?raw=true "Screenshot of Updating a Pokemon")

### **Delete** - Pokemon

If you would like delete a Pokemon, set the HTTP variable to be delete and then type in the Pokemon's ObjectId. If done successfully, you will see a message that reads "Pokemon Deleted!" See the image below.

![Screenshot of Deleting a Pokemon](./Images/delete.png?raw=true "Screenshot of Deleting a Pokemon")

---

---

## Contact Info

If you would like to conect with me, check out my [Portfolio](https://jsots.github.io/)! All my links can be found there. I hope you like my API and please let me know if you notice any errors/encounter any bugs. 