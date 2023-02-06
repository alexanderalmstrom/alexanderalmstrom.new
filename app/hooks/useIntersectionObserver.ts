import { MutableRefObject, useEffect, useRef, useState } from "react";

interface IntersectionData {
  isIntersecting: Boolean;
  intersectionRatio: number;
}

export function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  options: IntersectionObserverInit = {},
  forward: boolean = true
) {
  const [element, setElement] = useState<Element | null>(null);
  const [
    {
      isIntersecting: elementIsIntersecting,
      intersectionRatio: elementIntersectionRatio,
    },
    setIntersectionData,
  ] = useState<IntersectionData>({
    isIntersecting: false,
    intersectionRatio: 0,
  });
  const observerRef = useRef<null | IntersectionObserver>(null);

  const destroy = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;

    destroy();

    const observer = (observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const { isIntersecting, intersectionRatio } = entry;

        if (!forward) {
          setIntersectionData({
            isIntersecting,
            intersectionRatio,
          });
        } else if (forward && !elementIsIntersecting && isIntersecting) {
          setIntersectionData({ isIntersecting, intersectionRatio });
          destroy();
        }
      },
      { ...options }
    ));

    observer.observe(element);

    return () => {
      destroy();
    };
  }, [element, options]);

  return {
    isIntersecting: elementIsIntersecting,
    intersectionRatio: elementIntersectionRatio,
  };
}
