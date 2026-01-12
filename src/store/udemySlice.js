import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  wishlistCourse: [],
};

export const udemySlice = createSlice({
  name: "udemy",
  initialState,
  reducers: {
    setCoursedata: (state, action) => {
      state.courses = action.payload;
    },
    addToWishListCourse: (state, action) => {
      const courseIndex = state.wishlistCourse.findIndex(
        (data) => data.id === action.payload
      );
      if (courseIndex !== -1) return;
      const course = state.courses.find(
        (data) => data.id === action.payload.id
      );
      state.wishlistCourse = state.wishlistCourse.push(course);
    },
    removeFromWishListCourse: (state, action) => {
      const courseIndex = state.wishlistCourse.findIndex(
        (data) => data.id === action.payload
      );
      if (courseIndex === -1) return;
      const course = state.courses.find((data) => data.id === action.payload);
      state.wishlistCourse = state.wishlistCourse.splice(courseIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCoursedata, addToWishListCourse, removeFromWishListCourse } =
  udemySlice.actions;

export default udemySlice.reducer;
