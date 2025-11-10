const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element) => {
  element.addEventListener('input', async () => {
    try {
      const response = await fetch('js/converter.json');
      const data = await response.json();
      const usd = data.usd;
      const eur = data.eur;
      const floatDot = 2

      if (element.id === 'som') {
        usdInput.value = (somInput.value / usd).toFixed(floatDot);
        eurInput.value = (somInput.value / eur).toFixed(floatDot);
      } else if (element.id === 'usd') {
        somInput.value = (usdInput.value * usd).toFixed(floatDot);
        eurInput.value = ((usdInput.value * usd) / eur).toFixed(floatDot);
      } else if (element.id === 'eur') {
        somInput.value = (eurInput.value * eur).toFixed(floatDot);
        usdInput.value = ((eurInput.value * eur) / usd).toFixed(floatDot);
      }
    } catch (error) {
      console.error('Ошибка при конвертации:', error);
    }
  });
};


converter(somInput);
converter(usdInput);
converter(eurInput);
