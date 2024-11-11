# Title

Database Decision Change

## Context

Choosing database approach towards the AML system again after careful reevaluation.

## Problem Statement 

Current chosen AML database is lacks security and the data is not consistent   

## Considered Options 

Considered choosing to have separate databases for each service or having a single shared database for all the services. 

## Decision Outcome Confirmation 

After reevaluating the recent chosen decision for the database, the team has decided it’s more convenient and scalable to choose a single shared database instead of separate databases. Now confirmed to have chosen a single shared database. 

## Consequences  

1. **Data integrity and consistency are easier to maintain. Changes are immediately reflected across all services, reducing the risk of discrepancies.**

2. **Enhanced security measures must be implemented to protect the centralized database, as it holds all critical data, making it a high-priority target for potential threats.**

3. **Data access and reporting are simplified, allowing for real-time updates and comprehensive insights across the entire library system, improving decision-making and operational efficiency.**

## Pros 

1. **Centralized Data Management:** All library data (books, users, transactions, etc.) is stored in one place, making it easier to manage, back up, and maintain. 

2. **Simplified Maintenance:** A single database means only one system to manage, update, and secure, reducing complexity in operations and maintenance 

3. **Reduced Cost:** Fewer resources are required to run and manage one database, reducing the cost of infrastructure, licenses, and support. 


## Cons 

1. **If the database experiences downtime or corruption, the entire library management system can be disrupted, impacting all users and operations.**

2. **Since all the data is centralized into one database, a single breach can compromise all sensitive information. If not properly secured, this can be a major vulnerability.**

3. **When updates or maintenance are performed on the database, it may require the entire system to be temporarily unavailable, affecting all users.**


## Confirmations 

We have decided to implement a single shared database for the advanced library management system to ensure centralized data management and consistent access across all users. This approach simplifies maintenance and reduces costs while maintaining data integrity. 

## Pros and Cons of Options 

### Separate Databases 

**Pros**

1. **Independence:** Each service has its database which can be evolved separately including using different technologies if needed  

2. **Fault isolation:** Issues related one database won’t affect the other functional parts of the system.  

3. **Scalability:** Each service can be scaling its database according to its use case. 

 

**Cons**

1. **Increase Cost:** Operating several databases can increase operational costs. (i.e. Storage, maintenance and importantly licencing) 

2. **Quarry time:** While using multiple databases has its own benefits, it increases quarry times especially while querying data over 

 








 
