/**
 Вам необхідно виконати завдання з популярного циклу челенджів:
JS30.
(Радимо після курсу – пройти його повністю, він безкоштовний)
Необхідно написати програму, яка буде зчитувати з клавіатури
натискання клавіш та відтворювати унікальний звук для кожної
клавіши (клавіши можуть бути будь-які, звуки можуть
 */
 
const arrSounds = ['KeyA', 'KeyB', 'KeyC', 'KeyD', 'KeyE', 'KeyF', 'KeyG', 'KeyH', 
    'KeyI', 'KeyJ', 'KeyK', 'KeyL', 'KeyM', 'KeyN', 'KeyO', 'KeyP', 'KeyQ', 'KeyR',
    'KeyS', 'KeyT','KeyU', 'KeyV', 'KeyW', 'KeyX', 'KeyY', 'KeyZ']; 

document.addEventListener('keydown',eventKeyboard);

function eventKeyboard(event){

   if (arrSounds.includes(event.code)){
    let audio = new Audio(`sounds/${event.code}.wav`);
    audio.play();
   }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
     button.addEventListener('click', (event) => {
        
         if (arrSounds.includes(event.target.id)){
         let audio = new Audio(`sounds/${event.target.id}.wav`);
         audio.play();
        };
     });
});
