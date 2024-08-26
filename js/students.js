export default class Student {
  constructor(lastname, name, surname, birthDate, workStart, post, endWork) {
    this.lastname = lastname;
    this.name = name;
    this.surname = surname;
    this.workStart = workStart;
    this.birthDate = birthDate;
    this.endWork = endWork;
    this.post = post;
  }

  // getFIO() {
  //   return this.lastname + " " + this.name + " " + this.surname;
  // }

  get fio() {
    return this.lastname + " " + this.name + " " + this.surname;
  }

  getBirthDateString() {
    let day = `0${this.birthDate.getDate() + 1}`.slice(-2);
    let month = `0${this.birthDate.getMonth() + 1}`.slice(-2);
    let year = this.birthDate.getFullYear();
    return day + "." + month + "." + year;
  }

  getWorkPeriod() {
    let yearOfStudy = 4;
    const currentYear = new Date();
    let courseStudent = currentYear.getFullYear() - this.workStart;
    if (courseStudent === yearOfStudy || courseStudent > yearOfStudy) {
      return "Закончил ";
    } else {
      return currentYear.getFullYear() - this.workStart;
    }
  }

  getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();

    if (
      today.getMonth() < this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() < this.birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
}

// for (Student of Students) {
//   console.log(Student.getBirthDateString());
// }

// console.log(Students[2].getAge());

// function getFIO(Student) {
//   return `${Student.lastname} ${Student.name} ${Student.surname}`;
// }

// function getWorkPeriod(Student) {
//   return (currentYear = new Date().getFullYear() - Student.workStart);
// }

// function getBirthDateString(Student) {
//   let day = Student.birthDate.getDate();
//   let month = `0${Student.birthDate.getMonth() + 1}`.slice(-2);
//   let year = Student.birthDate.getFullYear();
//   return day + "." + month + "." + year;
// }

// function getAge(Student) {
//   const today = new Date();

//   let age = today.getFullYear() - Student.birthDate.getFullYear();

//   if (
//     today.getMonth() < Student.birthDate.getMonth() ||
//     (today.getMonth() === Student.birthDate.getMonth() &&
//       today.getDate() < Student.birthDate.getDate())
//   ) {
//     age--;
//   }

//   return age;
// }

// console.log(getAge(Student));
