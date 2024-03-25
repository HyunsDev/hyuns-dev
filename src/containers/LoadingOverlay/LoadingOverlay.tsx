import { isShowingOverlayAtom } from "@/atoms/isShowingOverlay.atom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export function LoadingOverlay({
  texts,
  time,
  manual,
}: {
  texts: string[];
  time: number;
  manual?: boolean;
}) {
  const alreadyLoading =
    !manual && sessionStorage.getItem("alreadyLoading") === "true";
  const [isShow, setIsShow] = useState(false);
  const setIsShowingOverlay = useSetRecoilState(isShowingOverlayAtom);

  useEffect(() => {
    if (alreadyLoading) {
      setIsShow(false);
      setIsShowingOverlay(false);
      return;
    }

    setIsShow(true);
    setIsShowingOverlay(true);
    const timer = setTimeout(() => {
      setIsShow(false);
      setIsShowingOverlay(false);

      if (!manual) {
        sessionStorage.setItem("alreadyLoading", "true");
      }
    }, time);
    return () => clearTimeout(timer);
  }, [alreadyLoading, setIsShowingOverlay, time, manual]);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center select-none"
          initial={{ backgroundColor: "rgba(0,0,0,1)" }}
          exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1] }}
            transition={{
              duration: 2.4,
              ease: [0.2, 1, 0.2, 1],
              times: [0, 0.6],
            }}
          >
            {texts.map((text, index) => (
              <div key={index} className="flex items-center justify-center">
                {Array.from(text).map((char, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl rounded min-w-[6px]"
                    animate={{
                      opacity: [0, 1, 1, 0],
                      color: [
                        "#2a41c3",
                        "#8d2ac3",
                        "#eab308",
                        "#ffffff",
                        "#ffffff",
                        "#eab308",
                        "#8d2ac3",
                        "#2a41c3",
                      ],
                    }}
                    transition={{
                      opacity: {
                        duration: 2.4,
                        times: [0, 0.3, 0.9, 1],
                        repeat: 0,
                        delay: index * 0.04,
                      },
                      color: {
                        duration: 2.4,
                        times: [0, 0.1, 0.2, 0.3, 0.7, 0.8, 0.9, 1],
                        repeat: 0,
                        delay: index * 0.04,
                      },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
