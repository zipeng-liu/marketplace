# Description about the modules

## Authentication Module:

  * Description: This module focuses on user authentication and authorization functionalities. Focuses on ensuring that user authentication processes (email and password-based login) are secure, efficient, and user-friendly.
  * TDD Approach: Write tests for login, registration, and access control. Implement code to pass the tests. Refactor and optimize authentication logic. 

## Inventory Module:
  * Description: This module handles product management, including CRUD operations for products. Manages product listings, including checks for product availability (stock management) and ensuring that information is up-to-date and accurate.
  * TDD Approach: Define for adding, editing, and deleting products. Develop product management functionality based on failing tests with isProductInStock function to check if users add unavailable products, the test will be false.

## Adding Cart Module
  * Description: Enhances the shopping experience by allowing users to add items to their cart. It includes logic to prevent duplicates of the same item and manage cart updates efficiently.
  * TDD Approach: Write an addItem function and test if users add the same products in cart many times, the product will not be duplicated, it just increases the quantity of the product, and if the users add a different product, it should be added as normal.

## Search Module:
  * Description: Enables users to search for products within the marketplace. This module includes safeguards against empty search inputs, ensuring users receive relevant search feedback or suggestions.
  * TDD Approach: Write failing tests for search manipulation operations. Making sure user input matches the content we have on the web. Created a mock content for testing purposes, and continuously tested and refactor cart logic for robustness.

