'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://buechertraum.elvwebhub.com/${src}?w=${width}&q=${quality || 75}`
}