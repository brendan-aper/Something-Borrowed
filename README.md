# Something Borrowed

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to Something Borrowed, a platform designed to facilitate easy lending and borrowing of various items among users. This README provides an overview of the app's features, installation instructions, and usage guidelines.

## Table of Contents

- [Introduction](#Introduction)
- [Features](#Features)
- [Installation](#Installation)
- [Usage](#Usage)
  - [Account Creation and Sign In](#Account)
  - [Listing an Item](#Listing)
  - [Viewing Items](#Viewing)
  - [Favorites](#Favorites)
  - [Editing Listings](#Editing)
  - [My Listings and Lent Items](Mylistings)
- [Credits](#Credits)
- [License](#License)

## Introduction
<a id="Introduction">

**Something Borrowed** is a web application that enables users to list items they are willing to lend to others and also allows them to borrow items from fellow users. Users can create accounts, log in, list items with details like pictures, titles, descriptions, and categories. Once an item is listed, it becomes publicly visible for other users to view and potentially borrow.

## Features
<a id="Features"></a>

- User account creation and authentication
- Item listing with images, titles, descriptions, and categories
- Public listing of items available for borrowing
- Favorite items for quick access
- Edit and manage your own item listings
- Track whether your listed items are currently lent out
- Categorized items (e.g., camping, household, yard, kitchen, games)

## Installation
<a id="Installation"></a>

1. Clone the repository from GitHub:

```
  git clone https://github.com/brendan-aper/02-project.git
```

2. Navigate to the project directory:

```
  cd something-borrowed
```

3. Install the required dependencies:

```
npm install
```

4. Set up your environment variables

```
DB_NAME = "your db name"
DB_USER = "your db user name"
DB_PASSWORD = "your-password"
PORT = "your local port"
SESSION_SECRET = " session secret"
CLOUDINARY_API_KEY = "api key"
CLOUDINARY_API_SECRET = "api secret"
```

5. Start the application:

```
npm start
```

6. Access the app through your web browser at http://localhost:3001.

## Usage
<a id="Usage"></a>

### Account Creation and Sign In
<a id="Account"></a>

1. Visit the app's homepage.
2. Click on the "Sign Up" button to create a new account.
3. Fill in your details and submit the form.
4. Log in using your newly created credentials.

### Listing an Item
<a id="Listing"></a>

1. Log in to your account.
2. Navigate to the "Create Listing" section.
3. Provide a clear picture of the item, a descriptive title, a detailed description, and select a category.
4. Click "Submit" to make the item listing public.

### Viewing Items
<a id="Viewing"></a>

1. On the explore page, you'll find a list of items available for borrowing.
2. You can filter items by categories such as camping, household, yard, kitchen, and games.

### Favorites
<a id="Favorites"></a>

1. When viewing an item, you can mark it as a favorite by clicking the "Save" button.
2. Favorited items can be accessed quickly from the "favorites" tab.

### Editing Listings
<a id="Editing"></a>

1. Log in to your account.
2. Navigate to the "My Listings" section.
3. Find the item you want to edit and click "Edit."
4. Modify the item's details as needed and save the changes.

### My Listings and Lent Items
<a id="Mylistings"></a>

1. Under the "My Listings" tab, you can view a list of items you've listed.
2. You can mark whether a listed item is currently lent out or not.
3. This helps you keep track of your lent items and their status.

## Credits
<a id="Credits"></a>

The app was a joint effort between the four of us, feel free to follow us on Github.

[Brendan Aper](https://github.com/brendan-aper)

[Michie Willman](https://github.com/michiewillman)

[Noah Willis](https://github.com/willisnoah)

[Merel Jacobs](https://github.com/MerelJac)

## License
<a id="License"></a>

This project is licensed under the MIT License.

Copyright (c) 2023 brendan-aper

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.