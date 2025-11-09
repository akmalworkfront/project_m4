const requester = new XMLHttpRequest();
requester.open('GET', 'js/bio.json');
requester.setRequestHeader('Content-Type', 'application/json');
requester.send();

requester.onload = () => {
  const response = JSON.parse(requester.responseText);
  console.log(`${response.name} ${response.age} лет ${response.status}`);
};
