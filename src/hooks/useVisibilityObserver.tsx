import { useEffect, useRef } from "react";
import useStateRef from "./useStateRef";

export default function useVisibilityObserver(rootMargin="0px") {

  const ref = useRef(null);
  const [visible, setVisible, visibleRef] = useStateRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isNowVisible = entry.isIntersecting;
        setVisible(isNowVisible)
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [rootMargin, ref]);

  return { ref, visible, visibleRef };
}