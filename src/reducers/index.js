import { combineReducers } from "redux";

import data from "./fetchBloggerDataReducer";
import curd from './bloggerCurdReducer';

import usersCurd from './usersCurdReducer';
import usersData from './fetchUserDataReducer';

import {frontEndLoginData} from './../front-end-preparation/actions/login-container-actions'

export default combineReducers({
  data, curd, usersCurd, usersData, frontEndLoginData
});