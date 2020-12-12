import { Validate } from './validate.mjs';

export class TeachersModel {
    constructor() {
        this.teachers = new Map();
        this.schema = {
            "name": {
                "first": "string",
                "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "emails": [
                {
                    "email": "string",
                    "primary": "boolean"
                }
            ],
            "phones": [
                {
                    "phone": "string",
                    "primary": "boolean"
                }
            ],
            "sex": "string", // male or female
            "subjects": [
                {
                    "subject": "string"
                }
            ],
        }
    }

    add(teacher) {
        if (Validate.validator(teacher, this.schema)) {
            Validate.moreValidate(teacher);
            let id = Math.floor(Math.random() * 100);
            // this.teachers.set(id, teacher);
            this.teachers = this.teachers.set(id, teacher)
            return id;
        } else {
            throw new Error('invalid teacher argument');
        }
    }

        read(id) {
        if(this.teachers.has(id)===false){
            throw new Error('there is no such teacher');
        }else if(this.teachers.has(id) === true){
            let person = this.teachers.get(id);
            return person;
        }
    }
    update(id,param){
        if(!id){
            throw new Error("id is required");
        }else if(typeof param !== 'object' || !param){
            throw new Error("id is required and should be an object");
        }else if(this.teachers.has(id) ===false){
            throw new Error('there is no such teacher');
        }
        else if(Validate.validator(param, this.schema)){
            
            Validate.moreValidate(param);
            let user= this.teachers.get(id);
            Object.assign(user, param);
            return id;
        }
    }

        remove(id) {
        if(!id){
            throw new Error("id is required");
        }else if(this.teachers.has(id) ===false){
            throw new Error('there is no such user');
        }
        else{
            return this.teachers.delete(id);
        }
    }
}