## MonsterDex API

This is an API to give an inventory of monsters (digimons).

Here are the request methods:

`/digimons` - GET
- Returns a list of all available digimon (monsters)

`/digimons/:id` - GET
- Returns a single monster by its id
- example response from `/digimons/5`:
```
    {
    "id": "5",
    "name": "Impmon",
    "type": "Mini Devil",
    "level": "rookie",
    "attribute": "virus",
    "image": "https://wikimon.net/images/0/0b/Impmon.jpg"
    }
```

`/digimons` - POST
- Accepts a `monster` object
- example object:

```
{
    "id": "5",
    "name": "Impmon",
    "type": "Mini Devil",
    "level": "rookie",
    "attribute": "virus",
    "image": "https://wikimon.net/images/0/0b/Impmon.jpg"
    }
```