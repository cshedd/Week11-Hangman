var Letter = function(let) {

//make character property 

this.charac = let;

//make appear property

this.appear = false;

//make letterRender property

this.letterRender = function(){
	if(this.appear === true){
		return this.charac;
	} else if (this.charac === " ") {
		this.appear === true;
		return this.charac;
	} else {
		return "_";
	}
}

};

module.exports = Letter;