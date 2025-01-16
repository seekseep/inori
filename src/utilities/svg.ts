export function strokeDasharrayAsCircleProgress(progress: number, radius: number) {
  return `${progress * 2 * Math.PI * radius} ${radius * 2 * Math.PI}`
}
