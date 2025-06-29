import YouTubeHero from "@/components/youtube/YouTubeHero";
import ChannelStats from "@/components/youtube/ChannelStats";
import FeaturedVideos from "@/components/youtube/FeaturedVideos";
import PlaylistsSection from "@/components/youtube/PlaylistsSection";
import YouTubeBenefits from "@/components/youtube/YouTubeBenefits";
// import YouTubeCTA from "@/components/youtube/YouTubeCTA";

export default function YouTube() {
  return (
    <div className="pt-16">
      <YouTubeHero />
      <ChannelStats />
      <FeaturedVideos />
      <PlaylistsSection />
      <YouTubeBenefits />
      {/* <YouTubeCTA /> */}
    </div>
  );
}
