interface IUser {
    name: string;
    rollNo: number;
    course: string;
    totalAttendanceCount?: number;
    timestamp?: Date;
    // getAttendance(traineeRollNo:number);
}

class Trainee implements IUser {
    name: string;
    rollNo: number;
    course: string;
    totalAttendanceCount: number;
    timestamp?: Date;
    constructor(uName: string, uRollNo: number, uCourse: string) {
        this.name = uName;
        this.rollNo = uRollNo;
        this.course = uCourse;
        this.totalAttendanceCount = 0;
        this.timestamp = new Date();

    }
}

function setInputData() {
    var traineeName = (document.getElementById('uname') as HTMLInputElement).value;
    var traineeRollNo = parseInt((document.getElementById('uRollNo') as HTMLInputElement).value);
    var traineeCourse = (document.getElementById('ucourse') as HTMLInputElement).value;

    if(traineeName == null || traineeName == "") {
        document.getElementById("checkName").innerHTML = "Name cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkName").innerHTML = "";
    }
    if(traineeRollNo == null || isNaN(traineeRollNo)) {
        document.getElementById("checkRollNo").innerHTML = "Roll no cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkRollNo").innerHTML = "";
    }
    if(traineeCourse == null || traineeCourse == "") {
        document.getElementById("checkCourse").innerHTML = "Course cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkCourse").innerHTML = "";
    }

    const obj1 = new Trainee(traineeName, traineeRollNo, traineeCourse);
    for (let i = 0; i < trainees.length; i++) {
        if(trainees[i].rollNo == obj1.rollNo)
        {
            document.getElementById("duplicateData").innerHTML = "Data already exists!"
            return false;
        }
        else
        {
            document.getElementById("duplicateData").innerHTML = "";
        }
    }
    trainees.push(obj1);
    this.displayTrainees();
}

function validateUser() {
    var traineeName = (document.getElementById('uname') as HTMLInputElement).value;
    var traineeRollNo = parseInt((document.getElementById('uRollNo') as HTMLInputElement).value);
    var traineeCourse = (document.getElementById('ucourse') as HTMLInputElement).value;
    
    if(traineeName == null || traineeName == "") {
        document.getElementById("checkName").innerHTML = "Name cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkName").innerHTML = "";
    }
    if(traineeRollNo == null || isNaN(traineeRollNo)) {
        document.getElementById("checkRollNo").innerHTML = "Roll no cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkRollNo").innerHTML = "";
    }
    if(traineeCourse == null || traineeCourse == "") {
        document.getElementById("checkCourse").innerHTML = "Course cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkCourse").innerHTML = "";
    }
}

function validateRoll() {
    var roll = parseInt((document.getElementById("traineeRollNo") as HTMLInputElement).value);
    if(roll == null || isNaN(roll))
    {
        document.getElementById("checkTraineeRoll").innerHTML = "Roll No cannot be empty"
        return false;
    }
    else {
        document.getElementById("checkTraineeRoll").innerHTML = "";
    }
}

const trainees: Array<IUser> = [];

function getAttendance() {
    var roll = parseInt((document.getElementById("traineeRollNo") as HTMLInputElement).value);
    if(roll == null || isNaN(roll))
    {
        document.getElementById("checkTraineeRoll").innerHTML = "Roll No cannot be empty"
        return false;
    }
    else {
        document.getElementById("checkTraineeRoll").innerHTML = "";
    }
    for (let i = 0; i < trainees.length; i++) {
        if (trainees[i].rollNo == roll) {
            document.getElementById("rollDoesNotExist").innerHTML = ""
            trainees[i].totalAttendanceCount += 1;
            trainees[i].timestamp = new Date();
        }
        else {
            document.getElementById("rollDoesNotExist").innerHTML = "Data does not exist!";
        }
    }
    this.displayTraineeAttendance(roll);
    this.displayTrainees();
}

function displayTrainees() {
    let para = document.getElementById("table-content");
    para.innerHTML = ``;
    // let text = '';
    let text2 = '';
    for (let i = 0; i < trainees.length; i++) {
        // text += trainees[i].rollNo + " " + trainees[i].name + " " + trainees[i].course + "<br>";
        // document.getElementById("displayUsers").innerHTML = text;
        text2 += `<tr><td>${trainees[i].rollNo}</td>
        <td>${trainees[i].name}</td>
        <td>${trainees[i].course}</td>
        <td>${trainees[i].totalAttendanceCount}</td>
        <td>${trainees[i].timestamp}</td>
        </tr>
        `
        para.innerHTML = text2;
    }
}

function displayTraineeAttendance(roll: number) {
    let para = document.getElementById("table-content2");
    para.innerHTML = ``
    let text = '';
    for (let i = 0; i < trainees.length; i++) {
        if (trainees[i].rollNo == roll) {
            // text = trainees[i].rollNo + " " + trainees[i].name + " " + trainees[i].totalAttendanceCount + "<br>";
            // document.getElementById("displayAttendance").innerHTML = text;
            text = `<tr><td>${trainees[i].rollNo}</td>
            <td>${trainees[i].name}</td>
            <td>${trainees[i].course}</td>
            <td>${trainees[i].totalAttendanceCount}</td>
            <td>${trainees[i].timestamp}</td>
            </tr>
            `
            para.innerHTML = text;
            break;
        }
    }
}

// const addUser = (obj:IUser) : IUser => {
//     trainees.push(obj);
//     return obj;
//     }

// const obj = new Trainee("Nisha",2,"Typescript");
// const obj1 = new Trainee("Ankita",3,"Java");
// console.log(addUser(obj));
// console.log(addUser(obj1));
// obj.getAttendance(2);
// obj1.getAttendance(3);
// obj.getAttendance(2);
// obj1.getAttendance(3);