import React, { Dispatch } from "react"

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

export interface AppState {
  isMenuClosed: boolean
}

export interface Action {
  type: string,
  value?: any
}

export interface Context {
  state?: AppState,
  dispatch?: Dispatch<Action>
}