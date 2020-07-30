
var arrayName=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for (var name in arrayName){
       if(arrayName[name].charAt(0).toUpperCase() == 'J'){
       	byespeaker.bye(arrayName[name]);
       }
       else{
       	hellospeaker.bye(arrayName[name]);
       }
}
