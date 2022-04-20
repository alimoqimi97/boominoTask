import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
    selectedVideo: {
        src: '',
        title: '',
    },
  },
  reducers: {
    toggleIsModalOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setSelectedVideo: (state,action) => {
        state.selectedVideo = action.payload;
    }
  },
})

export const { toggleIsModalOpen , setSelectedVideo } = modalSlice.actions

export default modalSlice.reducer;