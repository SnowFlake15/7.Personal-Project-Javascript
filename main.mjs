import { SubjectsModel} from './subjectsmodel.mjs';
import { LMSModel} from './lmsmodel.mjs';
import { TeachersModel} from './teachersmodel.mjs';
import { PupilsModel } from './pupilsmodel.mjs';
import { GroupsModel } from './groupsmodel.mjs';
import { GradebooksModel } from './gradebooksmodel.mjs';



const georgian = new SubjectsModel({
    title: 'Georgian',
    lessons: 15,
    description: 'mom language'
});

const math = new SubjectsModel({
    title: 'Math',
    lessons: 15,
    description: 'plus minus'
});
const geo = new SubjectsModel({
    title: 'Geo',
    lessons: 25,
    description: 'rivaa'
});

// will return subjectId

console.log(georgian);
console.log(math.id);
console.log(geo.id);

const lms = new LMSModel();
lms.add(georgian);
lms.add(math);
lms.remove(georgian);

console.log(lms);

// will return true or false. Answer will be true if we added this subject to lms
console.log(lms.verify(math));

// will return array of registered subjects
console.log(lms.readAll());

// Create new Teacher from Teacher's data
let data = {
    name: {
        first: "John",
        last: "Doe"
    },
    image: "ugly",
    dateOfBirth: "01.12.2020",
    emails: [
        {
            "email": "may@gmail.com",
            "primary": true
        },
        {
            "email": "oter@mail.com",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "85868866586",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "string"
        }
    ],
    // description: "description",
}

let data2 = {
    name: {
        first: "langeris",
        last: "hihi"
    },
    image: "portals",
    dateOfBirth: "02.03.2000",
    emails: [
        {
            "email": "ttttt",
            "primary": true
        },
        {
            "email": "ttttt",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "aaaaa"
        }
    ],
    // description: "description",
    
}


let newTeacherInfo = {
    name: {
        first: "teacher",
        last: "teacherlastaname"
    },
    image: "adf",
    dateOfBirth: "01.11.2020",
    emails: [
        {
            "email": "ttttt",
            "primary": true
        },
        {
            "email": "ttttt",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "111111111",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "aaaaa"
        }
    ],
    
}
// Create new Teacher from Teacher's data
const teachers = new TeachersModel();

// Create a new teacher
let teacherId = teachers.add(data);
const teacherId2 = teachers.add(data2);
console.log(teacherId2);


// // will return Teachers data including teacher's id
console.log(teachers.read(teacherId));

// // will update Teacher. This method should use the same validation as a constructor method
 teacherId = teachers.update(teacherId, newTeacherInfo);
 console.log(teachers.read(teacherId));
// // will remove techer
// teachers.remove(teacherId);
// console.log(teachers.read(teacherId));
const pupildata = {
    name: {
        first: "juno",
        last: "dunno"
    },
    image: "afewfa",
    dateOfBirth: "02.03.2019",
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male",
}

const updatedProfile = {
    name: {
        first: "pupil2",
        last: "pupil2lastaname"
    },
    image: "strifffffff",
    dateOfBirth: "02.03.2019",
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male",
}

const pupils = new PupilsModel();
console.log(pupils)
// Create a new pupil
const pupil = pupils.add(pupildata);
console.log(pupil)
console.log(pupils)
// will return Pupils data including pupil's id
pupils.read(pupil.id);

// will update Pupil. This method should use the same validation as a constructor method
pupils.update(pupil.id, updatedProfile);
console.log(pupils)

// will remove pupil
pupils.remove(pupil.id);

const room = 236;
const groups = new GroupsModel();

// Create a new group
const groupId = groups.add(room);
console.log(groupId)
// Add this pupil to this group
groups.addPupil(groupId, pupil);
console.log(groups.readAll());
// Remove this pupil from this group
groups.removePupil(groupId, pupil.id);



// Update room for this group
groups.update(groupId, {
  room: 237
});

// Read information about group
console.log(groups.read(groupId));
// {
//   id: 'JEF5H43H'
//   room: 237
// }

// It will return array of groups
console.log(groups.readAll());
console.log(groupId)

const pupilId = pupil.id;
const teachersId = teacherId;
// const gradebooks = new GradeBooksModel(groups, teachers, lms);
const gradebooks = new GradebooksModel(groups, teachers, lms);
const level = 2;

const gradebook = gradebooks.add(level, groupId);

console.log(gradebook);
const record = {
  pupilId: pupilId,
  teacherId: teachersId,
  subjectId: georgian.id,
  lesson: 3,
  mark: 10
};


console.log(gradebooks.addRecord(gradebook, record));



const oliver = gradebooks.read(gradebook, pupilId);
console.log(oliver);
const students = gradebooks.readAll(gradebook); // It will return the array of objects
console.log(students);