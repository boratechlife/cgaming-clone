export default function Home() {
  return (
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
  );
}
