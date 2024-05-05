<script>
function sortTable(n, isNumeric) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.querySelector("table");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (isNumeric) {
        if (dir == "asc" && parseFloat(x.textContent) > parseFloat(y.textContent) || dir == "desc" && parseFloat(x.textContent) < parseFloat(y.textContent)) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (dir == "asc" && x.textContent.toLowerCase() > y.textContent.toLowerCase() || dir == "desc" && x.textContent.toLowerCase() < y.textContent.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// Attach events to sort buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    var isNumeric = button.innerText.includes("Price");
    sortTable(isNumeric ? 1 : 2, isNumeric);
  });
});

// Function to update quantity
function updateQuantity(btn, increment) {
  let display = btn.parentNode.querySelector('span');
  let currentVal = parseInt(display.textContent);
  if (increment) {
    display.textContent = currentVal + 1;
  } else if (currentVal > 0) {
    display.textContent = currentVal - 1;
  }
}

// Attach event listeners to quantity buttons
document.querySelectorAll('.quantity-btn').forEach(button => {
  button.addEventListener('click', function() {
    updateQuantity(this, this.textContent === '+');
  });
});

</script>
