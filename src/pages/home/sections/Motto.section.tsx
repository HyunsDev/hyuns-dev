import { AnimatedText } from "@/containers/AnimatedText/AnimatedText";

export function AboutMottoSection() {
  return (
    <div className="bg-black text-background flex justify-center items-center h-[130px] px-4">
      <div className="flex flex-col">
        <div className="">
          <AnimatedText text={`새로운 상상을 하고,\n상상을 현실로 만듭니다.`} />
        </div>
      </div>
    </div>
  );
}
