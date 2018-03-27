# Enterprise-Dashboard

## Proposal

### Problem Statement
Client needs an effective way to update, add and delete various types of product categories and inventory items regarding their Name, Category ID and Inventory Count as well as clearly chart out the breakdown of inventory levels across the various product categories.

### Business Problem
The Enterprise-Dashborad application is able to solve the problem of giving the client a transparent look into their inventory levels by providing a means to seemlessly update necessary data pertaining to product categories and inventory counts as well as provide a visual representation of inventory breakdown.

### Technical Requirements
* Java
* Spring
* Docker
* React
* React Charts


### Monolithic Solution
The current monolithic solution is creating a postgres database and storing all relevant tables (currently Inventory and Categories). The current solution proves to be scalable and efficient.

### Breakdown of Running the Application
To run the application, the user must run a 'docker-compose up' command in the terminal for the root directory. The user must also concurrently run a 'yarn start' command on the front end react directory. 

### Making a Monolithic Service Scalable
When a monothlic structure grows with serives, code may become duplicate and difficulty for the developer to understand. More time may be required to fix bugs or bring new implementation and the chances of user error may raise significantly. For best practice when considering making monolithic service scalable, microservices may bring about the best solution.


### Pros/Cons of Implementing a Monolith
Implementing a monolithic problem can be considered less complex and more straight forward, but it can lead to more convoluted code and more room for error. For smaller applications set up like the Enterprise Dashboard, a monothilic structure may be the best route because at the smaller scale it can be easier to implement. With more services added to the application, it may be best to look into the use of microservices.


### Microservices Solution
As the services of the application continue to grow, it becomes more essential to have the capability of updating each service independently. Microservices allows for multiple use databases so that developmental teams can work to update each independent service without affect the work of others. Microservices allows the better user of different technologies and makes it easier to debug errors that may arise within each service.


### External Case Study
Netflix is a leading example of a company that transitioned from a traditional development model with 100 engineers producing a monolithic DVD‑rental application to a microservices architecture with many small teams responsible for the end‑to‑end development of hundreds of microservices that work together to stream digital entertainment to millions of Netflix customers every day.



