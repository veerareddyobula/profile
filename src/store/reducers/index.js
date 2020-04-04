import { combineReducers } from "redux";
import { AsyncStore } from './_async-reducer.js';
import { DataTableStore } from './_data-table-reducer';
import { CategoriesStore } from './_categories-reducer';
import { PostStore } from './_post-reducer';
import { ConfigStore } from './_config-reducer';

export default combineReducers({
    AsyncStore, DataTableStore, CategoriesStore, PostStore, ConfigStore
});