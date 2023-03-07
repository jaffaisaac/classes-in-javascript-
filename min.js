class person{
    constructor(name){
        this._name =name;
    }
    detail(){
        return this._name;
    }
}
let info =new person('job');
console.log(info.detail());
