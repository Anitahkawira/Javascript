class jStorage{

	constructor(){
		this.key = '_storage_';

		let data = localStorage.getItem(this.key);

		if(data) {
			this.data = JSON.parsel(data);
		} else{
			this.data = {};
		}
	}

	setItem(key, value){
		this.data[key] = value;
		localStorage.setItem(this.key, JSON.)
	}
}


// var jStorage ={
// 	key:'_storage_',
// 	data: {},

// 	setItem: function(key, value){
// 		this.data[key] = value;
// 		localStorage.setItem(this.key, JSON.stringify(this.data));
// 	}
// }