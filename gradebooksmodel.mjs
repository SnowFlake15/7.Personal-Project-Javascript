import { Validate } from './validate.mjs';

export class GradebooksModel {
    constructor(groups, teachers, lms) {
        this.grades = new Map();
        this.groups = { groups };
        this.teachers = { teachers };
        this.lms = { lms };
    }

    add(level, gradeId) {
        if (typeof level !== 'number' || typeof gradeId !== 'string') {
            throw new Error('validation error');
            
        } else {
            let gradeId = Math.floor(Math.random() * 100);
            gradeId = gradeId.toString()
            this.grades.set(gradeId, { level, gradeId })
            return gradeId;
        }
    }
    clear(parameter) {
        if (parameter) {
            throw new Error("this method doesn't need parameters");
        } else {
            this.grades.clear();
        }
    }

    addRecord(gradebookId, record) {
        if(typeof gradebookId !== "string" || typeof record !== "object"){
            throw new Error("first parameter should be a string and second shoud be an object");
        }else if(typeof gradebookId === "string" && typeof record === "object"){
            this.grades.set("records",record);
            return this.grades;
        }

    }
    readAll(gradebookId){
        if(typeof gradebookId !== "string"){
            throw new Error("parameter should be a string");
            

        }else if(this.groups.get("id") !== gradebookId){
            throw new Error("nothing with this id");
        }
        else if(this.groups.get("id") == gradebookId){
            return Array.from(this.grades);
        }
    }
    read(gradebookId, pupilId){
        if(typeof gradebookId !== "string" || typeof pupilId !== "number"){

         throw new Error ("first parameter should be a string and second object")
        }
        else {
            return this.grades};
    }

    readAll(gradebookId){
        if(typeof gradebookId !== "string"){
            throw new Error ("type of gradebookId should be string");
        }else if (typeof gradebookId === "string"){
            return Array.from(this.grades);
        }
    }

}