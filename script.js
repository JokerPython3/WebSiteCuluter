const display = document.getElementById('dis_ar');
const buttons = document.querySelectorAll('#cul button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const btnValue = button.textContent;
    
    if (btnValue === 'C') {
      display.textContent = '';
    } else if (btnValue === 'DEL') {
      display.textContent = display.textContent.slice(0, -1);
    } else if (btnValue === '=') {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    } else {
      display.textContent += btnValue;
    }
  });
});
