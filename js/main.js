
// chart.js
const debitChart = document.getElementById('debit');

new Chart(debitChart, {
  type: 'bar',
  data: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri'],
    datasets: [{
      label: 'Debit',
      data: [6, 5, 5, 13, 5, 11,8],
      backgroundColor: '#1A16F3', // Adjust colors as needed
      borderColor: '#1A16F3',
      borderWidth: 1,
      barThickness: 14.24,
      borderRadius:7
    }, {
      label: 'Credit',
      data: [14, 11, 9, 5, 12, 6,12],
      backgroundColor: '#FCAA0B', // Adjust colors as needed
      borderColor: '#FCAA0B',
      borderWidth: 1,
      barThickness: 14.24,
      borderRadius:7,
     
    }]
  },
  options: {
    scales: {
      x: {
        offset: true,
      },
      y: {
        beginAtZero: true,
        display: false,
      }
    }
    
  },
});

// monthly revenue
const lineChart = document.getElementById('revenue');
 new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Data',
       data: [1, 11, 9, 18, 12, 40],
      borderColor: '#16DBCC',
      borderWidth: 3,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value, index, values) {
            return '$' + value.toLocaleString() + ",000";
          }
      }
    }
  }
  }
});

const cdat = document.getElementById('curr_date_time');
setInterval(() => {
  let date = new Date();
  cdat.innerText = date.toLocaleString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}, 1000);

 // dynamic list
   // Function to create a list item
   function createListItem(id, text, iconSrc) {
    const li = document.createElement("li");
    li.id = id;
    li.className = "nav-item";
    const a = document.createElement("a");
    a.href = "#";
    a.className = "nav-link  align-middle px-0";
    a.style.color = "#B1B1B1";
    const img = document.createElement("img");
    img.src = iconSrc;
    img.className = "svg";
    const span = document.createElement("span");
    span.className = "menu-title";
    span.textContent = text;
    a.appendChild(img);
    a.appendChild(span);
    li.appendChild(a);
    return li;
}

function handleItemClick(event) {
    const clickedItem = event.currentTarget;
    const listItems = document.querySelectorAll("#menu .nav-item");
    
    listItems.forEach(item => {
        item.classList.remove("active");
        const link = item.querySelector(".nav-link");
        link.style.color = "#B1B1B1"; 
        const svgIcon = item.querySelector(".svg");
        svgIcon.style.fill = "#B1B1B1";
    });

    clickedItem.classList.add("active");
    const link = clickedItem.querySelector(".nav-link");
    link.style.color = "#1814F3";
    link.style.borderLeft = "8px";
    link.borderRadius="0px, 10px, 10px, 0px"
    const svgIcon = clickedItem.querySelector(".svg");
    svgIcon.style.fill = "#1814F3";
}

// Add list items dynamically
const menu = document.getElementById("menu");
const items = [
    { id: "dashboard", text: "Dashboard", iconSrc: "/assets/svgIcon/homeIcon.svg" },
    { id: "transections", text: "Transections", iconSrc: "/assets/svgIcon/transectionIcon.svg" },
    { id: "accounts", text: "Accounts", iconSrc: "/assets/svgIcon/userIcon.svg" },
    { id: "investments", text: "Investments", iconSrc: "/assets/svgIcon/investmentIcon.svg" },
    { id: "creditCards", text: "Credit Cards", iconSrc: "/assets/svgIcon/cardIcon.svg" },
    { id: "loans", text: "Loans", iconSrc: "/assets/svgIcon/loanIcon.svg" },
    { id: "services", text: "Services", iconSrc: "/assets/svgIcon/servicesIcon.svg" },
    { id: "myPrivileges", text: "My Privileges", iconSrc: "/assets/svgIcon/myPrevilegesIcon.svg" },
    { id: "setting", text: "Setting", iconSrc: "/assets/svgIcon/settingIcon.svg" }
];

items.forEach(item => {
    const listItem = createListItem(item.id, item.text, item.iconSrc);
    listItem.addEventListener("click", handleItemClick);
    menu.appendChild(listItem);
});

// Form validation and submition data 
const form = document.getElementById("myForm");
const cardTypeInput = document.getElementById("cardType");
const nameOnCardInput = document.getElementById("nameOnCard");

cardTypeInput.addEventListener("input", validateCardType);
nameOnCardInput.addEventListener("input", validateNameOnCard);

function validateCardType() {
  const value = cardTypeInput.value.trim();
  const errorDiv = document.getElementById("cardTypeError");
  if (value === "") {
    cardTypeInput.classList.add("is-invalid");
    errorDiv.textContent = "Please enter Card Type.";
  } else {
    cardTypeInput.classList.remove("is-invalid");
    errorDiv.textContent = "";
  }
}

function validateNameOnCard() {
  const value = nameOnCardInput.value.trim();
  const errorDiv = document.getElementById("nameOnCardError");
  if (value === "") {
    nameOnCardInput.classList.add("is-invalid");
    errorDiv.textContent = "Please enter Name On Card.";
  } else {
    nameOnCardInput.classList.remove("is-invalid");
    errorDiv.textContent = "";
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  validateCardType();
  validateNameOnCard();

  // Check if all inputs are valid
  if (!cardTypeInput.classList.contains("is-invalid") &&
      !nameOnCardInput.classList.contains("is-invalid")) {
    // Retrieve values
    const cardType = cardTypeInput.value.trim();
    const nameOnCard = nameOnCardInput.value.trim();

    // Do something with the values
    console.log("Card Type:", cardType);
    console.log("Name On Card:", nameOnCard);

    // Clear the form (optional)
    form.reset();
  }
});
// side bar toggle 

const showSidebarBtn = document.querySelector('#show_sidebar_phone');
const showSidebarBtnPc = document.querySelector('#show_sidebar_pc');
const closeSidebarBtn = document.querySelector('#close_sidebar');
const overlay = document.querySelector('#overlay');
const fullscreen = document.querySelector('#fullscreen');
const wrapper = document.querySelector('.wrapper');

showSidebarBtn.onclick = function () {
  wrapper.classList.toggle('show');
}

closeSidebarBtn.onclick = function () {
  wrapper.classList.remove('show');
}

overlay.onclick = function () {
  wrapper.classList.remove('show');
}

showSidebarBtnPc.onclick = function () {
  wrapper.classList.toggle('show_pc');
}


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltipTriggerList.forEach(function (item) {
  new bootstrap.Tooltip(item);
});

fullscreen.onclick = function () {
  const i = document.querySelector('#fullscreen i');
  if (i.classList.contains('fa-expand')) {
    i.classList.add('fa-compress');
    i.classList.remove('fa-expand');
    document.documentElement.requestFullscreen();
  } else {
    i.classList.add('fa-expand');
    i.classList.remove('fa-compress');
    document.exitFullscreen();
  }
}

const collapseElement = document.querySelector('[data-bs-toggle="collapse"]');
let isCollapsed = true;

collapseElement.addEventListener('click', function () {
  if (isCollapsed) {
    this.classList.add('collapsed');
    isCollapsed = false;
  } else {
    this.classList.remove('collapsed');
    isCollapsed = true;
  }
});

const childItems = document.querySelectorAll('#masterCollapse .nav-item');
const parentCollapse = document.querySelector('#masterCollapse');

for (let i = 0; i < childItems.length; i++) {
  if (childItems[i].classList.contains('active')) {
    parentCollapse.classList.add('show');
    collapseElement.classList.add('collapsed');
    break;
  }
}



