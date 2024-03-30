// Create a class named CodeMentor
class CodeMentor {
    constructor() {
        this.students = [];
    }

    // Method: enroll a new student
    enrollStudent(student) {
        this.students.push(student);
        console.log(`Enrolled student: ${student}`);
    }

    // Method: remove a student from enrollment
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
            console.log(`Removed student: ${student}`);
        } else {
            console.log(`Student ${student} is not found.`);
        }
    }

    // Method: list all enrolled students
    listStudents() {
        console.log("Enrolled students:");
        this.students.forEach(student => {
            console.log(student);
        });
    }
}

// Create an instance of CodeMentor named myCodeMentor
const myCodeMentor = new CodeMentor();

// Enroll students
myCodeMentor.enrollStudent("Alice");
myCodeMentor.enrollStudent("Bob");
myCodeMentor.enrollStudent("Charlie");

// List all enrolled students
myCodeMentor.listStudents();

// Remove a student from enrollment
myCodeMentor.removeStudent("Bob");

// List all enrolled students after removal
myCodeMentor.listStudents();
