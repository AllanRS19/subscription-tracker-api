## Project Overview

This backend API handles the authentication for the users using JWTs, connect to a MongoDB database, create models and schemas.

## Tech Stack

- Node.js
- Express.js
- MongoDB

## Features

- **Advanced Rate Limiting and Bot Protection**: with Arcjet that helps you secure the whole app.

- **Database Modeling**: Models and relationships using MongoDB & Mongoose.

- **JWT Authentication**: User CRUD operations and subscription management.

- **Global Error Handling**: Input validation and middleware integration.


## Getting Started

You can follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/AllanRS19/subscription-tracker-api.git
cd subscription-tracker-api
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```
You need to replace the placeholder values with your actual credentials once you sign up for these services.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5500](http://localhost:5500) in your browser or any HTTP client to test the project.

## <a name="snippets">Helpful Snippet</a>

<details>
<summary><code>Dummy JSON Data to try</code></summary>

```json
{
  "name": "Netflix Premium",
  "price": 13.99,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2026-02-23T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```

</details>