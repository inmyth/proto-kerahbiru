# kerahbiru-proto

Kerahbiru frontend prototype on Vue.
Should have skeletons:
- general layout
- [x] proto routes
- [x] proto http connection
- [x] jwt store and retrieve
- [x] proto login 
- ws handling
- [x] dev api http server
- [x] dev api ws server
- [x] replaced implicit localStorage access with store getters in routes

Vuex
- Vuex store contains states (logged in, loggin in, error msg accross pages)
- localStorage contains jwt token ("user")

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
