"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Camera, 
  Shirt, 
  Plane, 
  ExternalLink,
  Heart,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const hobbies = [
  { name: "网球", icon: Activity, color: "from-green-400 to-emerald-500" },
  { name: "摄影", icon: Camera, color: "from-purple-400 to-pink-500" },
  { name: "穿搭", icon: Shirt, color: "from-blue-400 to-cyan-500" },
  { name: "旅行", icon: Plane, color: "from-orange-400 to-amber-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function NeruPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-4 py-12 md:py-16">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-16 lg:gap-20"
      >
        {/* 头像区域 */}
        <motion.div
          variants={imageVariants}
          className="relative shrink-0"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/80 dark:ring-zinc-800/80 md:h-96 md:w-96">
              <Image
                src="/neru-avatar.JPG"
                alt="张欢欣 - Neru"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  // 如果图片加载失败，使用占位符
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23f3f4f6' width='400' height='400'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E头像图片%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            {/* 装饰性光晕效果 */}
            <motion.div
              className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-pink-400/30 to-orange-400/30 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </motion.div>

        {/* 个人信息区域 */}
        <div className="flex flex-1 flex-col items-center gap-8 text-center md:items-start md:text-left">
          {/* 姓名区域 */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="h-6 w-6 text-pink-400" />
              </motion.div>
              <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent md:text-6xl">
                张欢欣
              </h1>
            </div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-medium text-zinc-600 dark:text-zinc-400 md:text-4xl"
            >
              Neru
            </motion.h2>
          </motion.div>

          {/* 爱好标签区域 */}
          <motion.div variants={itemVariants} className="w-full space-y-5">
            <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2 justify-center md:justify-start">
              <Heart className="h-5 w-5 text-pink-400" />
              兴趣爱好
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: 1 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.1, y: -4, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className={`group h-auto gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all hover:shadow-lg border-2 hover:border-pink-300 dark:hover:bg-zinc-800/50 bg-white/50 backdrop-blur-sm relative overflow-hidden`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <Icon className="h-4 w-4 transition-transform group-hover:rotate-12 group-hover:scale-110 relative z-10 text-zinc-700 dark:text-zinc-300" />
                      <span className={`relative z-10 bg-gradient-to-r ${hobby.color} bg-clip-text text-transparent font-semibold`} style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}>
                        {hobby.name}
                      </span>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 简介文字 */}
          <motion.div
            variants={itemVariants}
            className="max-w-lg space-y-4 text-zinc-600 dark:text-zinc-400"
          >
            <p className="text-base leading-relaxed md:text-lg">
              热爱生活，享受每一个美好的瞬间。
              在网球场上挥洒汗水，用镜头捕捉生活的美好，
              用穿搭表达自我，在旅途中发现世界的精彩。
            </p>
          </motion.div>

          {/* 社交媒体链接 */}
          <motion.div variants={itemVariants} className="w-full">
            <Link
              href="https://xhslink.com/m/63Qjjoa56QU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="group w-full md:w-auto gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <span>小红书</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}

