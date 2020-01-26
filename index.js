class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+ string.slice(1)
   }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
   }

   static titleize(string){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const result = []
    const words = string.split(" ")
    for( let i = 0; i < words.length; i++){
      if(i === 0){
        result.push(this.capitalize(words[i]))
      } else{
        if(!exceptions.includes(words[i])){
          result.push(this.capitalize(words[i]))
        } else{
          result.push(words[i])
        }
      }
    }
    return result.join(" ")
  }
   
}