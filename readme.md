# issue-pnpm-peer-dep-hoisting

See: https://github.com/pnpm/pnpm/issues/3441

# Run

```
node index.js
```

Note that when our webpack4 app runs, it uses our plugin which will always use webpack5 which breaks things because webpack needs to be a singleton.

# Projects

## hoist

## no-hoist

_.npmrc_

```
hoist=false
```


