import { chromium } from "playwright"

export async function scrapeOlx(city:string){

 const browser = await chromium.launch()

 const page = await browser.newPage()

 const url =
 `https://www.olx.com.br/autos-e-pecas/carros?q=${city}`

 await page.goto(url)

 const cars =
 await page.$$eval("a", items =>
  items.slice(0,40).map((item:any) => ({
   title:item.innerText,
   link:item.href
  }))
 )

 await browser.close()

 return cars

}
