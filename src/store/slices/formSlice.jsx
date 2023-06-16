import {createSlice} from "@reduxjs/toolkit"
import { addCourses } from "./courseSlice"

const formSlice = createSlice({
    name:"form",
    initialState:{
        name:"",
        description:"",
        price:0,
    },

    reducers:{
        changeName:(state,aciton) => {
            state.name = aciton.payload
        },
        changeDescription:(state,aciton) => {
            state.description = aciton.payload
        },
        changePrice:(state,aciton) => {
            state.price = aciton.payload
        }
    },
    //coursesSlice'a göndereceğimiz değerler bittikten sonra biz formdaki değerleri resetlemek istiyoruz.Fakat değerler buradan değiştirildiği içi
    //buradan courseSlice durumunu izleyip onun üzerinden işlem yapmamız gerekir. bunu da extraReducer ile yaparız
    extraReducers(builder){
        //addCase'imizi atıp durum eklememiz gerekir.AddCourse bittikten sonra durumumuzu güncellememiz için
        builder.addCase(addCourses,(state)=>{
            state.name="",
            state.description="",
            state.price=0
        })
    }
})
export const {changeName,changeDescription,changePrice} = formSlice.actions;
export const formReducer= formSlice.reducer;