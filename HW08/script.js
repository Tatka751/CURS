/*У цьому завданні вам необхідно створити клас Student та розробляти методи
всередині цього класу.
1.У стдентів повинні бути наступні властивості: university, course, fullName,
вони передаються при створенні студента(в конструктор)

2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
курс, учбовий заклад та імені студента.

3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4,
4, 5]

4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку
студенту. Після того, як оцінка поставлена, геттер повинен повернути масив
this.marks -> [5, 4, 4, 5, 5]

5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього
методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких
помилок, просто повертається завжди null замість масиву оцінок)

7. Створіть метод this.recover, який дозволить поновити студента

*/
document.writeln(`Результати в консолі`);
class Student {
  
    constructor(university, course, fullName, marks, enable){
        this.university = university,
        this.course = course,
        this.fullName = fullName,
        this.marks = marks,
        this.enable = true;
    }

    getInfo(){
        if (this.enable === true){
        console.log(`${this.university} cтудент ${this.course}  курсу  ${this.fullName}`);
        } else {
            console.log(`Студент не активний`);
        }
    }

    set setMark(value) { 
        if (this.enable === true){
            this.marks.push(Number(value));
            console.log(this.studentMarks);
        } else {
            console.log(`Студент не активний`);
        }
        
      
    }

    get studentMarks() {
        if (this.enable === true){
        return console.log (`${this.fullName} має оцінки:  ${this.marks}`);
        } else {
            console.log(`Студент не активний`);
        }
    }

    getAverageMark(){
        let sum = 0;
        let avg = 0;
        if (this.enable === true){
       
        for ( let i = 0; i < this.marks.length; i++ ){
            sum = sum + this.marks[i];
        }
        avg = Math.round( sum / this.marks.length * 100) / 100;
        console.log(`Cередня оцінка студента ${this.fullName}:   ${avg}`);

        } 
        return avg;
   }

    dismiss(){
        this.enable = false;
        console.log(`Cтудента вимкнено`);
    }

    recover(){
        this.enable = true;
        console.log(`Cтудента активовано`);
    }




    
}

let Ostap = new Student("Вища Школа Психотерапі їм.Одеса", 1, "Остап Родоманський Бендер", [2, 4, 4, 3, 5]);

let Anna = new Student("Вища школа мистецтв м.Київ", 4, "Шевченко Анна Марківна ");
Anna.marks = [5, 4, 4, 5, 5];

/*

1.Створіть новий клас BudgetStudent, який повністю наслідує клас Student
2. Бюджетний студент може отримати стипендію за допомогою методу
this.getScholarship.
Отримання стипендії супроводжується виведенням інформації в консоль: Ви
отримали 1400 грн. стипендії
3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе
створення об'єкту. Підказка: викликайте його в constructor
4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього
вище або дорівнює 4.0
5. Якщо студента виключено, він не отримує стипендію (думаю це було і так
очевидно :) )

*/

class BudgetStudent extends Student {
   
    constructor(university, course, fullName, marks){
        super(university, course, fullName, marks);
        this.show = setInterval(() => this.getScholarship(), 3000);
    }  
    
    
    getScholarship(){
        if (this.enable === true && this.getAverageMark() >= 4.0){
            console.log(`${this.fullName} отримує стипендію 1400 грн.`);
        } else {
            console.log(`${this.fullName} не отримує стипендію `);
        }

    }
   
}
let Katya = new BudgetStudent("Академія неврології", 5, "Гринько Катерина Вікторівна ", [5,5,4,3,5,5,5,5,5,5]);






