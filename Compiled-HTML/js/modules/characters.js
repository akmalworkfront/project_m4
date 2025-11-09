(()=>{fetch("js/characters.json").then(c=>c.json()).then(c=>{c.forEach(a=>{document.querySelector(".characters-list").innerHTML+=`
          <div class="character-card">
            <div class="character-photo">
              <img src="${a.person_photo}" alt="${a.name}">
            </div>
            <h3 class="character-name">${a.name}, <br> \u0432\u043E\u0437\u0440\u0430\u0441\u0442: ${a.age}</h3>
            <p class="character-desc">${a.short_desc}</p>

          </div>
        `})}).catch(c=>console.error("\u041E\u0448\u0438\u0431\u043A\u0430:",c));})();
