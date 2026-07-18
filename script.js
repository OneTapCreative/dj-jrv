const button=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
button?.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('quote-form')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);
const subject=`DJ Quote Request - ${d.get('type')||'Event'} - ${d.get('name')||''}`;
const body=[`Name: ${d.get('name')||''}`,`Phone: ${d.get('phone')||''}`,`Email: ${d.get('email')||''}`,`Preferred contact: ${d.get('contact')||''}`,`Event date: ${d.get('date')||''}`,`Event type: ${d.get('type')||''}`,`Guest count: ${d.get('guests')||''}`,`Venue or city: ${d.get('venue')||''}`,'','Event details:',d.get('details')||''].join('\n');
location.href=`mailto:norcaljv209@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});