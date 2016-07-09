var Letter = function(let) {

//make character property 

this.charac = let.toLowerCase();

//make appear property

this.appear = false;

//make letterRender property

this.letterRender = function(){
	if(this.appear) {
		return this.charac;
	} else {return "_"; 
	}
}

};

module.exports = Letter;