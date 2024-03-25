import { motion } from "framer-motion";
import { ReactNode } from "react";

function StackRow({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-muted-foreground font-mono text-xs">{description}</p>
      </div>
    </motion.div>
  );
}

export function AboutStackSection() {
  return (
    <div className="min-h-[100dvh] pt-[200px] pb-[250px] px-4 max-w-[500px] w-full m-auto">
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="font-medium text-xl text-center">
          사용할 수 있는 기술 스택
        </h2>
        <div className="text-sm text-center text-muted-foreground">
          꼭 아래 스택이 아니어도, 필요하다면 새로운 기술을 배울 수 있어요.
        </div>
      </motion.div>
      <div className="mt-10 text-center flex flex-col gap-4 break-keep">
        <StackRow
          title="Language & Runtime"
          description={
            <>
              Typescript, Javascript, NodeJS
              <br />
              Python
            </>
          }
        />
        <StackRow
          title="Frontend"
          description={
            <>
              React
              <br />
              Next.js, Vite, Storybook
              <br />
              Tailwind CSS, Styled Components, SCSS, Framer Motion
              <br />
              @tanstack/query, React Hook Form, Recoil
            </>
          }
        />
        <StackRow
          title="Backend"
          description={
            <>
              NestJS, Express, Koa
              <br />
              MySQL, MariaDB, MongoDB
              <br />
              AWS, GCP, Serverless
              <br />
              TypeORM, Mongoose
              <br />
              Linux, Ubuntu, Nginx
              <br />
              PHP(?)
            </>
          }
        />
        <StackRow
          title="DevOps"
          description={
            <>
              Docker
              <br />
              Github Actions, Vercel, Render
            </>
          }
        />
        <StackRow
          title="Design"
          description={
            <>
              Figma, Adobe XD, Adobe Photoshop
              <br />
              Adobe After Effects, Adobe Premiere Pro
            </>
          }
        />
        <StackRow
          title="Etc"
          description={
            <>
              Git, Github
              <br />
              Slack, Discord, Notion
              <br />
              Steam(?)
            </>
          }
        />
      </div>
    </div>
  );
}
