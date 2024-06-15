const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = " HAHAHA you cant press yes, I realize now that my actions or words might have contributed to your feelings of stress, and for that, I sincerely apologize. Please know that it was never my intention to make you feel this way. You mean the world to me, and your happiness and well-being are of utmost importance.Please let me know if there's anything I can do to make things better or if you'd like to talk about what happened. I am here to listen, understand, and support you in any way I can. Again, I'm truly sorry for causing you stress. I love you very much, and I'll do whatever it takes to make things right.  From yr hensem boy Haikal manis 😘";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRhaGszbmNzMGR4Y2djMHRwdGl5N2ppZGlrMjFrbnkwMTFhNnl4ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qYEwsbZWBk2HmIPZuL/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});