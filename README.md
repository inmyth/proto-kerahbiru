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
- ~[x]replaced implicit localStorage access with store getters in routes~ cannot be done, reverted back see https://www.digitalocean.com/community/tutorials/how-to-set-up-vue-js-authentication-and-route-handling-using-vue-router

Vuex
- Vuex store contains states (logged in, loggin in, error msg accross pages)
- localStorage contains jwt token ("user")

Secure websocket
- https://christian-schneider.net/CrossSiteWebSocketHijacking.html
- https://security.stackexchange.com/questions/115716/is-the-origin-header-really-useful-for-securing-a-websocket
- check Origin header
- send and check token on handshake

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
