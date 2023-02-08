import {
  Children,
  cloneElement,
  isValidElement,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export function useIntersectingChildren(
  ref: MutableRefObject<Element | null>,
  children: ReactNode,
  options: IntersectionObserverInit = {}
) {
  const [intersectingChildren, setIntersectingChildren] = useState<Set<number>>(
    new Set()
  );

  const elements = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const element = useRef<HTMLElement | null>(null);

    function updateIntersectingChildren(
      prevIntersectingChildren: Set<number>,
      shouldAdd: boolean
    ): Set<number> {
      const newIntersectingChildren = new Set(prevIntersectingChildren);

      shouldAdd
        ? newIntersectingChildren.add(index)
        : newIntersectingChildren.delete(index);

      return new Set(Array.from(newIntersectingChildren).sort((a, b) => a - b));
    }

    function handleObserve(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        const { isIntersecting, intersectionRatio } = entry;

        setIntersectingChildren((prevIntersectingChildren) =>
          updateIntersectingChildren(
            prevIntersectingChildren,
            isIntersecting && intersectionRatio > 0.5
          )
        );
      });
    }

    useEffect(() => {
      const defaultOptions = {
        root: ref.current,
        threshold: 0,
      };

      const observer = new IntersectionObserver(handleObserve, {
        ...defaultOptions,
        ...options,
      });

      if (element.current) {
        observer.observe(element.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [ref, children]);

    return cloneElement(child as ReactElement, {
      ref: element,
      key: index,
    });
  });

  return {
    intersectingChildren,
    elements,
  };
}
