

// CHANGE AND SAVE THEME TO LOCAL STORAGE
const themeBtn = document.querySelector(".theme__btn");
themeBtn.addEventListener("click", () => {
  if (document.body.className == '') {
    document.body.className = 'dark'
    localStorage.setItem('portfolio__theme', 'dark');
    themeBtn.innerHTML = `<i class="ph ph-sun"></i>`
  } else {
    document.body.className = ''
    localStorage.setItem('portfolio__theme', '');
    themeBtn.innerHTML = `<i class="ph ph-moon"></i>`
  }
})



// GET THEME FROM LOCAL STORAGE AND APPLY ON PAGE LOAD
window.addEventListener('load', () => {
  const saveTheme = localStorage.getItem('portfolio__theme') || ''
  document.body.className = saveTheme
  if (document.body.className == '') {
    themeBtn.innerHTML = `<i class="ph ph-moon"></i>`
  } else {
    themeBtn.innerHTML = `<i class="ph ph-sun"></i>`
  }
})