import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name : "movies",
    initialState:{
        popularmovies: null,
        nowplayingmovies:null,
        topRated : null,
        upcoming:null,
        bannerdisplay:null,
        selectedmoviedetails:null,
        castcrewdetails : null,
        allbanners:null,
        recommendation : null,
        hindilanguagemoviedetails:null,
        Hindi_titleofmovie:null,
        HindiTagline:null,
        convertActorsdatatoHindi: null,
    }
    ,

    reducers:{
        addpopularmovies:(state,action) => {
            state.popularmovies = action.payload;
        },
        addNowplayingMovies:(state,action) => {

            state.nowplayingmovies = action.payload
        },
        addTopRated : (state,action) => {
            state.topRated = action.payload
        },
        addupcomingmovies : (state,action) => {
            state.upcoming = action.payload
        },
        addtobanner:(state,action) => {
            state.bannerdisplay = action.payload;
        },
        addselectedmoviedetailsinfo : (state,action) => {
            state.selectedmoviedetails = action.payload
        },
        addcastcrewdetails : (state,action) => {
            state.castcrewdetails = action.payload;
        },
        addallbanners : (state,action) => {

            state.allbanners = action.payload
        },
        addrecommendation : (state,action) => {

            state.recommendation= action.payload;
        },
        addhindilanguagemoviedetails : (state,action) => {
            state.hindilanguagemoviedetails = action.payload;
        },

        addHindititleofmovie:(state,action) => {
            state.Hindi_titleofmovie = action.payload;
        },
        addHindiTagline : (state,action) => {
            state.HindiTagline = action.payload
        },

        addActorsdatatoHindi : (state,action) => {

            state.convertActorsdatatoHindi = action.payload
        }
    }
})


export default MovieSlice.reducer;


export const {addpopularmovies , addNowplayingMovies , addTopRated , addupcomingmovies ,addtobanner , addselectedmoviedetailsinfo, addcastcrewdetails , addallbanners, addrecommendation , addhindilanguagemoviedetails ,addHindititleofmovie , addHindiTagline ,addActorsdatatoHindi} = MovieSlice.actions;