import Student from "./students.js";
// массив сотрудников
let students = [
  new Student(
    "Иванов",
    "Игорь",
    "Адреевич",
    new Date(1992, 11, 21),
    2020,

    "Исторический факультет"
  ),
  new Student(
    "Кузнева",
    "Мария",
    "Сергеевна",
    new Date(1985, 2, 11),
    2021,

    "'Биологический факультет"
  ),
  new Student(
    "Якунин",
    "Иван",
    "Алексеевич",
    new Date(2001, 7, 4),
    2018,

    "Механико-математический факультет"
  ),
  new Student(
    "Васин",
    "Антон",
    "Андреевич",
    new Date(2000, 7, 1),
    2023,

    "Механико-математический факультет"
  ),
  new Student(
    "Васин",
    "Антон",
    "Андреевич",
    new Date(2012, 7, 1),
    2023,

    "Механико-математический факультет"
  ),
];

const $studentsList = document.getElementById("students-list");
let $studentsListTH = document.querySelectorAll(".studentsTable th");
let column = "fio";
let columnDir = true;
let studentsCopy = [...students];
// Фильрация

let filtrForm = document.getElementById("filtr-form");
let filtrFio = document.getElementById("filtr-fio");
let filtrFaculty = document.getElementById("filtr-faculty");
let startSchool = document.getElementById("filtr-workStart");
let endSchool = document.getElementById("filtr-endWork");
// console.log(filtrFio);
// filtrForm.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

// TR сотрудника
function newStudentTR(student) {
  const $studentTR = document.createElement("tr");
  let $fioTD = document.createElement("td");
  let $birthDateTD = document.createElement("td");
  let $workStartTD = document.createElement("td");
  let $postTD = document.createElement("td");

  let endWork = student.workStart + 4;
  student.endWork = endWork;
  $fioTD.textContent = student.fio;
  // console.log(endWork);
  $birthDateTD.textContent =
    student.getBirthDateString() + " " + "(" + student.getAge() + " лет)";

  $workStartTD.textContent =
    student.workStart +
    "-" +
    endWork +
    "(" +
    student.getWorkPeriod() +
    " курс)";

  $postTD.textContent = student.post;

  $studentTR.append($fioTD);
  $studentTR.append($birthDateTD);
  $studentTR.append($workStartTD);
  $studentTR.appendChild($postTD);

  return $studentTR;
}

// Фильтрация
filtrFio.addEventListener("input", function () {
  students = studentsCopy.filter(function (student) {
    if (student.fio.includes(filtrFio.value)) return true;
  });
  render();
});
filtrFaculty.addEventListener("input", function () {
  students = studentsCopy.filter(function (student) {
    if (student.post.includes(filtrFaculty.value)) return true;
  });
  render();
});
startSchool.addEventListener("input", function () {
  students = studentsCopy.filter(function (student) {
    if (student.workStart == startSchool.value) return true;
  });
  render();
});
endSchool.addEventListener("input", function () {
  students = studentsCopy.filter(function (student) {
    if (student.endWork == endSchool.value) return true;
  });
  render();
});

// Получить сортировку массива по параметрам
function sortStudents(prop, dir) {
  const studentsCopy = [...students];
  return studentsCopy.sort(function (studentA, studentb) {
    if (
      !dir === false
        ? studentA[prop] < studentb[prop]
        : studentA[prop] > studentb[prop]
    )
      return -1;
  });
}
// Отрисовка
function render() {
  let studentsCopy = [...students];

  studentsCopy = sortStudents(column, columnDir);

  $studentsList.innerHTML = "";

  for (const student of studentsCopy) {
    $studentsList.append(newStudentTR(student));
  }
}

// события сортировки при клике
$studentsListTH.forEach((element) => {
  element.addEventListener("click", function () {
    column = this.dataset.column;
    columnDir = !columnDir;

    render();
  });
});

// Добавление

document
  .getElementById("add-student")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // $studentsList.innerHTML = "";
    students.push(
      new Student(
        document.getElementById("input-lastname").value,
        document.getElementById("input-name").value,
        document.getElementById("input-surname").value,
        new Date(document.getElementById("input-birthDate").value),
        Number(document.getElementById("input-workStart").value),
        document.getElementById("input-post").value
      )
    );
    render();
    const form = document.getElementById("add-student");
    form.reset();
  });

render();
