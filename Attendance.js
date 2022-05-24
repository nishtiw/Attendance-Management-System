var Trainee = /** @class */ (function () {
    function Trainee(uName, uRollNo, uCourse) {
        this.name = uName;
        this.rollNo = uRollNo;
        this.course = uCourse;
        this.totalAttendanceCount = 0;
        this.timestamp = new Date();
    }
    return Trainee;
}());
function setInputData() {
    var traineeName = document.getElementById('uname').value;
    var traineeRollNo = parseInt(document.getElementById('uRollNo').value);
    var traineeCourse = document.getElementById('ucourse').value;
    if (traineeName == null || traineeName == "") {
        document.getElementById("checkName").innerHTML = "Name cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkName").innerHTML = "";
    }
    if (traineeRollNo == null || isNaN(traineeRollNo)) {
        document.getElementById("checkRollNo").innerHTML = "Roll no cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkRollNo").innerHTML = "";
    }
    if (traineeCourse == null || traineeCourse == "") {
        document.getElementById("checkCourse").innerHTML = "Course cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkCourse").innerHTML = "";
    }
    var obj1 = new Trainee(traineeName, traineeRollNo, traineeCourse);
    for (var i = 0; i < trainees.length; i++) {
        if (trainees[i].rollNo == obj1.rollNo) {
            document.getElementById("duplicateData").innerHTML = "Data already exists!";
            return false;
        }
        else {
            document.getElementById("duplicateData").innerHTML = "";
        }
    }
    trainees.push(obj1);
    this.displayTrainees();
}
function validateUser() {
    var traineeName = document.getElementById('uname').value;
    var traineeRollNo = parseInt(document.getElementById('uRollNo').value);
    var traineeCourse = document.getElementById('ucourse').value;
    if (traineeName == null || traineeName == "") {
        document.getElementById("checkName").innerHTML = "Name cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkName").innerHTML = "";
    }
    if (traineeRollNo == null || isNaN(traineeRollNo)) {
        document.getElementById("checkRollNo").innerHTML = "Roll no cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkRollNo").innerHTML = "";
    }
    if (traineeCourse == null || traineeCourse == "") {
        document.getElementById("checkCourse").innerHTML = "Course cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkCourse").innerHTML = "";
    }
}
function validateRoll() {
    var roll = parseInt(document.getElementById("traineeRollNo").value);
    if (roll == null || isNaN(roll)) {
        document.getElementById("checkTraineeRoll").innerHTML = "Roll No cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkTraineeRoll").innerHTML = "";
    }
}
var trainees = [];
function getAttendance() {
    var roll = parseInt(document.getElementById("traineeRollNo").value);
    if (roll == null || isNaN(roll)) {
        document.getElementById("checkTraineeRoll").innerHTML = "Roll No cannot be empty";
        return false;
    }
    else {
        document.getElementById("checkTraineeRoll").innerHTML = "";
    }
    for (var i = 0; i < trainees.length; i++) {
        if (trainees[i].rollNo == roll) {
            document.getElementById("rollDoesNotExist").innerHTML = "";
            trainees[i].totalAttendanceCount += 1;
            trainees[i].timestamp = new Date();
            document.getElementById("attendance-table").hidden = false;
            this.displayTraineeAttendance(roll);
            this.displayTrainees();
            return true;
        }
        else {
            document.getElementById("rollDoesNotExist").innerHTML = "Data does not exist!";
            document.getElementById("attendance-table").hidden = true;
        }
    }
}
function displayTrainees() {
    var para = document.getElementById("table-content");
    para.innerHTML = "";
    // let text = '';
    var text2 = '';
    for (var i = 0; i < trainees.length; i++) {
        // text += trainees[i].rollNo + " " + trainees[i].name + " " + trainees[i].course + "<br>";
        // document.getElementById("displayUsers").innerHTML = text;
        text2 += "<tr><td>".concat(trainees[i].rollNo, "</td>\n        <td>").concat(trainees[i].name, "</td>\n        <td>").concat(trainees[i].course, "</td>\n        <td>").concat(trainees[i].totalAttendanceCount, "</td>\n        <td>").concat(trainees[i].timestamp, "</td>\n        </tr>\n        ");
        para.innerHTML = text2;
    }
}
function displayTraineeAttendance(roll) {
    var para = document.getElementById("table-content2");
    para.innerHTML = "";
    var text = '';
    for (var i = 0; i < trainees.length; i++) {
        if (trainees[i].rollNo == roll) {
            // text = trainees[i].rollNo + " " + trainees[i].name + " " + trainees[i].totalAttendanceCount + "<br>";
            // document.getElementById("displayAttendance").innerHTML = text;
            text = "<tr><td>".concat(trainees[i].rollNo, "</td>\n            <td>").concat(trainees[i].name, "</td>\n            <td>").concat(trainees[i].course, "</td>\n            <td>").concat(trainees[i].totalAttendanceCount, "</td>\n            <td>").concat(trainees[i].timestamp, "</td>\n            </tr>\n            ");
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
