export class LMSModel{
    constructor() {
        this.subjects = new Map();
    }
    
    async add(obj){
        if(!obj || typeof obj !==  'object'){
            throw new Error('parameter must be an object')
        }else{
            // this.id = this.subjects.size + 1;
            this.subjects = this.subjects.set(obj.id, obj);
            return obj.id;
        }
    }
    async readAll(param){
        if(param){
            throw new Error("this method does'n need a parameter");
        }else{
            let arr = [];
            for (let [key, value] of this.subjects) {
                arr.push(value);
            }
            return arr
        }
    }
    async remove(subject){
        if(this.subjects.has(subject.id)===false){
            throw new Error("there is no such subject");
        }else{
            this.subjects.delete(subject.id);
        }
    }
    async verify(subject){
        if(this.subjects.has(subject.id)){
            return true
        }else if (this.subjects.has(subject.id) === false){
            return false
        }
    }
}