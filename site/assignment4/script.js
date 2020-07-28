var arrayName=["jumboo","jack","kiran"];
for (var name in arrayName){
	if(arrayName[name].charAt(0).toUpperCase() == 'J'){
		console.log(`hello ${arrayName[name].charAt(0).toUpperCase()}${arrayName[name]}`);
	}
	else{
	console.log('hello '+arrayName[name]);
    }
}