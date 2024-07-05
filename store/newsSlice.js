import { createSlice } from '@reduxjs/toolkit'

export const newsSlice = createSlice({
    name: 'News',
    initialState: {
        allNews: [],
    },
    reducers: {
        setNews: (state, action) => {
            state.allNews = [...state.allNews, ...action.payload]
        },
        setLike: (state, action) => {
            state.allNews[action.payload].like += 1
        },
        setComment: (state, action) => {
            state.allNews[action.payload].comment += 1
        },
        setShare: (state, action) => {
            state.allNews[action.payload].share += 1
        },
        addNewNews: (state, action) => {
             state.allNews.unshift(action.payload) 
        }

    },
})

export const { setNews, setLike, setComment, setShare, addNewNews } = newsSlice.actions

export default newsSlice.reducer