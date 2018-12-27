# Frontend

## Project Structure

```tree
.
├── dist                    # Compiled app
├── src                     # Source files
│   ├── actions             # Defines functions that create, read, or update data on the backend.
│   ├── components          # Defines react components
│   ├── models              # Defines models of data that is used in the frontend.
│   └── pages               # Defines page-level component for each route
└── README.md
```

## Development

Start dev server (with hot reloading)

```bash
npm run dev
```

## Docker Support

```sh
cd frontend

# Build your docker
docker build -t username/frontend .
#                ^         ^      ^
#              tag   tag name    Dockerfile location

# run your docker
docker run -p 80:80 username/frontend
#               ^                ^
#       bind the port         container tag
#       to your host
#       machine port
```
