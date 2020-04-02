import { combineReducers } from "redux";
import { AsyncStore } from './_async-reducer.js';
import { DataTableStore } from './_data-table-reducer';
import { CategoriesStore } from './_categories-reducer';

export default combineReducers({
    AsyncStore, DataTableStore, CategoriesStore
});