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
      const flatDot = 2

      if (element.id === 'som') {
        usdInput.value = (somInput.value / usd).toFixed(flatDot);
        eurInput.value = (somInput.value / eur).toFixed(flatDot);
      } else if (element.id === 'usd') {
        somInput.value = (usdInput.value * usd).toFixed(flatDot);
        eurInput.value = ((usdInput.value * usd) / eur).toFixed(flatDot);
      } else if (element.id === 'eur') {
        somInput.value = (eurInput.value * eur).toFixed(flatDot);
        usdInput.value = ((eurInput.value * eur) / usd).toFixed(flatDot);
      }
    } catch (error) {
      console.error('Ошибка при конвертации:', error);
    }
  });
};


converter(somInput);
converter(usdInput);
converter(eurInput);
