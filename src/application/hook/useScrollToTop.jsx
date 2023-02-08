import { useEffect } from "react";
import useIsMount from "./useIsMount";

const useScrollToTop = () => {
  const isMount = useIsMount();

  const scrollTop = () => {
    if (isMount) {
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    scrollTop();
  });
};

export default useScrollToTop;
