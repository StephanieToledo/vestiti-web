import { combineReducers, createStore } from "redux";

const INITIAL_STATE = {
  data: []
};

const INITIAL_STATE_FAVORITE = {
  data: []
};

function products(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return { ...state, data: action.product };
		default:
			return state;
	}
}

function favorites(state = INITIAL_STATE_FAVORITE, action) {
	console.log(action);
	switch (action.type) {
		case 'ADD_FAVORITE':
			return { ...state, data: action.favorite };
		default:
			return state;
	}
}

const store = createStore(combineReducers({
	products,
	favorites
}));

export default store;