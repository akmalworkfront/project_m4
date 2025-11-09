const emailField = document.querySelector('#gmail_input');
const validateButton = document.querySelector('#gmail_button');
const validateResult = document.querySelector('#gmail_result');

const regExp = /^(?![.-])[A-Za-z0-9.-]+@(?![-.])[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/i

// const regExp = /^(?![.-])[A-Za-z0-9._+-]+@gmail\.com$/i // Я немного не понял ТЗ. Нужна строгая проверка именно на "gmail"? Если да, то после собачки явно указываем домен "gmail"

if (validateButton) {

  validateButton.onclick = () => {
    const format = emailField.value.trim().toLowerCase();

    if (format === '') {
      emailField.closest('.input').classList.remove('success');
      emailField.closest('.input').classList.add('error');
      validateResult.innerHTML = 'Поле не может быть пусм';
    } else if (regExp.test(format)) {
      emailField.closest('.input').classList.remove('error');
      emailField.closest('.input').classList.add('success');
      validateResult.innerHTML = 'Email валиден';
    } else {
      emailField.closest('.input').classList.remove('success');
      emailField.closest('.input').classList.add('error');
      validateResult.innerHTML = 'Email введен неверно';
    }

  };
}


