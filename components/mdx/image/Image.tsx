import NextImage from "next/image";
import { memo } from "react";

import styles from "./image.module.scss";

interface ImageProps {
  readonly src: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
}

export const Image = memo<ImageProps>(({ src, alt = "", width, height }) => (
  <figure className={styles.wrapper}>
    <NextImage
      className={styles.image}
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
    />
    {alt ? <figcaption className={styles.caption}>{alt}</figcaption> : null}
  </figure>
));

Image.displayName = "Image";
