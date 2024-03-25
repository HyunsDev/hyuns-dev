import { motion } from "framer-motion";

export function AboutDescriptionSection() {
  return (
    <div className="min-h-[100dvh] pt-[200px] pb-[250px] px-4 max-w-[400px] w-full m-auto">
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="font-medium text-xl text-center">
          새로운 상상을 하는 몽상가이자,
          <br />
          상상을 현실로 만드는 개발자.
          <br />
          박현우입니다.
        </h2>
      </motion.div>
      <motion.div className="mt-10">
        <div className="text-center flex flex-col gap-4 mt-4 break-keep">
          <motion.p
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            박현우라는 실명과, 혀느현스라는 닉네임을 함께 사용하고 있습니다.
          </motion.p>

          <motion.p
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            내가 상상하는 것을 모두 만들 수 있게 해주는 개발에 흥미를 느껴,
            개발을 시작했습니다.
          </motion.p>

          <motion.p
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            지금은 주로 웹 프론트엔드와, 웹 백엔드를 다루는{" "}
            <span className="text-muted-foreground line-through">
              (자칭, 유니콘)
            </span>{" "}
            풀스택 개발자로 활동하고 있습니다.
          </motion.p>

          <motion.p
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            꼭 개발이 아니더라도, 기획과 디자인과 같이 무언가를 만드는 것에
            필요한 기술을 조금씩 다루고 있습니다.
          </motion.p>

          <motion.p
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
          >
            누군가와 새로운 아이디어를 상상하거나, 생각을 나누는 것을 좋아하니,
            언제든지 연락해주세요. 🙌
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
