
import { Validate } from './validate.mjs';

export class GroupsModel {
    constructor() {
        this.groups = new Map();
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
            "description": "string"
        }
    }

    add(roomsnum) {
        if (typeof roomsnum !== "number" || !roomsnum) {
            throw new Error("room  is required and must be a number type");
            
        }
        else {
            let id = Math.floor(Math.random() * 100);
            id = id.toString()
            this.groups.set(id, { roomsnum, pupils: new Set() });
            return id;
        }
    }

    addPupil(groupId, pupil) {
        if (this.groups.has(groupId) === false) {
            throw new Error("there is no such group");
            
        } else {
            this.groups.get(groupId).pupils.add(pupil);
        }
    }

    removePupil(groupId, pupilId) {
        if (this.groups.has(groupId) === false) {
            throw new Error("there is no such group");
            
        } else {
            for (let item of this.groups.get(groupId).pupils) {
                if (item.id === pupilId) {
                    return this.groups.get(groupId).pupils.delete(item);
                }
            }
        }
    }

    update(groupId, obj) {
        if (typeof groupId !== "string" || typeof obj !== "object") {
            throw new Error("id must be a string type second parameter object type");
            
        } else {
            if (this.groups.has(groupId)) {
                
                this.groups.get(groupId).roomsnum = obj.room;
            } else {
                throw new Error("We havn't such group!");
            }
        }
    }

    read(gid) {
        if (typeof gid !== "string") {
            throw new Error("validation problem");
            
        }
        else {
            if (this.groups.has(gid)===false) {
                throw new Error("group not found")
                
            }
            else {
                let groupInfo = {
                    'id': gid,
                    'room': this.groups.get(gid).roomsnum
                };
                return groupInfo;
            }
        }
    }
    readAll(param){
        if(param){
            throw new Error("this method does'n need a parameter");
        }else{
            let arr = [];
            for (let [key, value] of this.groups) {
                arr.push(value);
            }
            return arr
        }
    }
}