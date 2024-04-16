const redux = require('redux');

const counterReducer = (state={counter : 0}, action) =>{
    if(action.type === 'increment'){
        return {
            counter : state.counter + 2,
        };
    }

    if(action.type === 'decrement'){
        return {
            counter : state.counter - 2,
        };
    }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () =>{
    const letestState = store.getState();
    console.log(letestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type : 'increment'});
store.dispatch({type : 'decrement'});