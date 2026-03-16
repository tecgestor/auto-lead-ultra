import { scrapeOlx } from "../packages/scrapers/olxScraper"

async function run(){

 const cities = [
  "campinas",
  "sao paulo",
  "sorocaba"
 ]

 for(const city of cities){

  const cars =
  await scrapeOlx(city)

  console.log("cars",cars)

 }

}

setInterval(run,60000)
