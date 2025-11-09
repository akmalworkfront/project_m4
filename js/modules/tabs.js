let tabsTrigger = document.querySelectorAll('.tab_content_item');
let tabsCalled = document.querySelectorAll('.tab_content_block');

if (tabsTrigger.length && tabsCalled.length) {

  tabsCalled[0].classList.add('active')

  tabsTrigger.forEach((item, index) => {

    if (index === 0) {
      item.classList.add('tab_content_item_active');
    }

    item.onclick = (e) => {
      let dataNameTrigger = item.getAttribute('data-name');
      tabsTrigger.forEach(el => el.classList.remove('tab_content_item_active'));

      item.classList.add('tab_content_item_active')
      tabsCalled.forEach((item) => {
        let calledDataName = item.getAttribute('data-name')
        if (calledDataName === dataNameTrigger) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })

    }
  })
}



