Object.prototype.create1 = function(proto){
    var newObj = {};
    newObj.__proto__ = proto;
    return newObj;
};

Object.prototype.keys1 = function (obj){
    var newArr = [];
    for(key in obj){
        if(obj.hasOwnProperty(key)){
            newArr.push(key)
        }
    }
    return newArr;
};

Array.prototype.pop1 = function(){
    arr.length = arr.length - 1;
    return arr;
};

Array.prototype.push1 = function(elem){
     this[this.length] = elem;
     return this;
};

Array.prototype.shift1 = function(){
  var firstElem = this[0];
  for(var i = 0; i < this.length; i++) {
     this[i] = this[i-1];
  }
     return firstElem;
};

Array.prototype.unshift1 = function(elem){
    for (var i = this.length; i >= 0; i--){
        console.log(this[i] = this[i - 1]);
    }
    this[0] = elem;
    console.log(this)
};

Object.prototype.freeze1 = function (obj) {
    for(key in obj){
        Object.defineProperty(obj, key,{
            value: obj[key],
            writable: false,
            configurable: false
        });
    };
};

Array.prototype.filter1 = function (f){
    var newArr = [];
    for(var i = 0; i < this.length; i++){
        if(f(this[i])){
            newArr[newArr.length] = this[i];
        }
    }
    return newArr;
};
Array.prototype.some1 = function (f) {
    for(var i = 0;i< this.length; i++) {
        if (f(this[i])) {
            return true

        }
    }
    return false
};


Array.prototype.every1 = function (f) {
    var last = this.length - 1;
        for(var i = 0; i < this.length; i++) {
            if (!f(this[i])) {
                return false
            }
        }
    return true
};
Array.prototype.reverse1 = function(){
    var length = this.length;
    for (var i = this.length;i >= 0 ; i--){
        this[this.length] = this[i]
    }
    for(var i = 0; i <= length; i++){
        this.shift();
    }
    return this;
};

Array.prototype.forEach1 = function(f){
    for(var i = 0; i < this.length; i++){
        f(this[i]);
    }
};
arr = [1, 2, 3, 4, 5];
Array.prototype.map1 = function(callback){
    var newArr = [];
    for(var y = 0; y < this.length; y++) {
        newArr.push(callback(this[y], index));
    }
    return newArr;
};
Array.prototype.forEach1 = function(callback){
    for(var y = 0; y < this.length; y++) {
       (callback(this[y], index));
    }
    return this
};
Array.prototype.join1 = function (string) {
    var newString = '';
    var s = string.charAt(0) || ',';
    for(var i = 0; i < this.length; i++){
        if(i === this.length -1){
            newString += i;
        }else{
            newString += i + s;
        }
    }
    return newString;
};

Array.prototype.reduce1 = function(callback){
    var element = 0;
    for(var i = 0;i < this.length; i++){
       element = callback(element, i)
    }
};
Array.prototype.sort1 = functin(){


    return newArr;
};

Function.prototype.bind1 = function(){};



Function.prototype.call1 = function(){};


Function.prototype.apply1 = function(){};

// Array.sort




