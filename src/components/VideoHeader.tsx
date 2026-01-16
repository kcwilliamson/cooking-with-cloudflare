import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

interface VideoHeaderProps {
  videoUrl: string;
  poster?: string;
  title: string;
}

export default function VideoHeader({ videoUrl, poster, title }: VideoHeaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <div className="relative w-full bg-black" style={{ height: '60vh' }}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-6 transition-all hover:scale-110"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-12 h-12 text-gray-900" />
        ) : (
          <Play className="w-12 h-12 text-gray-900 ml-1" />
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
}
