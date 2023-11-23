class Formatter {
  //add static methods here
  static capitalize(value){
      const firstletter = value.charAt(0);
      const remainingLet = value.slice(1);
      const uppercaseLet = firstletter.toUpperCase();
      return uppercaseLet+remainingLet;
  }
  static sanitize(value1){
    //const char2replace = "!@#$%^&*():;";
    //console.log(value1);

    return value1.replace(/[$@%!#(){}<>^*]/g,'')
  }

  static titleize(value2){
    //console.log(value2);
    let charvalues = value2.split(" ");
    let invalidchar = ["the","a","an","but","of","and","for","at","by","from"];
    let words =[];

    for (let i=0; i<charvalues.length;i++){
    
        if(invalidchar.includes(charvalues[i])&& i!=0 ){
          
          //console.log(charvalues[i]);
            words.push(charvalues[i]);

              }else{
               
                words.push(this.capitalize(charvalues[i]));
              }
        
    }
    //console.log(words);
    
    
    return words.join(' ');
    
  }

}