let dark = false;

document.getElementById("darkBtn").onclick = () => {
  dark = !dark;
  document.body.style.background = dark ? "#121212" : "#f5f6fa";
  document.body.style.color = dark ? "#fff" : "#333";
};

function checkAvailability(){
  alert("Rooms Available! (Demo)");
}

function openBooking(room){
  document.getElementById("bookingModal").style.display = "flex";
  document.getElementById("roomTitle").innerText = room;
}

function confirmBooking(){
  alert("Booking Confirmed! (Frontend Demo)");
  document.getElementById("bookingModal").style.display = "none";
}

window.onclick = function(e){
  if(e.target == document.getElementById("bookingModal")){
    document.getElementById("bookingModal").style.display = "none";
  }
}
