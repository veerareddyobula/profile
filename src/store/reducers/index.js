import { combineReducers } from "redux";
import { AsyncStore } from './_async-reducer.js';
import { DataTableStore } from './_data-table-reducer';
import { CategoriesStore } from './_categories-reducer';
import { YouTubeStore } from './_you-tube-reducer';
import { ConfigStore } from './_config-reducer';
import { ProfileStore } from './_profile-reducer';

export default combineReducers({
    AsyncStore, DataTableStore, CategoriesStore, YouTubeStore, ConfigStore, ProfileStore
});