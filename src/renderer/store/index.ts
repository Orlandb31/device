import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/reducer';
import { generalReducer } from './general/reducer';
import { entityReducer } from './entity/reducer';
import { planningReducer } from './planning/reducer';
import { analyticsReducer } from './analytics/reducer';
import { devicesReducer } from './devices/reducer';
import { roomsReducer } from './rooms/reducer';
import { notificationsReducer } from './notifications/reducer';


const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

const rootReducer = combineReducers({
  auth: authReducer,
  general: generalReducer,
  entity: entityReducer,
  planning: planningReducer,
  analytics: analyticsReducer,
  devices: devicesReducer,
  rooms: roomsReducer,
  notifications: notificationsReducer
})

const reducer = (state: any, action: any) => {
  return rootReducer(state, action)
}


const initStore = () => {
  return configureStore({
    reducer: reducer,
    middleware: [thunkMiddleware, loggerMiddleware]
  })
}

export type RootState = ReturnType<typeof rootReducer>

export const wrapper = initStore
