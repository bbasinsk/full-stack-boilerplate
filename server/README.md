# SAD Backend

## Status

[![CircleCI](https://circleci.com/gh/bbasinsk/capstone-backend/tree/master.svg?style=svg)](https://circleci.com/gh/bbasinsk/capstone-backend/tree/master)

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

## Database Stuff

Run all migrations

```bash
node_modules/.bin/sequelize db:migrate
```

Run all seeds

```bash
node_modules/.bin/sequelize db:seed:all
```

## Getting Started

```sh
# clone it
git clone https://github.com/bbasinsk/capstone-backend.git
cd capstone-backend

# Install dependencies
npm install

# Start development live-reload server
npm run dev

# Start production server:
npm start
```

## Docker Support

```sh
cd capstone-backend

# Build your docker
docker build -t bbasinsk/capstone-backend .
#            ^      ^                     ^
#          tag      tag name       Dockerfile location

# run your docker
docker run -p 8080:8080 bbasinsk/capstone-backend
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port
```
