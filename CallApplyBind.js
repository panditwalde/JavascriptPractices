

let obj ={
    firstname :"pandit",
    lastname :"walde",
    getFullName: function() {
      return this.firstname + ' ' + this.lastname;
      }
    }
  
  
   function getDetails(...ages) {
     console.log(this.getFullName(),ages)
     
   }
  
   getDetails.call(obj,27,"call method ")
   getDetails.apply(obj,[27,"apply"])
  let bindData= getDetails.bind(obj)
  bindData(27,"bind")
  
  
  
  