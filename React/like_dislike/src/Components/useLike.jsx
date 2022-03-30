import { useState } from "react";

const useLike = () => {
  let [like, setLike] = useState(false);
  let [unlike, setUnlike] = useState(false);
  const handleLike = () => {
    setLike(!like);
    setUnlike(false);
  };
  const handleUnLike = () => {
    setUnlike(!unlike);
    setLike(false);
  };
  return { like, handleLike, unlike, handleUnLike };
};

export default useLike;
