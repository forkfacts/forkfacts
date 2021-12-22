/**
 * The purpose is to use `-` as separator in the URL naming scheme.
 * This is important for SEO purposes
 * Watch https://www.youtube.com/watch?v=AQcSFsQyct8 to learn more
 * @param name
 */
export const spaceToDashes = (name: string) =>
  name.toLowerCase().replace(/[^\w]+/g, "-")
