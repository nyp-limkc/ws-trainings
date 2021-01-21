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
    "D": 1.0,
};

function calculateGPA() {
    var totalCredit = 0;
    var totalGradepoint = 0;
    var results = student.results;
    
    results.forEach((result) =>{
        var grade = result.Grade;   //"A", "B+", "B".. "D"
        var credit = result.Credit;
        totalCredit+=credit;
        var point = gradeToPoint[grade];
        totalGradepoint+=point*credit;
    })

    var gpa = totalGradepoint/totalCredit;        
    console.log("GPA for "+student.name+" is "+ gpa);
}