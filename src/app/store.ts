import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "../components/counter/CounterSlice"
import { QuotesSlice } from "../components/Quotes/QuotesSlice";

const RootReducers = combineSlices( CounterSlice, QuotesSlice);

export const store = configureStore({
    reducer: RootReducers,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(QuotesSlice.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;