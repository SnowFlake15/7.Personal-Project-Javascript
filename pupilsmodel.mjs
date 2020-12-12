
import { Validate } from './validate.mjs';

export class PupilsModel {
    constructor() {
        this.pupils = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", // male OR female
          }
    }

    add(pupil) {
        if (Validate.validator(pupil, this.schema)) {
            Validate.moreValidate(pupil);
            let id= Math.floor(Math.random() * 100);
            pupil.id = id;
            this.pupils = this.pupils.set(id, pupil)
            return this.pupils.get(id);
        } else {
            throw new Error('invalid pupil argument');
        }
    }

    read(id) {
        if(this.pupils.has(id)===false){
            throw new Error('there is no such puplil');
        }else if(this.pupils.has(id) === true){
            let person = this.pupils.get(id);
            return person;
        }
    }

    update(id,param){
        if(this.pupils.has(id) ===false){
            throw new Error('there is no such teacher');
        }
        else{
            Validate.validator(param, this.schema);
            Validate.moreValidate(param);
            let user= this.pupils.get(id);
            Object.assign(user, param);
            return id;
        }
    }


    remove(id) {
        if(!id){
            throw new Error("id is required");
        }else if(this.pupils.has(id) ===false){
            throw new Error('there is no such user');
        }
        else{
            return this.pupils.delete(id);
        }
    }
}