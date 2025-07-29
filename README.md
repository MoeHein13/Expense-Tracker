# Expense Tracker (TypeScript Version)

This is a responsive expense tracking app built with TypeScript, HTML, and CSS. The project is based on a YouTube tutorial by Codesistency, but recreated from scratch using TypeScript for improved type safety and structure.

Video Tutorial Reference:  
https://www.youtube.com/watch?v=kAiX0itnonM&t=9989s

## Features

- Add and delete income/expense transactions
- Live balance, income, and expense summary
- Scrollable transaction list
- Data stored in LocalStorage
- Responsive layout for desktop and mobile
- Written entirely in TypeScript

## Tech Stack

- TypeScript
- HTML
- CSS
- LocalStorage API
- Vite

## Differences from the Original

- Rewritten entirely in TypeScript
- DOM access is typed using HTML-specific types
- Event handling is done using addEventListener instead of inline HTML attributes
- Improved safety with localStorage parsing and state management
- Uses modern module system (type="module") instead of global scope functions

Original JavaScript tutorial: https://www.youtube.com/watch?v=kAiX0itnonM

## Folder Structure

/src  
main.ts – TypeScript file with all logic  
style.css – Custom styles  
index.html – App entry point

## Getting Started

1. Clone the repository:

   git clone https://github.com/your-username/expense-tracker-ts.git  
   cd expense-tracker-ts

2. Install dependencies (if using Vite or a dev server):

   npm install

3. Start the development server:

   npm run dev

Or open index.html directly in your browser if you're not using a bundler.

## Deployment

This project can be run locally by opening index.html in a browser, or using a development server like Vite.

## License

This project is for learning and personal portfolio use. Design and layout are based on the Codesistency YouTube tutorial.

## Acknowledgements

Codesistency YouTube Channel: https://www.youtube.com/@Codesistency  
Google Fonts - Poppins: https://fonts.google.com/specimen/Poppins
