// Tabs
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Roadmap animation
const items=document.querySelectorAll('.item');
window.addEventListener('scroll',()=>{
  items.forEach(i=>{
    if(i.getBoundingClientRect().top<window.innerHeight-50){
      i.classList.add('show');
    }
  });
});

// Modal
function openModal(){document.getElementById('modal').style.display='block'}
function closeModal(){document.getElementById('modal').style.display='none'}

// Scroll
function scrollToEnroll(){
  document.getElementById('enroll').scrollIntoView({behavior:'smooth'});
}


