const bar=document.querySelector('.bar');


window.onscroll = () => {
   const scrolled = document.body.scrollTop || document.documentElement.scrollTop;

   const height = document.body.scrollHeight - document.documentElement.clientHeight;

   const indicator = (scrolled / height) * 100;

   console.log(document.body.scrollHeight);
   console.log(document.documentElement.clientHeight);
   console.log(scrolled);
   // console.log(indicator);
   bar.style.width = indicator + '%';
   bar.innerHTML = indicator.toFixed(0) + '%'


}