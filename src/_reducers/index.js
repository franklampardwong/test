import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import {gridReducer} from './grid.reducer';
import {gridTitleReducer} from './gridTitle.Reducer';

const rootReducer = combineReducers({
  gridReducer,
  authentication,
  registration,
  users,
  alert,
  gridTitleReducer
});

export default rootReducer;