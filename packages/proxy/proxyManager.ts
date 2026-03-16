export class ProxyManager {

 proxies = [
  "http://proxy1:port",
  "http://proxy2:port"
 ]

 getRandomProxy(){

  return this.proxies[
   Math.floor(Math.random()*this.proxies.length)
  ]

 }

}
