// @ts-ignore due to isolatedModules flag - no import so this needed
describe('<App />', () => {
  beforeAll(async () => {
    await page.goto(SERVER_URL, { waitUntil: 'domcontentloaded' })
  }, JEST_TIMEOUT)

  it('should include "edit" text on page', async () => {
    await expect(page).toMatch('Edit')
  }, JEST_TIMEOUT)

  it('should include href with correct link', async () => {
    const hrefsArray = await page.evaluate(
      () => Array.from(
        document.querySelectorAll('a[href]'),
        a => a.getAttribute('href')
      )
    )
    expect(hrefsArray[0]).toMatch('https://github.com/EliEladElrom/react-tutorials')
  }, JEST_TIMEOUT)

  it('should include the React svg correct image', async () => {
    // @ts-ignore
    const images = await page.$$eval('img', anchors => [].map.call(anchors, img => img.src));
    expect(images[0]).toMatch(`${SERVER_URL  }/static/media/logo.5d5d9eef.svg`)
  }, JEST_TIMEOUT)

})
