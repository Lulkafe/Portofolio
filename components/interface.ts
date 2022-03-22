export interface ImageInfo {
  src: string,
  height: number,
  width: number 
  alt: string
}

export interface ProjectInfo {
  img: ImageInfo,
  description: {
    header: string,
    main: string
    keywords: string []
  },
  url: {
    website?: string,
    github?: string
  }
}