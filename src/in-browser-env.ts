/**
 * Checks if the current environment is the browser
 *
 * @return {boolean}
 */
const inBrowserEnv = (): boolean => {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export default inBrowserEnv
