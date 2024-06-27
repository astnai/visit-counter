# Visitor Count with Theme Detection

This project demonstrates a simple visitor counter integrated with theme detection functionality using Next.js and Tailwind CSS.

## How It Works

### Visitor Counter

The visitor counter tracks and displays the number of visits. Unlike traditional implementations that use local storage to persist the count across sessions, this demo uses a global variable on the server to maintain the count. This means that the count is shared among all users and increments in real-time as new visitors come to the site.

### Theme Detection

The project dynamically switches between light and dark themes based on the user's system preferences. It listens for changes in the user's preferred color scheme and updates the theme accordingly.

## Why Use a Global Variable?

This demo uses a global variable on the server to keep the implementation simple and focused on demonstrating the concept. Using a global variable allows us to test and visualize the real-time increment of the visitor count without the complexity of setting up and managing a database.

**Note**: In a production environment, using a global variable like this is not recommended. Server restarts, scaling, or switching instances would result in the loss of the count. For a robust and persistent solution, integrating a database (such as MongoDB, PostgreSQL, etc.) to store the visitor count is advised.