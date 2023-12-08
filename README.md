# SurgeryX Backend

## How to run locally

1. Download pocketbase from https://pocketbase.io/docs/ and keep pocketbase executable at `./pocketbase` (root dir of this repo)

2. `./pocketbase serve`

## Generate Types

```
npx pocketbase-typegen --db ./pb_data/data.db -o frontend/src/pocketbase-types.ts
```

nonsense conmmit