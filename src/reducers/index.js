import { combineReducers } from "redux";

import data from "./fetchBloggerDataReducer";
import curd from './bloggerCurdReducer';

import usersCurd from './usersCurdReducer';
import usersData from './fetchUserDataReducer';

export default combineReducers({
  data, curd, usersCurd, usersData
});