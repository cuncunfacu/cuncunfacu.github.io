import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import siteDataReducer from './siteDataSlice';

export const store = configureStore({
    reducer: {
        siteData: siteDataReducer
    },
    });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;