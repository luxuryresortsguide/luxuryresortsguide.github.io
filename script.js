function toggleChat(){
  const bot=document.getElementById("chatbot");
  bot.style.display = bot.style.display==="block" ? "none" : "block";
}

function send(){
  const input=document.getElementById("msg");
  const chat=document.getElementById("chat");
  let q=input.value.trim().toLowerCase();
  if(!q) return;

  chat.innerHTML+=`<div class="user">${input.value}</div>`;
  input.value="";

  let a="Sandals Resorts offer luxury all-inclusive vacations for couples.";

  if(q.includes("price")||q.includes("cost")) a="Pricing varies by season and location but includes most luxury amenities.";
  else if(q.includes("honeymoon")) a="Sandals Resorts are among the top honeymoon resorts worldwide.";
  else if(q.includes("location")) a="Sandals Resorts are located in Jamaica, Bahamas, Saint Lucia and more.";
  else if(q.includes("adult")) a="Yes, Sandals Resorts are adults-only.";
  else if(q.includes("included")) a="Dining, drinks, water sports & transfers are included.";

  setTimeout(()=>{
    chat.innerHTML+=`<div class="bot">${a}</div>`;
    chat.scrollTop=chat.scrollHeight;
  },400);
}
