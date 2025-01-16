import { useEffect, useState } from "react";

export function useProgress(duration: number) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId = 0;
    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      const localProgress = Math.min(elapsed / duration, 1);
      setProgress(localProgress);

      if (localProgress >= 1) return

      animationFrameId = requestAnimationFrame(animate);
    }

    // アニメーション開始
    animationFrameId = requestAnimationFrame(animate);

    // コンポーネントアンマウント時にアニメーションキャンセル
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration]);

  return progress;
}
