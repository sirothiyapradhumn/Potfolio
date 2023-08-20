const TypeWriter = function(txtElement, words, wait){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function(){
    // Current Index of Word 
    const current = this.wordIndex % this.words.length;
    const fulltxt = this.words[current];
    
    // check if deleting
    if(this.isDeleting){
        // remove a char
        this.txt = fulltxt.substring(0,this.txt.length-1);
    }else{
        // add a char
        this.txt = fulltxt.substring(0,this.txt.length+1);
    }
    
    // Insert txt into element
    this.txtElement.innerHTML = '<span class = "txt">' + this.txt + '</span>';
    
    // Initial Type Speed
    let typeSpeed = 100;
    if(this.isDeleting){
        typeSpeed /= 2;
    }
    
    // If word is complete
    if(!this.isDeleting && this.txt === fulltxt){
        typeSpeed = this.wait; // to make a pause at end
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;
    }
    
    setTimeout(()=>this.type(),typeSpeed);
}

export default TypeWriter;