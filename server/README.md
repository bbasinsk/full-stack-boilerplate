# Backend

## Project Structure

```tree
.
├── dist                    # Compiled files
├── docs                    # Documentation files
├── src                     # Source files
│   ├── routes              # Defines /api routes
│   ├── controllers         # Defines transformations that occur between model and route
│   ├── models              # Defines models of data from the db
│   └── middleware          # Add middleware here
├── db                      # Sequelize migrations / seeds
└── README.md
```

## Development

I would recommend using [VSCode](https://code.visualstudio.com/) for development.

Recommended Extensions:

- Eslint
- Prettier

While in `/server/`, use `npm run dev` to start the server.

## Data

Run all migrations (create all tables)

```bash
node_modules/.bin/sequelize db:migrate
```

Run all seeds (fill tables with mock data)

```bash
node_modules/.bin/sequelize db:seed:all
```

Create a new table (also creates model in /src/models/)

```bash
node_modules/.bin/sequelize model:generate --name Post --attributes content:string
```

### Model Definition

```js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.TEXT
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
```

## Getting Started

```sh
cd server

# Install dependencies
npm install

# Start development live-reload server
npm run dev

# Start production server:
npm start
```

## Docker Support

```sh
cd server

# Build your docker
docker build -t username/backend .
#                ^         ^     ^
#              tag   tag name    Dockerfile location

# run your docker
docker run -p 8080:8080 username/backend
#                 ^                ^
#          bind the port         container tag
#          to your host
#          machine port
```
