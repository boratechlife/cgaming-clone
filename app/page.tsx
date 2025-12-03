import EventLocationSection from "@/components/EventLocationSection";
import FAQSection from "@/components/FAQSection";
import MissionSection from "@/components/MissionSection";
import TabletFooter from "@/components/TabletFooter";
import ThreePillarsSection from "@/components/ThreePillarsSection";

export default function Home() {
  return (
    <section>
      <div className="flex   min-h-[80vh] items-center justify-center font-sans dark:bg-black">
        <video
          src="/videos/CdshOvGFhAxGtEtsnFbvCP3VTI.mp4"
          preload="auto"
          playsInline={true}
          autoPlay={true}
          loop={true}
          muted={true}
          className="cursor-auto w-ful h-full  rounded-none block object-cover object-center "
        ></video>
      </div>
      <MissionSection />
      <ThreePillarsSection />
      <EventLocationSection />
      <FAQSection />
      <TabletFooter />
    </section>
  );
}
