import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoursedata } from "./store/udemySlice";
import { courseData as staticCourseData } from "./data/courseData";

// 🔥 Fetch Courses (Now Using Static Data)
export function useFetchCourseData() {
  const dispatch = useDispatch();
  const storedCourses = useSelector((store) => store.udemy.courses);

  useEffect(() => {
    if (storedCourses.length === 0) {
      dispatch(setCoursedata(staticCourseData));
    }
  }, [dispatch, storedCourses]);

  return storedCourses;
}

// 🔥 Check Wishlist
export function useIsCourseExistInWishList(id) {
  const wishListData = useSelector((state) => state.udemy.wishlistCourse);
  return wishListData.some((data) => data.id === id);
}

// 🔥 Check Cart
export function useIsCourseExistInCart(id) {
  const cartData = useSelector((state) => state.udemy.cartCourses);
  return cartData.some((data) => data.id === id);
}
