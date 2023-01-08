
Array.prototype.myMap =function (cb){

  let result =[]

  for (let i = 0; i < this.length; i++) {
    
    result.push(cb(this[i],i, this))
  }

  return result;
}


Array.prototype.myFilter = function (cb){
  let result =[]
for (let i = 0; i < this.length; i++) {
  if (cb(this[i],i,this)) {
    result.push(this[i])    
  }  
}
    return result
}


Array.prototype.myReduce =function (cb, initialValue){

  let accumlator=initialValue
  

  for (let i = 0; i < this.length; i++) {
    
    accumlator= accumlator ?cb(accumlator,this[i],i,this):this[i]
  }

  return accumlator;
}







let arr =[1,2,3,4,4,5,6]

let result=arr.myReduce((a,b)=> a+b)
console.log(result);













// cache

let memorize =(fn)=>{

  let cache ={}

  return (...args)=>{

    let stringToArgs=JSON.stringify(args)

      if (cache[stringToArgs]) {
        console.log("cache")
        return cache[stringToArgs]
        
      }
      else{
        console.log("store ");
        
        let result = fn.apply(this,args)
        cache[stringToArgs]=result
        return result
      }
  }
}


let add =((a,b,c)=>a+b+c)


let addMemorize= memorize(add)


console.log(addMemorize (1,2,3))
console.log(addMemorize (1,2,3))

