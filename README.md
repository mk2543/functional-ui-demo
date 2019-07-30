# Demo contents

## Functional programming principles

- declarative code
- pure functions without side effects
- functions as data = higher order functions
- function composition
- referential transparency
- algebraic data types
- immutability

## React

- React functional stateless component: fn(props) => UI
- presentational vs container components

## Redux

- Redux state = event sourcing = fn(state, action) => new state
- Redux state = one source of truth, in memory frontend DB 
- unidirectional data flow

```

                   _______ Action _______ 
                  |                      |
                  v                      | 
    Action ---> Dispatcher --> Store --> View

```   

### actions

- examples of domain types + action types = `domain` directory
- action creators => `actions` directory

### actions causing side effects

- `saga` directory
- `redux-saga` library
- generators
- side effects as data

### reducers

- `reducers` directory
- reducer = fn(state, action) => state
- state slices = each reducer responsible for one slice
- reducer composition
- actions handled by multiple reducers
- Typescript: discriminating unions, ReturnType

### connecting to react

- container components
- `react-redux` library = `connect` function
- higher order components
- map state to props & map dispatch to props

### selectors

- `reselect` library
- selector memoization
- selectors as an read API of the state = selector composition and reusability

### state normalization

- `normalizr` library
- `api` directory
- entities

### how it all fits together

- `store` directory
- creating a store
- one root reducer
- sagaMiddleware.run()
- `index.tsx` - dispatching the first action
- `App.tsx` - `<Provider>` from `redux-react`
 
### Time travel debugging

# Learning materials

https://github.com/markerikson/react-redux-links









