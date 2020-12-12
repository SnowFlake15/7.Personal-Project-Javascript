
import { Validate } from './validate.mjs';

export class SubjectsModel {
    constructor(object) {
        this.schema = {
            "title": "string",
            "lessons": "number",
            "description": "string"
        }
        if (Validate.validator(object, this.schema)) {
            this.id = Math.floor(Math.random() * 100);
            this.title = object.title;
            this.lessons = object.lessons;
            this.description = object.description;
            
        } else {
            throw new Error('subject is not  valid ');
        }
    }
}