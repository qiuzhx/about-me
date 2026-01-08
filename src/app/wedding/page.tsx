"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Sparkles } from "lucide-react";
import { useMemo } from "react";

const photos = [
  { src: "/wedding/happiness.jpg", alt: "幸福时刻" },
  { src: "/wedding/hi.jpg", alt: "美好回忆" },
  { src: "/wedding/victory.jpg", alt: "胜利时刻" },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

// 飘落的心形组件
function FloatingHeart({ index }: { index: number }) {
  // 使用索引作为种子来生成伪随机值，避免在渲染时调用 Math.random
  const position = useMemo(() => {
    // 使用简单的伪随机算法，基于索引生成
    const seed = (index * 9301 + 49297) % 233280;
    const random1 = seed / 233280;
    const seed2 = (seed * 9301 + 49297) % 233280;
    const random2 = seed2 / 233280;
    const seed3 = (seed2 * 9301 + 49297) % 233280;
    const random3 = seed3 / 233280;
    
    return {
      x: random1 * 100,
      delay: random2 * 2,
      duration: 3 + random3 * 2,
    };
  }, [index]);

  return (
    <motion.div
      className="absolute text-rose-300/30 dark:text-rose-400/20 pointer-events-none"
      initial={{
        x: `${position.x}%`,
        y: -20,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: "100vh",
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: position.duration,
        delay: position.delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Heart className="h-4 w-4 fill-current" />
    </motion.div>
  );
}

export default function WeddingPage() {
  // 创建多个飘落的心形
  const hearts = useMemo(() => Array.from({ length: 8 }, (_, i) => i), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 dark:from-rose-950 dark:via-pink-950 dark:to-amber-950 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {hearts.map((i) => (
          <FloatingHeart key={i} index={i} />
        ))}
        {/* 渐变光晕 */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-200/20 dark:bg-rose-800/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/20 dark:bg-amber-800/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20"
      >
        {/* Hero 区域 */}
        <motion.section
          variants={itemVariants}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            variants={fadeInVariants}
            className="inline-block mb-6"
          >
            <Sparkles className="h-8 w-8 md:h-12 md:w-12 text-rose-400 dark:text-rose-300 mx-auto" />
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 dark:from-rose-400 dark:via-pink-400 dark:to-amber-400 bg-clip-text text-transparent"
          >
            我们结婚了
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 md:gap-8 mb-8"
          >
            <div className="text-right">
              <h2 className="text-2xl md:text-4xl font-semibold text-rose-700 dark:text-rose-300 mb-1">
                邱忠辉
              </h2>
              <p className="text-sm md:text-base text-rose-600/80 dark:text-rose-400/80">
                新郎
              </p>
            </div>
            
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-rose-400 dark:text-rose-300"
            >
              <Heart className="h-8 w-8 md:h-12 md:w-12 fill-current" />
            </motion.div>
            
            <div className="text-left">
              <h2 className="text-2xl md:text-4xl font-semibold text-rose-700 dark:text-rose-300 mb-1">
                张欢欣
              </h2>
              <p className="text-sm md:text-base text-rose-600/80 dark:text-rose-400/80">
                新娘
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-rose-600/90 dark:text-rose-300/90 font-light italic"
          >
            诚挚邀请您见证我们的幸福时刻
          </motion.p>
        </motion.section>

        {/* 照片展示区域 */}
        <motion.section
          variants={itemVariants}
          className="mb-16 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.2,
                  duration: 0.6,
                }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-2 ring-rose-200/50 dark:ring-rose-800/50"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 婚礼信息卡片 */}
        <motion.section
          variants={itemVariants}
          className="mb-16 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 日期时间卡片 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white/80 dark:bg-rose-950/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-rose-200/50 dark:ring-rose-800/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl shadow-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-rose-800 dark:text-rose-200 mb-3">
                    婚礼日期
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-rose-700 dark:text-rose-300 mb-2">
                    2026年2月23日
                  </p>
                  <p className="text-lg text-rose-600/80 dark:text-rose-400/80">
                    正月初七
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 地点卡片 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white/80 dark:bg-rose-950/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-rose-200/50 dark:ring-rose-800/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-rose-800 dark:text-rose-200 mb-3">
                    婚礼地点
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-rose-700 dark:text-rose-300 mb-2">
                    湖南省石门县
                  </p>
                  <p className="text-lg text-rose-600/80 dark:text-rose-400/80">
                    邱家湾
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 邀请文字 */}
        <motion.section
          variants={itemVariants}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white/60 dark:bg-rose-950/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-rose-200/50 dark:ring-rose-800/50"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block mb-6"
            >
              <Heart className="h-8 w-8 text-rose-400 dark:text-rose-300 fill-current" />
            </motion.div>
            
            <p className="text-lg md:text-xl text-rose-700 dark:text-rose-200 leading-relaxed mb-4">
              在这个特别的日子里，
            </p>
            <p className="text-lg md:text-xl text-rose-700 dark:text-rose-200 leading-relaxed mb-4">
              我们诚挚地邀请您，
            </p>
            <p className="text-lg md:text-xl text-rose-700 dark:text-rose-200 leading-relaxed mb-6">
              与我们共同见证这份美好的爱情，
            </p>
            <p className="text-xl md:text-2xl font-semibold text-rose-800 dark:text-rose-100">
              分享我们的幸福与喜悦。
            </p>
            
            <motion.div
              className="flex items-center justify-center gap-2 mt-8"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-5 w-5 text-rose-400 dark:text-rose-300 fill-current" />
              <span className="text-rose-600 dark:text-rose-300 font-medium">
                期待您的到来
              </span>
              <Heart className="h-5 w-5 text-rose-400 dark:text-rose-300 fill-current" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 底部装饰 */}
        <motion.footer
          variants={itemVariants}
          className="text-center text-rose-600/60 dark:text-rose-400/60"
        >
          <p className="text-sm md:text-base">
            © 2026 邱忠辉 & 张欢欣
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
}

