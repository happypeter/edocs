## DIST error

> Cannot read property 'DIST' of undefined

Just had the same error , during `npm run build`

Fixed with

```
rm -r node_modules
npm i
```
