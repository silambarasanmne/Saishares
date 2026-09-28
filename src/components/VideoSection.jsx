import React, { useState } from 'react';
import { Play, Pause, Sparkles, TrendingUp, ShieldCheck, BarChart3, PieChart, Volume2, VolumeX } from 'lucide-react';
import SlideIn from './SlideIn';

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'basics', name: 'Stock Basics' },
    { id: 'sip', name: 'SIP & Mutual Funds' },
    { id: 'strategies', name: 'Trading Strategies' },
  ];

  const videos = [
    {
      id: 'v1',
      title: 'Stock Market Basics for Beginners: Smart Entry & Portfolio Growth',
      category: 'basics',
      duration: '0:15',
      badge: '15s Clip',
      views: '14.2K views',
      videoSrc: '/videos/stock-basics.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      description: 'Quick 15-second primer on stock selection principles, equity fundamentals, and disciplined investing.',
      icon: TrendingUp
    },
    {
      id: 'v2',
      title: 'Power of SIP & Compounding: Wealth Acceleration',
      category: 'sip',
      duration: '0:15',
      badge: '15s Clip',
      views: '28.9K views',
      videoSrc: '/videos/sip-guide.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
      description: 'Understand how monthly SIP investments build long-term wealth through compounding returns.',
      icon: PieChart
    },
    {
      id: 'v3',
      title: 'Technical Analysis & Candlestick Market Highlights',
      category: 'strategies',
      duration: '0:15',
      badge: '15s Clip',
      views: '35.4K views',
      videoSrc: '/videos/technical-analysis.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
      description: 'Key candlestick chart indicators and technical breakouts explained in a crisp 15-second format.',
      icon: BarChart3
    },
    {
      id: 'v4',
      title: 'Risk Management & Capital Preservation Rules',
      category: 'strategies',
      duration: '0:15',
      badge: '15s Clip',
      views: '19.8K views',
      videoSrc: '/videos/risk-management.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      description: 'Essential stop-loss and hedging techniques for managing downside market volatility.',
      icon: ShieldCheck
    }
  ];

  const filteredVideos = activeTab === 'all' 
    ? videos 
    : videos.filter(v => v.category === activeTab);

  return (
    <section id="videos" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Section divider gradient */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background Subtle Blurs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#c68d37]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#e05a2b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SlideIn direction="up" delayMs={0}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c68d37]/6 border border-[#c68d37]/15 text-[#b07a2e] text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#c68d37]" />
              <span>Self-Hosted Video Clips</span>
            </div>

            <h2 className="text-3xl sm:text-[2.75rem] font-extrabold text-gray-900 tracking-tight leading-[1.1]" style={{ letterSpacing: '-0.025em' }}>
              15-Second Market Insights & Guides
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 font-normal leading-relaxed max-w-[52ch] mx-auto">
              Watch locally hosted 15-second share market video clips covering stock strategies, SIP guidance, and technical analysis.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-400 cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-[#c68d37] to-[#d4a054] text-white shadow-[0_4px_16px_-4px_rgba(198,141,55,0.4)]'
                      : 'bg-gray-100 hover:bg-gray-200/80 text-gray-600'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </SlideIn>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredVideos.map((video, idx) => {
            const isPlaying = playingVideoId === video.id;

            return (
              <SlideIn key={video.id} direction="up" delayMs={idx * 100}>
                <div className="card-bezel h-full">
                  <div className="card-bezel-inner overflow-hidden group flex flex-col h-full">
                    
                    {/* HTML5 Native Video Player */}
                    <div className="relative aspect-video w-full bg-black overflow-hidden" style={{ borderRadius: 'calc(1.5rem - 6px) calc(1.5rem - 6px) 0 0' }}>
                      <video
                        id={`video-player-${video.id}`}
                        src={video.videoSrc}
                        poster={video.thumbnail}
                        playsInline
                        muted={isMuted}
                        controls={isPlaying}
                        className="w-full h-full object-cover"
                        onPlay={() => setPlayingVideoId(video.id)}
                        onPause={() => {
                          if (playingVideoId === video.id) setPlayingVideoId(null);
                        }}
                        onEnded={() => setPlayingVideoId(null)}
                      />

                      {!isPlaying && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                      )}

                      {/* Badge */}
                      {!isPlaying && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/15 rounded-full text-white text-xs font-semibold">
                          {video.badge}
                        </span>
                      )}

                      {/* Duration Tag */}
                      {!isPlaying && (
                        <span className="absolute bottom-4 right-4 px-2.5 py-1 bg-black/70 rounded-lg text-white/90 text-xs font-mono font-medium">
                          {video.duration}
                        </span>
                      )}

                      {/* Custom Play Button Overlay */}
                      {!isPlaying && (
                        <button
                          onClick={() => {
                            const vidEl = document.getElementById(`video-player-${video.id}`);
                            if (vidEl) {
                              vidEl.play();
                              setPlayingVideoId(video.id);
                            }
                          }}
                          className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#c68d37] hover:bg-[#b07a2e] text-white flex items-center justify-center shadow-[0_8px_32px_-4px_rgba(198,141,55,0.5)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] transform group-hover:scale-110 cursor-pointer border-4 border-white/25"
                          aria-label={`Play 15 sec video ${video.title}`}
                        >
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                        </button>
                      )}
                    </div>

                    {/* Video Details */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#c68d37] mb-2.5 uppercase tracking-[0.12em]">
                          <video.icon className="w-4 h-4" />
                          <span>{video.views}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug group-hover:text-[#c68d37] transition-colors duration-400">
                          {video.title}
                        </h3>
                        <p className="mt-3 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <button
                          onClick={() => {
                            const vidEl = document.getElementById(`video-player-${video.id}`);
                            if (vidEl) {
                              if (isPlaying) {
                                vidEl.pause();
                              } else {
                                vidEl.play();
                              }
                            }
                          }}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#c68d37] hover:text-[#a87328] transition-colors cursor-pointer"
                        >
                          {isPlaying ? (
                            <>
                              <Pause className="w-4 h-4 text-[#c68d37]" />
                              <span>Pause Clip</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 fill-[#c68d37]" />
                              <span>Play 15s Video Clip</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                          title={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </SlideIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
