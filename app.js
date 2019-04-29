const redux = require('redux')

const initialState = {
    counter: 20
}

// Create A Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type == "INC_COUNTER"){
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type == "ADD_COUNTER"){
        return {
            ...state,
            counter: state.counter - action.value
        }
    } 
    return state
}


// Create Store
const store = redux.createStore(rootReducer)


// Create subscription
store.subscribe(() => {
    console.log("Subscribed:", store.getState())
})


// Get the Global State
console.log(store.getState())



//Dispatch Action Increment Counter
console.log("Dispatching INC_COUNTER action")
store.dispatch({
    type:"INC_COUNTER"
})

// Dispatch Action Add Counter
console.log('Dispatching ADD_COUNTER action')
store.dispatch({
    type:"ADD_COUNTER", value: 10
})