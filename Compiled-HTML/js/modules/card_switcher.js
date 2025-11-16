(()=>{var r=document.querySelectorAll(".inner_card_switcher .btn"),a=document.querySelector(".card"),s=[],c=[],o=0,d=async()=>{try{let t=await fetch("https://jsonplaceholder.typicode.com/todos");if(!t.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430: ${t.status}`);let e=await fetch("https://jsonplaceholder.typicode.com/posts");if(!e.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430: ${e.status}`);s=await t.json(),c=await e.json(),n(o)}catch(t){console.log("\u041E\u0448\u0438\u0431\u043A\u0430:",t)}},n=t=>{a.innerHTML=`
    <p>Card order: ${t+1}</p>
    <p>user Id: ${s[t].userId}</p>
    <p>${s[t].title}</p>
    <p>${s[t].completed}</p>
  `};d().then(()=>{console.log("\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u0442\u043E\u0432:",c),r.forEach(t=>{t.onclick=e=>{e.target.id==="btn-prev"&&(o--,o<0&&(o=s.length-1),n(o)),e.target.id==="btn-next"&&(o++,o>=s.length&&(o=0),n(o))}})});})();
