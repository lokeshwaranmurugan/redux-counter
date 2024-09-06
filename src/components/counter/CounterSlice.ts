import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface counterState {
    value: number;
    isLoading: boolean;
}

const initialState: counterState = {
    value: 0,
    isLoading: false
}


export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByInput: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value += action.payload;
                state.isLoading = false;
            })
    },
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsyc",
    async (amount: number) => {
        await new Promise((resolve)=>setTimeout(resolve,1000));
        return amount;
    }
)
export const { increment, decrement, incrementByInput} = CounterSlice.actions;
