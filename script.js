document.addEventListener('DOMContentLoaded',()=>{
  const nameInput = document.getElementById('nameInput');
  const nameForm = document.getElementById('nameForm');
  const greeting = document.getElementById('greeting');
  const timeEl = document.getElementById('time');
  const incBtn = document.getElementById('incBtn');
  const decBtn = document.getElementById('decBtn');
  const countEl = document.getElementById('count');

  // load saved state
  const savedName = localStorage.getItem('name') || '';
  const savedCount = parseInt(localStorage.getItem('count')||'0',10);
  nameInput.value = savedName;
  let count = Number.isFinite(savedCount) ? savedCount : 0;
  updateCount();
  updateGreeting();

  nameForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = nameInput.value.trim();
    localStorage.setItem('name', name);
    updateGreeting();
  });

  incBtn.addEventListener('click', ()=>{ count++; saveCount(); updateCount(); });
  decBtn.addEventListener('click', ()=>{ count--; saveCount(); updateCount(); });

  function updateGreeting(){
    const name = (nameInput.value||localStorage.getItem('name')||'').trim();
    if(name) greeting.textContent = `Hello, ${name}.`;
    else greeting.textContent = 'Hello — stranger.';
  }

  function saveCount(){ localStorage.setItem('count', String(count)); }
  function updateCount(){ countEl.textContent = String(count); }

  // clock
  function tick(){
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString();
  }
  tick();
  setInterval(tick,1000);
});
