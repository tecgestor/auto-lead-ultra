import { scrapeOlx } from "../../../../packages/scrapers/olxScraper"

export async function searchVehicles(req:any,res:any){

 const { city } = req.query

 const cars = await scrapeOlx(city)

 res.json(cars)

}
