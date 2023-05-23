/* The JavaScript code section for selecting seats is referenced by the author
		Title: JS实现电影院选座位
        * Author:m0_63466615
        * Date: 2022-05-05 11:12:02
        * Availability:https://blog.csdn.net/m0_63466615/article/details/121176766?ops_request_misc=&request_
        * id=&biz_id=102&utm_term=js%E9%80%89%E6%8B%A9%E5%BA%A7%E4%BD%8D%E5%8A%9F%E8%83%BD&utm_medium=distribute.pc_
        * earch_result.none-task-blog-2~all~sobaiduweb~default-1-121176766.142^v87^control_2,239^v2^insert_chatgpt&spm=101
        * 8.2226.3001.4187
		*/

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const seatSelect = document.getElementById('seat');

populateUI();

let ticketPrice = +seatSelect.value;

// Save selected seat index and price
function setSeatData(seatIndex, seatPrice) {
  localStorage.setItem('selectedSeatIndex', seatIndex);
  localStorage.setItem('selectedSeatPrice', seatPrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  
  setSeatData(seatSelect.selectedIndex, seatSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedSeatIndex = localStorage.getItem('selectedSeatIndex');

  if (selectedSeatIndex !== null) {
    seatSelect.selectedIndex = selectedSeatIndex;
  }
}

// Seat select event
seatSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setSeatData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();