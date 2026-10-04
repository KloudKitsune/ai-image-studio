## AI Image Studio

AI Image Studio is a full-stack web application that lets users generate images using text prompts.

I built this project using React for the frontend and Express/Node.js for the backend. The backend connects to Cloudflare Workers AI to generate the images, which are then displayed in the application.

## Video Overview

https://drive.google.com/file/d/1wAfd9kChUI10PKyLTmLF0DZxoTS7GYMQ/view?usp=drive_link

## Try It Online

You can use the deployed application without installing anything:

Live Application:
https://kloudkitsune.github.io/ai-image-studio/

The frontend connects to the deployed Express backend automatically, so no Cloudflare account or API credentials are required when using the website.

## Features

- Generate AI images from text prompts
- Responsive image gallery
- Loading and error states
- Dark-themed UI
- Delete generated images
- Delete confirmation modal
- Image preview before deleting
- Close the modal with Cancel, clicking outside, or pressing Escape
- Responsive layout for desktop and mobile

## Technologies

- React
- Vite
- JavaScript
- CSS
- Node.js
- Express
- Cloudflare Workers AI
- FLUX.1 Schnell

## Getting Started

There are two ways to use AI Image Studio.

## Option 1 - Use the Deployed Website

The easiest way to use the application is through the live website:

https://kloudkitsune.github.io/ai-image-studio/

- No installation or configuration is required.

## Option 2 - Run the Project Locally

Running the project locally allows you to view and modify both the frontend and backend.

# Requirements

You'll need:

- Node.js
- npm
- A Cloudflare account
- A Cloudflare API token with access to Workers AI

# Clone the Project

git clone https://github.com/KloudKitsune/ai-image-studio.git

cd ai-image-studio

## Install Dependencies

From the main project folder:

npm install

Then move into the backend folder:

cd backend
npm install
Environment Variables

The backend uses environment variables for the Cloudflare credentials.

Inside the backend folder, create a file called:

.env

Add:

CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token

Replace these values with your own Cloudflare account ID and API token.

Do not commit the .env file to GitHub. Your API token should remain private.

## Running the Project

The frontend and backend run separately, so you'll need two terminals.

## Terminal 1 - Backend

From the project folder:

cd backend
node server.js

The backend will run on:

http://localhost:5000

You should see:

Server running on http://localhost:5000

## Terminal 2 - Frontend

Open another terminal and go back to the main project folder:

cd ..
npm run dev

Vite will start the frontend. Open the URL shown in the terminal.

The frontend will run on:

http://localhost:3000

## How It Works

The basic flow of the application is:

User enters a prompt
↓
React sends the prompt to the Express backend
↓
Express sends the prompt to Cloudflare Workers AI
↓
Cloudflare generates the image
↓
The backend sends the image back to React
↓
React displays the image in the gallery

The Cloudflare API credentials are kept on the backend instead of being exposed to the frontend.

## API

# Generate an Image

## POST

/api/images

# Example request:

{
"prompt": "A futuristic city at night with neon lights"
}

The backend sends the prompt to Cloudflare Workers AI and returns the generated image as Base64 data.

## Known Limitations

Images are currently stored in the React application's state.

This means generated images will disappear if the page is refreshed. There is currently no database or user authentication.

This was intentional for the current version of the project so I could focus on the core image generation functionality and the frontend/backend integration.

## Future Improvements

- Save generated images to a database
- Add user accounts and authentication
- Allow users to download generated images
- Add image generation history
- Support additional AI models
- Add more image generation options
- Deploy the application to production

## Author

Corban Smith

Built as a software engineering project using React, Express, Node.js, and Cloudflare Workers AI.
