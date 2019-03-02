// import { combineReducers } from 'redux'

const initialState = {
    todos:[],
    posts:[],
    cart:[],
}


function todosApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CART':
            //console.log(action);
            return {
                cart: [
                    ...state.cart,
                    {
                        productId:action.cart.id,
                        productName: action.cart.name,
                        productImage: action.cart.image,

                    }]
            }

        case 'REMOVE_TODO':
            return ''
        default:
            return state
    }
}

// const todoApp = combineReducers({
//     visibilityFilter,
//     todos
// })

export default todosApp ;