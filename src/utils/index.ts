import { v4 } from 'uuid'

export const classNames = (...args: string[]) => args.join(' ')

export class ObjectBuilder {
  data: Record<string, unknown>

  constructor (from?: Record<string, unknown>) {
    this.data = Object.create(null)

    for (const key in from) {
      // eslint-disable-next-line security/detect-object-injection
      if (key && (from[key] || from[key] === null)) {
        // eslint-disable-next-line security/detect-object-injection
        this.data[key] = from[key]
      }
    }
  }

  build (): Record<string, unknown> {
    return this.data
  }

  addIfTruthy (key: string, value?: unknown) {
    // eslint-disable-next-line security/detect-object-injection
    if (key && value) this.data[key] = value
    return this
  }
}

export const getV4Key = (identifier?: string) => identifier ? `${identifier}_${v4()}` : v4()

export const useCreationYear = (value: number) => {
  const nowYear = new Date().getFullYear()
  if (nowYear !== value) return `${value}-${nowYear}`
  return value
}

export const useLayoutSize = () => {
  return {
    width: 363,
    height: 768
  }
}
