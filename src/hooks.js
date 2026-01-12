import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoursedata } from "./store/udemySlice";

export function useFetchCourseData() {
  const dispatch = useDispatch();
  const courseData = useSelector((store) => store.udemy.courses);

  async function getData() {
    if (courseData.length !== 0) return;
    let apiData = await fetch(
      `https://mocki.io/v1/be0822f2-200f-41ea-b333-aa465c3bb8e7`
    );
    let jsonData = await apiData.json();
    dispatch(setCoursedata(jsonData));
  }

  useEffect(() => {
    getData();
  }, []);

  return courseData;
}

export function useIsCourseExistInWishList(id) {
  const wishListData = useSelector((state) => state.udemy.wishlistCourse);
  const courseIdx = wishListData.findIndex((data) => data.id == id);
  return courseIdx == -1 ? false : true;
}
