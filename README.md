# bamazon
Amazon-like Node.js app + mySQL.

NPM Dependencies: mysql, inquirer

## Basic steps:
    1) Create a .sql file with seeds to populate the "bamazon" database. 

    2) In your .js file, connect to the bamazon database and perform queries in order to check the user's activity with the database information. Ex: Is the user's stock request available or does it exceed the bamazon stock? See screenshots for reference.

    3) Open the app in bash/terminal to play. The steps of the game are detailed below.
        a) Show the list of items available. Include the id, item name, and price.
        b) Prompt the user to input the id of the item they desire + the amount they wish to purchase.
        c) Check the user's requests with the database capacity, and return a message depending on the result. 
            i) If the order may be placed, calculate the price and let the user know their order was successfully placed at the calculated price. Update the database to show this difference in stock.
            ii) If the order request is too great, let the user know their order cannot be placed. 
        d) Start at step 'a' again to keep the app going.
    
    See screenshots for reference.

Happy coding!
