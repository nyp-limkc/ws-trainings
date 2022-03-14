var student = {
    "name": "Jason",
    "results": [
        {
            "ModuleCode": "EG1234",
            "Grade": "A",
            "Credit": 4
        },
        {
            "ModuleCode": "EG1298",
            "Grade": "B+",
            "Credit": 4
        },
        {
            "ModuleCode": "EG2255",
            "Grade": "C",
            "Credit": 2
        },
    ]
};

var gradeToPoint = {
    "A": 4.0,
    "B+": 3.5,
    "B": 3.0,
    "C+": 2.5,
    "C": 2.0,
    "D+": 1.5,
    "D": 1.0
};

function calculateGPA() {
    var totalCredit =0;
    var totalGradepoint =0;
    for(var i=0; i<student.results.length;i++) {
        var result = student.results[i];
        var grade = result.Grade;
        var credit = result.Credit;
        var point  = gradeToPoint[grade];
        totalGradepoint+=point*credit;
        totalCredit = totalCredit + credit;
    }
    for(var i in student.results) {
        var result = student.results[i];
    }
    student.results.forEach(
        (item)=> {
            var grade = item.Grade;
            var credit = item.Credit;
            var point  = gradeToPoint[grade];
            totalGradepoint+=point*credit;
            totalCredit = totalCredit + credit;
        }
    )

    var gpa = totalGradepoint/totalCredit;
    console.log("GPA = "+gpa);
}