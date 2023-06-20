let SUM = 0;
let N = Number(prompt('Введіть число, від якого будемо складати '));
if (Number.isInteger(N) && isNaN(N) == false){
    const nWrite = N;
    let M = Number(prompt('Введіть число, по яке будемо складати якого будемо складати '));
    if (Number.isInteger(M) && isNaN(M) == false && M>N){
        let C = confirm('Чи потрібно пропускати парні числа?');
        for (N; N <= M; N++){
            if (C === false){
                 SUM = SUM + N;
            }
             else{
                 if (N % 2 > 0){
                     SUM = SUM + N;
                 }
                 else {
     
                 }
             }
         }
         document.writeln(`Число, від якого складали :        ${nWrite} <br>`);
         document.writeln(`Число, по яке складали :           ${M} <br>`);
         document.writeln(`Чи були пропущені парні числа :    ${C} <br>`);
         document.writeln(`Число, отрмиане після складання :  ${SUM} <br>`);

    }
} else{
    document.writeln(`Складання не виконано. Перевірте, щоб введені числа були цілими.`);
}


