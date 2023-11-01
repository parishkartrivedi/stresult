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

        // JSON data for 16 students
        const studentData = {
            "101": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "102": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "103": {
                "name": "Alice Johnson",
                "subject": "History",
                "marks": 75,
                "remarks": "Good"
            },
            "104": {
                "name": "Bob Williams",
                "subject": "English",
                "marks": 91,
                "remarks": "Excellent"
            },
            "105": {
                "name": "Eva Davis",
                "subject": "Physics",
                "marks": 78,
                "remarks": "Good"
            },
            "106": {
                "name": "Chris Martin",
                "subject": "Chemistry",
                "marks": 85,
                "remarks": "Very Good"
            },
            "107": {
                "name": "Sara Brown",
                "subject": "Geography",
                "marks": 82,
                "remarks": "Very Good"
            },
            "108": {
                "name": "Michael Taylor",
                "subject": "Biology",
                "marks": 89,
                "remarks": "Excellent"
            },
            "109": {
                "name": "Olivia Evans",
                "subject": "Computer Science",
                "marks": 93,
                "remarks": "Excellent"
            },
            "110": {
                "name": "William Johnson",
                "subject": "Art",
                "marks": 77,
                "remarks": "Good"
            },
            "111": {
                "name": "Mia Wilson",
                "subject": "Physical Education",
                "marks": 94,
                "remarks": "Excellent"
            },
            "112": {
                "name": "Liam Moore",
                "subject": "Music",
                "marks": 85,
                "remarks": "Very Good"
            },
            "113": {
                "name": "Sophia Lee",
                "subject": "Social Studies",
                "marks": 80,
                "remarks": "Good"
            },
            "114": {
                "name": "James Johnson",
                "subject": "Chemistry",
                "marks": 91,
                "remarks": "Excellent"
            },
            "115": {
                "name": "Ava Clark",
                "subject": "Math",
                "marks": 98,
                "remarks": "Outstanding"
            },
            "116": {
                "name": "Noah Garcia",
                "subject": "History",
                "marks": 87,
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
