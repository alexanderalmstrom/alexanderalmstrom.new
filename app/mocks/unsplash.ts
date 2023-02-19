export type RandomUnsplashImagesOptions = {
  total?: number;
  width?: number;
  height?: number;
  offset?: number;
};

export function randomUnsplashImages(
  options: RandomUnsplashImagesOptions = {}
) {
  const defaults = {
    total: 50,
    width: 2000,
    height: 2000,
    offset: 0,
  };
  const config = { ...defaults, ...options };
  const url = "https://source.unsplash.com/random";
  const offset = config.offset;
  const height = config.height;

  return [...Array(config.total)].map((_, index) => {
    const indexWithOffset = index + offset + 1;
    const src = `${url}/${config.width}x${height + index}`;
    const alt = `Image ${indexWithOffset}`;

    return { src, alt };
  });
}
