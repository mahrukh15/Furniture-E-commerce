import BrowseTheRangeSection from "@/components/sections/BrowseTheRangeSection";
import HeroSection from "@/components/sections/HeroSection";
import OurBlogs from "@/components/sections/ourBlog";
import OurInstagram from "@/components/sections/ourinstagram";
import OurProductSection from "@/components/sections/OurProductSection";
import ShareSetupSection from "@/components/sections/ShareSetupSection";

export default async function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
        <BrowseTheRangeSection />
        <OurProductSection/>
      <div className="mt-[56px]">
        <ShareSetupSection />
      </div>
      <OurBlogs/>
      <OurInstagram/>
    </main>
  );
}