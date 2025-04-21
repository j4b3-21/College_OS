import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch clubs from Flask API
export const fetchClubs = createAsyncThunk("clubs/fetchClubs", async () => {
    const response = await axios.get("http://localhost:5000/api/clubs");
    return response.data;
});

const clubSlice = createSlice({
    name: "clubs",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClubs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchClubs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchClubs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default clubSlice.reducer;
