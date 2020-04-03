let defaultCity = '景德镇'
try {
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch(e) {}

export default {
   city: defaultCity
}
