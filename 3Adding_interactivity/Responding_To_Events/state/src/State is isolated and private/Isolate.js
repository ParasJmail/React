import GalleryIsolate from "./GalleryIsolate";

import React from 'react'

const Isolate = () => {
  return (
    <div>
        <h1>State is isolated and private</h1>
        <GalleryIsolate />
        <GalleryIsolate />
    </div>
  )
}

export default Isolate
