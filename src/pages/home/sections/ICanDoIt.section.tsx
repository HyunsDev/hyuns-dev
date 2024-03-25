import { motion } from "framer-motion";
import { ReactNode } from "react";

function TextRow({ text, delay }: { text: ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex flex-col gap-1">
        <p className="text-muted-foreground font-mono text-sm">{text}</p>
      </div>
    </motion.div>
  );
}

const texts = [
  "Notification API을 이용한 브라우저 알림 구현",
  "Python processing.py를 이용한 리액트 구현",
  "Canvas를 이용한 인터렉티프 프론트엔드 개발",
  "타입스크립트로 타입스크립트 인터프리터 구현",
  "Storybook을 이용한 디자인 시스템 개발",
  "Web Worker를 이용한 백그라운드 작업",
  "Notion을 이용한 팀 워크스페이스 세팅",
  "AWS S3를 이용한 파일 업로드/다운로드",
  "Next.js를 이용한 웹 프론트엔드 개발",
  "NodeJS를 이용한 Automation 개발",
  "Canvas를 이용한 웹 시뮬레이터 개발",
  "JS와 CSS를 이용한 반응형 웹 디자인",
  "Vite를 이용한 웹 프론트엔드 개발",
  "Recoil을 이용한 전역 상태 관리",
  "NestJS를 이용한 웹 백엔드 개발",
  "Socket.io를 이용한 실시간 채팅",
  "Lightsail을 이용한 서버 구축",
  "NodeJS에서 실시간 이미지 생성",
  "Google Calendar API 연동",
  "Figma를 이용한 UX/UI 디자인",
  "NodeJS에서 실시간 PDF 생성",
  "Factorio Rocket Launch",
  "3D 프린터를 이용한 사물 제작",
  "i18n을 이용한 다국어 지원",
  "아두이노를 이용한 IoT 개발",
  "사업자 등록 및 세금 처리",
  "자체 OAuth 서버 구축",
  "Notion API 연동",
  "_",
  "그 외 멋지고 다양한 것들...",
];

export function AboutICanDoItSection() {
  return (
    <div className="min-h-[100dvh] pt-[200px] pb-[250px] px-4 max-w-[500px] w-full m-auto">
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: "all" }}
      >
        <h2 className="font-medium text-xl text-center">
          그래서 할 수 있는 것들
        </h2>
      </motion.div>
      <div className="mt-10 text-center flex flex-col break-keep">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          viewport={{ once: true }}
          className="min-h-[1000px]"
        >
          {texts.map((text, index) => (
            <TextRow text={text} delay={1 + index * 0.08} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
