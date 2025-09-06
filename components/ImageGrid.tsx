'use client'

import { useEffect, useState } from 'react'

const ImageGrid = () => {
  const [scrollOffset, setScrollOffset] = useState(0)

  const images = [
    {
      src: "https://framerusercontent.com/images/hIEIUUVfOSYwql0k9pshKsQUs.png?scale-down-to=512",
      alt: "Design project 1",
      bgColor: "from-blue-400 to-blue-600"
    },
    {
      src: "https://framerusercontent.com/images/5sRcYaHNFNYrN2OpHMqMUbKMc.jpg?scale-down-to=512",
      alt: "Design project 2", 
      bgColor: "from-green-400 to-green-600"
    },
    {
      src: "https://framerusercontent.com/images/eg1HIqQSB3Cgo54Vyj1pQNbcJU.jpg?scale-down-to=512",
      alt: "Design project 3",
      bgColor: "from-[#ff4f01] to-[#e04501]"
    },
    {
      src: "https://framerusercontent.com/images/Uvhg2vprK9mnIzGB5JPmlcLEwjQ.jpg?scale-down-to=512",
      alt: "Design project 4",
      bgColor: "from-purple-400 to-purple-600"
    },
    {
      src: "https://framerusercontent.com/images/VGbN2b2vju02qAC3g7Tqi9U6Vg.jpg?scale-down-to=512",
      alt: "Design project 5",
      bgColor: "from-yellow-400 to-orange-500"
    },
    {
      src: "https://framerusercontent.com/images/hBN5exDMfqocxGPVkRvGjdTZ5uI.jpg?scale-down-to=512",
      alt: "Design project 6",
      bgColor: "from-pink-400 to-pink-600"
    },
    {
      src: "https://framerusercontent.com/images/mghWFBJhoPu4RpsQHzmgny0HuU.jpg?scale-down-to=512",
      alt: "Design project 7",
      bgColor: "from-indigo-400 to-indigo-600"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Calculate scroll offset to reveal hidden images with very little scroll
      // Much more sensitive - starts revealing immediately and completes quickly
      const maxOffset = 1100 // Distance to fully reveal hidden images
      const scrollThreshold = 200 // Only need to scroll 200px to fully reveal
      const offset = Math.min((scrollY / scrollThreshold) * maxOffset, maxOffset)
      setScrollOffset(offset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Image Grid */}
      <div className="w-full px-4">
        <div 
          className="flex gap-6 md:gap-6 transition-transform duration-100 ease-out"
          style={{
            transform: `translateX(-${scrollOffset}px)`,
            width: 'calc(100% + 700px)' // Extra width to accommodate larger images and hidden ones
          }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${image.bgColor} rounded-3xl aspect-square overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-100 flex-shrink-0`}
              style={{ 
                width: '400px', // Much larger fixed width
                height: '280px' // Match height to maintain square aspect
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGrid