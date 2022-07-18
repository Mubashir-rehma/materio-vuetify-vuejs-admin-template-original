// 👉 Dynamically import images
export const dynamicImgImport = (imageURL: string) => {
  const [img_path, ext] = imageURL.split('@/')[1].split('.')

  return new URL(`../../${img_path}.${ext}`, import.meta.url).href
}
