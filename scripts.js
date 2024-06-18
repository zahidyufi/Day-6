// Data items
var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitech.jpeg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpeg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpeg']
  ];
  
  // Function to display items
  function displayItems(items) {
    const listBarang = document.getElementById('listBarang');
    listBarang.innerHTML = ''; // Clear existing items
    items.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.className = 'col-4 mt-2';
      itemCard.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${item[4]}" class="card-img-top" height="200px" width="200px" alt="${item[1]}">
          <div class="card-body">
            <h5 class="card-title">${item[1]}</h5>
            <p class="card-text">${item[3]}</p>
            <p class="card-text">Rp ${item[2]}</p>
            <a href="#" class="btn btn-primary addCart">Tambahkan ke keranjang</a>
          </div>
        </div>
      `;
      listBarang.appendChild(itemCard);
    });
  }
  
  // Initial display of all items
  displayItems(items);
  
  // Search functionality
  document.getElementById('formItem').addEventListener('submit', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const filteredItems = items.filter(item => item[1].toLowerCase().includes(keyword));
    displayItems(filteredItems);
  });
  
  // Cart functionality
  let cartCount = 0;
  document.getElementById('listBarang').addEventListener('click', function(event) {
    if (event.target.classList.contains('addCart')) {
      event.preventDefault();
      cartCount++;
      document.getElementById('cart').innerHTML = `<i class="fas fa-shopping-cart"></i>(${cartCount})`;

    }
  });