import {createSlice,nanoid} from "@reduxjs/toolkit"

const courseSlice = createSlice({
    name:"course",
    initialState:{
        searchTerm:"",
        data:[]
    },

    reducers:{
        addCourses:(state,action)=>{
            state.data.push({
                name:action.payload.name,
                description:action.payload.description,
                price:action.payload.price,
                id:nanoid()
            })
        },

        searchCourses:(state,aciton) => {
            state.searchTerm = aciton.payload;
        },

        deleteCourses:(state,action)=> {
            state.data = state.data.filter((x) => x.id !== action.payload);
        }
    }
})
export const {addCourses,deleteCourses,searchCourses} = courseSlice.actions;
export const courseReducer= courseSlice.reducer;