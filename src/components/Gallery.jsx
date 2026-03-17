import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Pause,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Gallery Media - Your existing data stays the same
  const galleryMedia = [
    {
      id: 1,
      src: "/gallery/gallery-1.mp4",
      alt: "Crowd Energy",
      category: "crowd",
      type: "video",
      thumbnail: "/gallery/gallery-1-thumb.jpg",
    },
    {
      id: 2,
      src: "/gallery/gallery-2.mp4",
      alt: "Crowd Energy",
      category: "crowd",
      type: "video",
      thumbnail: "/gallery/gallery-2-thumb.jpg",
    },
    {
      id: 3,
      src: "/gallery/gallery-3.mp4",
      alt: "Crowd Energy",
      category: "crowd",
      type: "video",
      thumbnail: "/gallery/gallery-3-thumb.jpg",
    },
    {
      id: 4,
      src: "/gallery/gallery-4.mp4",
      alt: "Festival Stage",
      category: "performance",
      type: "video",
      thumbnail: "/gallery/gallery-4-thumb.jpg",
    },
    {
      id: 5,
      src: "/gallery/gallery-5.mp4",
      alt: "Club Night",
      category: "crowd",
      type: "video",
      thumbnail: "/gallery/gallery-5-thumb.jpg",
    },
    {
      id: 6,
      src: "/gallery/gallery-6.mp4",
      alt: "Crowd Energy",
      category: "crowd",
      type: "video",
      thumbnail: "/gallery/gallery-6-thumb.jpg",
    },
    {
      id: 7,
      src: "/gallery/gallery-7.mp4",
      alt: "Audience Dancing",
      category: "crowd",
      type: "video",
      thumbnail: "/gallery/gallery-7-thumb.jpg",
    },
    {
      id: 8,
      src: "/gallery/gallery-8.mp4",
      alt: "Crowd Energy",
      category: "crowd",
      type: "video",
      thumbnail: "/gallery/gallery-8-thumb.jpg",
    },
    {
      id: 9,
      src: "/gallery/gallery-9.mp4",
      alt: "Crowd Energy",
      category: "crowd",
      type: "video",
      thumbnail: "/gallery/gallery-9-thumb.jpg",
    },
    {
      id: 10,
      src: "/gallery/gallery-10.mp4",
      alt: "Sunset Set",
      category: "performance",
      type: "video",
      thumbnail: "/gallery/gallery-10-thumb.jpg",
    },
    {
      id: 11,
      src: "/gallery/gallery-11.jpg",
      alt: "Club Atmosphere",
      category: "crowd",
      type: "image",
    },
    {
      id: 12,
      src: "/gallery/gallery-12.jpg",
      alt: "Tour Moment",
      category: "performance",
      type: "image",
    },
    {
      id: 13,
      src: "/gallery/gallery-13.jpg",
      alt: "Behind Decks",
      category: "performance",
      type: "image",
    },
  ];

  const filteredMedia =
    selectedCategory === "all"
      ? galleryMedia
      : galleryMedia.filter((media) => media.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Moments" },
    { id: "performance", label: "Performances" },
    { id: "crowd", label: "Crowd" },
  ];

  const navigateMedia = (direction) => {
    if (!selectedMedia) return;

    const currentIndex = galleryMedia.findIndex(
      (m) => m.id === selectedMedia.id,
    );

    let newIndex;
    if (direction === "next") {
      newIndex = currentIndex < galleryMedia.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryMedia.length - 1;
    }

    setSelectedMedia(galleryMedia[newIndex]);
    setIsMuted(false);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (!selectedMedia) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        navigateMedia("next");
      } else if (e.key === "ArrowLeft") {
        navigateMedia("prev");
      } else if (e.key === "Escape") {
        setSelectedMedia(null);
      } else if (e.key === "m" || e.key === "M") {
        toggleMute();
      } else if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, isMuted, isPlaying]);

  useEffect(() => {
    setIsMuted(false);
    setIsPlaying(true);
  }, [selectedMedia]);

  return (
    <section
      id="gallery"
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-primary font-bold tracking-widest text-sm mb-2 uppercase">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="heading-gradient">Moments</span> Gallery
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Capturing the energy, the crowds, and the unforgettable nights on
            stage.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMedia.map((media, index) => (
            <motion.div
              key={media.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer glass-card border border-white/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => setSelectedMedia(media)}
            >
              <div className="aspect-[4/5] overflow-hidden bg-dark">
                {media.type === "video" ? (
                  <>
                    <img
                      src={
                        media.thumbnail ||
                        media.src.replace(".mp4", "-thumb.jpg")
                      }
                      alt={media.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80";
                      }}
                    />
                  </>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {media.alt}
                      </h4>
                      <p className="text-primary text-xs uppercase tracking-wide">
                        {media.category}
                      </p>
                    </div>
                    <div className="bg-primary/90 p-2 rounded-full">
                      {media.type === "video" ? (
                        <Play className="w-5 h-5 text-white fill-white" />
                      ) : (
                        <ZoomIn className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Want DJ Sleezy at your next event?
          </p>
          <a href="#bookings" className="inline-block btn-primary">
            Book for Your Event
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
            >
              <X className="w-10 h-10" />
            </button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 bg-black/50 rounded-full z-50"
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia("prev");
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 bg-black/50 rounded-full z-50"
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia("next");
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Media Container - NO NATIVE CONTROLS */}
            <div
              className="relative max-w-6xl max-h-[90vh]"
              key={selectedMedia.id}
            >
              {selectedMedia.type === "video" ? (
                <div className="relative group" onClick={togglePlay}>
                  {/* Video - NO controls attribute */}
                  <video
                    ref={videoRef}
                    key={`video-${selectedMedia.id}`}
                    autoPlay
                    loop
                    playsInline
                    className="max-w-full max-h-[85vh] rounded-lg shadow-2xl shadow-primary/20 cursor-pointer"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play/Pause Overlay (shows on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-full">
                      {isPlaying ? (
                        <Pause className="w-12 h-12 text-white" />
                      ) : (
                        <Play className="w-12 h-12 text-white fill-white ml-1" />
                      )}
                    </div>
                  </div>

                  {/* Custom Mute/Unmute Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="absolute bottom-6 right-6 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-primary/50"
                    title={isMuted ? "Unmute (M)" : "Mute (M)"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>

                  {/* Sound Indicator Badge */}
                  {!isMuted && (
                    <div className="absolute top-4 left-4 z-10 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                      <Volume2 className="w-3 h-3" />
                      Sound On
                    </div>
                  )}

                  {/* Click to Play/Pause Hint */}
                  <div className="absolute bottom-6 left-6 z-10 text-white/70 text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    Click to {isPlaying ? "pause" : "play"} • Spacebar
                  </div>
                </div>
              ) : (
                <img
                  key={`image-${selectedMedia.id}`}
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl shadow-primary/20"
                  onClick={(e) => e.stopPropagation()}
                />
              )}

              {/* Media Info */}
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-bold">
                  {selectedMedia.alt}
                </h3>
                <p className="text-primary text-sm uppercase tracking-wide">
                  {selectedMedia.category}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
