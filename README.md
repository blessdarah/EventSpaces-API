# EventSpaces-API
API Client for event spaces  application

## Migrations
1. **Creating migrations**
```bash
npx knex --knexfile knexfile.ts migrate:make migration_name
```
2. **Running migrations**
```bash
npx knex --knexfile knexfile.ts migrate:latest
```
