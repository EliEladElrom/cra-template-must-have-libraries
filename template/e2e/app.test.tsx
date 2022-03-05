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
    await expect(hrefsArray[0]).toMatch('https://github.com/EliEladElrom/react-tutorials')
  }, JEST_TIMEOUT)

})