import MainSection from "./sections/MainSection";
import IntroSection from "./sections/IntroSection";
import GallerySection from "./sections/GallerySection";
import MessageSection from "./sections/MessageSection";
import MapSection from "./sections/MapSection";
import AccountSection from "./sections/AccountSection";

export default function Home() {
  return (
    <div>
      <MainSection />
      <IntroSection />
      <GallerySection />
      <MapSection />
      <MessageSection />
      <AccountSection />
    </div>
  );
}
