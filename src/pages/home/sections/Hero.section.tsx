import HyunsLogo from "@/assets/hyuns.png";

export function HeroSection() {
  return (
    <div className="flex items-center justify-center h-screen hero-background">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="">
          <img
            src={HyunsLogo}
            alt=""
            className="w-[64px] h-[64px] rounded-full"
          />
        </div>
        <h1 className="text-center font-bold text-7xl text-foreground">
          <span className="hero-letter hero-letter-1">H</span>
          <span className="hero-letter hero-letter-2">Y</span>
          <span className="hero-letter hero-letter-3">U</span>
          <span className="hero-letter hero-letter-4">N</span>
          <span className="hero-letter hero-letter-5">S</span>
          <span className="hero-letter hero-letter-6">D</span>
          <span className="hero-letter hero-letter-7">E</span>
          <span className="hero-letter hero-letter-8">V</span>
        </h1>
        <div className="text-foreground font-bold">
          새로운 상상을 하고, 상상을 현실로 만드는 개발자
        </div>
      </div>
    </div>
  );
}
