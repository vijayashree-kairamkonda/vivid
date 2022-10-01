import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../../components/navbar";
import { getBookmarks } from "./bookmarkSlice";
import { PostCard } from "../../components/postCard";

export const Bookmark = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { bookmarks, bookmarksLoader } = useSelector(
    (state) => state.bookmarks
  );

  useEffect(() => {
    dispatch(getBookmarks({ token }));
  }, [dispatch, token]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="wrapper">
          {!bookmarksLoader &&
            bookmarks
              .slice()
              .reverse()
              .map((post) => <PostCard data={post} />)}

          {bookmarks.length === 0 ? <div>NO BOOKMARKS</div> : null}
        </div>
      </div>
    </>
  );
};
