export class Validate {
    static validator(data, schema) {
        if (data && typeof data === 'object' && schema && typeof schema === 'object') {
            let result = true;

            for (let property in schema) {
                if (data.hasOwnProperty(property)) {
                    let value = data[property];
                    if (typeof value === schema[property]) {
                        result = true;
                    } 
                    else if (Array.isArray(value)) {
                        for(let prop in value){
                            result = Validate.validator(value[prop], schema[property][0]);
                            if (!result) {
                                break;
                            }
                        }

                        if (!result) {
                            break;
                        }
                    } 
                    else if (typeof value === 'object' && !Array.isArray(value)) {
                        
                        result = Validate.validator(data[property], schema[property]);
                        if (!result) {
                            break;
                        }
                    } 
                    
                    
                    
                    else {
                        result = false;
                        break;
                    }
                } 
                
                else {
                    throw new Error('data doesn\'t have all properties');
                }
            }
            return result;
        } else {
            return false;
        }
    }

    static validateagain(data){
        var dateformat = new RegExp(/^\d{2}[./-]\d{2}[./-]\d{4}$/)
        if(data.sex !=='male' && data.sex !=='femail'){
            throw new Error("parameter must be male or female (we are not transphobic)");
        }
        if (data.dateOfBirth && dateformat.test(data.dateOfBirth) === false) {
            throw new Error("not the rigth date format");
        }

        if(data.description && typeof data.description !== 'string') {
            throw new Error("description is not required but must be a string");
        }
    }
}
