import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import UserModel from "../model/UserModel.ts";


const initialState = {
    jwt_token: null,
    refresh_token: null,
    email: null,
    isAuthenticated: false,
    loading: false,
    error: '',
}

const api = axios.create({
    baseURL: "http://localhost:3001/",
})

export const registerUser= createAsyncThunk(
    'user/register',
    async (user : UserModel)=>{
        try{
            const response = await api.post('/auth/register', {user},{withCredentials: true});
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user: UserModel) => {
        try {
            const response = await api.post('/auth/login', {
                email: user.userEmail,  // Directly send email and password
                password: user.userPassword
            }, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;  // Ensure that we throw the error for handling in the rejected case
        }
    }
)

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
            .addCase(loginUser.fulfilled, (state, action)=>{
                state.jwt_token = action.payload.accessToken;
                state.refresh_token = action.payload.refreshToken;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.pending,(state, action)=>{
                state.isAuthenticated = false;
            })
            .addCase(loginUser.rejected,(state, action)=>{
                state.error = action.payload as string;
                state.isAuthenticated = false;
            })
        builder
            .addCase(registerUser.fulfilled,(state, action)=>{
            })
            .addCase(registerUser.pending,(state, action)=>{
            })
            .addCase(registerUser.rejected,(state, action)=>{
                state.error = action.payload as string;
            });
    }
})

export default userSlice.reducer;