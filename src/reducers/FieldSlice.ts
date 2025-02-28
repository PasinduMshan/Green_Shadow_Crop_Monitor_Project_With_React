import FieldModel from "../model/FieldModel.ts";
import axios from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState: FieldModel[] = [];

const api = axios.create({
    baseURL: "http://localhost:3001/",
})

export const saveField = createAsyncThunk(
    "field/saveField",
    async (field: FieldModel)=> {
        try {
            const response = await api.post('field/addField', field);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const getAllFields = createAsyncThunk(
    "field/getAllFields",
    async () => {
        try {
            const response = await api.get("field/getAllField");
            console.log("Fetched Fields:", response.data); // Debugging log
            return response.data;
        } catch (error) {
            console.error("Error fetching fields:", error);
            throw error;
        }
    }
)

export const deleteFieldFromBackend = createAsyncThunk(
    "field/deleteFieldFromBackend",
    async (fieldCode: string) => {
        try {
            console.log("delete field......")
            await api.delete(`field/deleteField/${fieldCode}`);
            return fieldCode; // Returning fieldCode to delete from the Redux state
        } catch (error) {
            console.error("Error deleting field:", error);
            throw error;
        }
    }
);

// Update field
export const updateField = createAsyncThunk(
    'field/updateField',
    async (updatedField: FieldModel) => {
        try {
            const response = await api.put(`field/updateField/${updatedField.fieldCode}`, updatedField);
            return response.data; // Return the updated field data
        } catch (error) {
            console.error("Error updating field:", error);
            throw error;
        }
    }
);

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        addField(state, action:PayloadAction<FieldModel>) {
            state.push(action.payload);
        },
        deleteField: (state, action: PayloadAction<string>) => {
            return state.filter(field => field.fieldCode !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveField.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(getAllFields.fulfilled, (state, action) => {
                return action.payload; // Replace state with fetched fields
            })
            .addCase(deleteFieldFromBackend.fulfilled, (state, action) => {
                return state.filter(field => field.fieldCode !== action.payload);
            })
            .addCase(updateField.fulfilled, (state, action) => {
                // Find and update the field in the state
                const updatedField = action.payload;
                const index = state.findIndex(field => field.fieldCode === updatedField.fieldCode);
                if (index !== -1) {
                    state[index] = updatedField; // Update the field
                }
            })
            .addCase(saveField.rejected, (state, action) => {
                console.error("Failed to save field:", action.error.message);
            })
            .addCase(saveField.pending, (state,action) => {
                console.error("Saving field...");
            });
    },
})

export const {addField, deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;