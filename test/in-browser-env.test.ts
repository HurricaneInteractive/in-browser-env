import inBrowserEnv from '../src/in-browser-env'

describe('inBrowserEnv Test', () => {
  it('Is defined', () => {
    expect(inBrowserEnv).toBeTruthy()
  })

  it('Is not a browser env', () => {
    const isBrowser = inBrowserEnv()
    expect(isBrowser).toBeFalsy()
  })
})
