export const random = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min)) + min;

export const unsplashUrl = (width: number, height: number): string =>
  `https://source.unsplash.com/random/${width}x${height}`;

export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}`;

export const randomImage = (): string =>
  unsplashUrl(random(800, 1000), random(800, 1000));
