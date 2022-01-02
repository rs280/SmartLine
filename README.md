# SmartQueue

## Inspiration

A study found that grocery store lines are packed with people
Most people in these lines are not following 6 feet social distancing. 
Cashiers in these lines feel uncomfortable, and many customers are not taking it seriously. 
In a Massachusetts grocery store 20% of workers tested positive for COVID. 
The new COVID variant Omicron spreads extremely fast, even amongst vaccinated adults. 


## What it does

Customers type their name into the website which they can access from a QR code in the store, and they will receive a ID.
As customers enter their names, a digital queue forms
Customers will be able to see ahead of time how many people are in front of them, and can plan their trip the grocery story accordingly. 
When a cashier is done with a customer, they use the admin site to notify the next person in the queue to come to the line. 
This will make lines more organized, and helps with social distancing. 

## How we built it

We use a react frontend, and connect it to a backend using websockets

## Challenges we ran into

We were originally going to make a Flutter app for this project, but Flutter did not work on our computers. Connecting the backend and frontend was challenging.

## Accomplishments that we're proud of

We created a MVP

## What we learned

How websockets work. Time management

## What's next for Smart Line

- Make this an app using flutter. 
- Adding a domain. 
- Adding predicted wait time features based off of amount of customers in queue.
- Adding a chat box, where customers can ask workers questions through the website. 
- Sending users notifications when lines are short at their favorite stores.
- Making stores have their own queues 

## Usage example
### Customer view
1. Customer sets name by clicking on small pencil icon
2. Use the button at the bottom to easily join the queue
!(Screenshot1.png)
### Admin view
1. Admin can see all Customers currently in the queue
2. First, set your meeting link by clicking on the pencil icon
3. To notify a Customer , click the bell icon
4. To remove a Customer, simply click on the red X icon next to their name
!(Screenshot2.png)

## Setup
1. Install nodejs and yarn
2. Clone the repo
3. Run the backend (I recommend running it in a screen session)
   1. `cd backend/`
   2. `node index.js`
4. Build the frontend/webapp
   1. `cd webapp`
   2. Set the address of the backend websocket in `webapp/src/App.jsx`
   3. `yarn build`
   4. Point your prefered static hosting app to the `webapp/build/` directory or move the build directory to your static hosting directory (common location: `/var/www/html/`)


