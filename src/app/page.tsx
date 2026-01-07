"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Gamepad2, Mountain, Dumbbell } from "lucide-react";

const hobbies = [
  { name: "网球", icon: Activity },
  { name: "健身", icon: Dumbbell },
  { name: "游戏", icon: Gamepad2 },
  { name: "旅行", icon: Heart },
  { name: "徒步", icon: Mountain },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 px-4 py-12">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-4xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-16"
      >
        {/* 个人照片区域 */}
        <motion.div
          variants={imageVariants}
          className="relative shrink-0"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/50 dark:ring-zinc-800/50 md:h-80 md:w-80">
            <Image
              src="https://gw.alicdn.com/imgextra/i3/O1CN012T7jF61NESGWOkKXa_!!6000000001538-0-tps-1024-1280.jpg"
              alt="邱忠辉 - Peter Qiu"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 个人信息区域 */}
        <div className="flex flex-1 flex-col items-center gap-8 text-center md:items-start md:text-left">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
              邱忠辉
            </h1>
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-medium text-zinc-600 dark:text-zinc-400 md:text-3xl"
            >
              Peter Qiu
            </motion.h2>
          </motion.div>

          {/* 爱好标签区域 */}
          <motion.div variants={itemVariants} className="w-full space-y-4">
            <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
              兴趣爱好
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="group h-auto gap-2 rounded-full px-4 py-2.5 text-sm transition-all hover:bg-zinc-100 hover:shadow-md dark:hover:bg-zinc-800"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      <span>{hobby.name}</span>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 简介文字 */}
          <motion.div
            variants={itemVariants}
            className="max-w-md space-y-4 text-zinc-600 dark:text-zinc-400"
          >
            <p className="text-base leading-relaxed md:text-lg">
              热爱生活，享受运动带来的活力与挑战。
              在网球场上挥洒汗水，在健身房中突破自我，
              在游戏中探索无限可能，在旅途中发现世界的美好，
              在徒步中感受大自然的宁静与力量。
            </p>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
