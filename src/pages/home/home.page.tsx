import { BackgroundCanvas } from "@/containers/BackgroundCanvas/BackgroundCanvas";
import { LoadingOverlay } from "@/containers/LoadingOverlay/LoadingOverlay";
import { MainHeader } from "@/containers/MainHeader/MainHeader";
import { HeroSection } from "./sections/Hero.section";
import { AboutMottoSection } from "./sections/Motto.section";
import { AboutDescriptionSection } from "./sections/Description.section";
import { AboutStackSection } from "./sections/Stack.section";
import { AboutICanDoItSection } from "./sections/ICanDoIt.section";
import { AboutContactSection } from "./sections/Contact.section";

import { motion } from "framer-motion";

export function HomePage() {
  return (
    <>
      <MainHeader />
      <motion.div
        className="page"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
      >
        <div className="">
          <HeroSection />
          <AboutMottoSection />
          <AboutDescriptionSection />
          <AboutStackSection />
          <AboutICanDoItSection />
          <AboutContactSection />
        </div>
        <LoadingOverlay
          texts={["새로운 상상을 하고", "상상을 현실로 만듭니다"]}
          time={2500}
        />
        <BackgroundCanvas />
      </motion.div>
    </>
  );
}
