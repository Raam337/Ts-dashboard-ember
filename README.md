## Dashboard App

Allows to fetch data from database to display a list of addresses. 

## Development setup

- Start by `pnpm install`
- From the root folder, initialise database: `pnpm initDb`

## Starting

Launch Frontend and Backend in Dev mode: `pnpm run:dev`
- Access app at `http://localhost:5173/`
- Access server at `http://localhost:3000`

 Seed new test data if required: `pnpm prisma db seed`


## Testing

 Switch to `/backend` or `/frontend` folder and run `pnpm vitest run` to run tests.