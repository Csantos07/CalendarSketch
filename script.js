row_dates = document.querySelectorAll(".row-date");
row_week_header = document.querySelector(".row-week-header");

console.log(row_dates)

row_dates.forEach(row => {
  row.addEventListener('click', () => {
    row_week_header.classList.toggle('active');
    row.classList.toggle('active');
  });
});
