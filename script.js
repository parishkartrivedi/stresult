document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const rollNumberInput = document.getElementById('roll-number');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');
    const studentName = document.getElementById('student-name');
    const studentSubject = document.getElementById('student-subject');
    const studentMarks = document.getElementById('student-marks');
    const studentRemarks = document.getElementById('student-remarks');

    searchButton.addEventListener('click', function() {
        const rollNumber = rollNumberInput.value;

        // JSON data for 200 students
        const studentData = {
            "106": {
                "name": "Chris Martin",
                "subject": "Chemistry",
                "marks": 85,
                "remarks": "Very Good"
            }
        };

        if (studentData[rollNumber]) {
            const student = studentData[rollNumber];
            studentName.textContent = student.name;
            studentSubject.textContent = student.subject;
            studentMarks.textContent = student.marks;
            studentRemarks.textContent = student.remarks;
            resultContainer.style.display = 'block';
        } else {
            alert('Student not found. Please check the roll number.');
        }
    });
});
