let data ={
    "customers": [
    {
    "id": 1,
    "name": "Ahmed Ali"
    },
    {
    "id": 2,
    "name": "Aya Elsayed"
    },
    
    {
    "id": 3,
    "name": "Mina Adel"
    },
    {
    "id": 4,
    "name": "Sarah Reda"
    },
    {
    "id": 5,
    "name": "Mohamed Sayed"
    }
    ],
    "transactions": [
    {
    "id": 1,
    "customer_id": 1,
    "date": "2022-01-01",
    "amount": 1000
    },
    {
    "id": 2,
    "customer_id": 1,
    "date": "2022-01-02",
    "amount": 2000
    },
    {
    "id": 2,
    "customer_id": 1,
    "date": "2022-01-03",
    "amount": 500
    },
    {
    "id": 2,
    "customer_id": 1,
    "date": "2022-01-04",
    "amount": 760
    },
    {
    "id": 3,
    "customer_id": 2,
    "date": "2022-01-01",
    "amount": 550
    },
    {
    "id": 4,
    "customer_id": 3,
    "date": "2022-01-01",
    "amount": 500
    },
    {
    "id": 5,
    
    "customer_id": 2,
    "date": "2022-01-02",
    "amount": 1300
    },
    {
    "id": 5,
    
    "customer_id": 2,
    "date": "2022-01-02",
    "amount": 650
    },
    {
    "id": 6,
    "customer_id": 4,
    "date": "2022-01-01",
    "amount": 750
    },
    {
    "id": 6,
    "customer_id": 4,
    "date": "2022-01-02",
    "amount": 500
    },
    {
    "id": 6,
    "customer_id": 4,
    "date": "2022-01-03",
    "amount": 1200
    },
    {
    "id": 7,
    "customer_id": 3,
    "date": "2022-01-02",
    "amount": 1250
    },
    {
    "id": 7,
    "customer_id": 3,
    "date": "2022-01-01",
    "amount": 500
    },
    {
    "id": 7,
    "customer_id": 3,
    "date": "2022-01-03",
    "amount": 150
    },
    {
    "id": 8,
    "customer_id": 5,
    "date": "2022-01-01",
    "amount": 2500
    },
    {
    "id": 9,
    "customer_id": 5,
    "date": "2022-01-02",
    "amount": 875
    },
    {
    "id": 9,
    "customer_id": 5,
    "date": "2022-01-03",
    "amount": 1500
    },
    {
    "id": 9,
    "customer_id": 5,
    "date": "2022-01-04",
    "amount": 1000
    }
    ]
    }
    let tot=[];
    function total(){
        let totalAmount=0;
    for (let y = 0; y < data.customers.length; y++) {

        for (let i = 0; i < data.transactions.length; i++) {
            
            if(data.customers[y].id == data.transactions[i].customer_id){
           
            totalAmount += data.transactions[i].amount;
            
            
        }
    }
    tot.push(totalAmount);
    totalAmount=0;
    
}
console.log(tot);
}
total();
    let amounts=[];
    let gamounts=[];
    function amount(){
        
    for (let y = 0; y < data.customers.length; y++) {

        for (let i = 0; i < data.transactions.length; i++) {
            
            if(data.customers[y].id == data.transactions[i].customer_id){
           
            amounts.push( data.transactions[i].amount);
            
            
        }
    }
    gamounts.push(amounts);
    amounts=[];
    
}
console.log(amounts);
console.log(gamounts);
}

amount();
    // console.log(data.customers);
    let tbody=document.querySelector('tbody');
    // console.log(tbody)
    function displayCustomer(arr){
        let cartona =``;
        for (let i = 0; i < arr.customers.length; i++) {

            cartona+=`
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    
                    ${arr.customers[i].name}
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                   
                    ${tot[i]}
                </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    
                    <button onclick="diplaychar(),char(${arr.customers[i].id})" class="rounded bg-green-400 py-1 px-3 text-xs font-bold">View</button>
                  </td>
            </tr>`
           
            
        }
        tbody.innerHTML=cartona;
    }
    displayCustomer(data);

// ==================== Searsh customer ===================

var customerSearshInput=document.getElementById('customerSearshInput');
var login=document.querySelector('.login');

customerSearshInput.addEventListener('input',function(eventInfo){
     
        searshcustomer();
        searshList=[];
       
  
    console.log(customerSearshInput.value)

});
let searshList=[];
function searshcustomer(){


    for(var i =0; i<data.customers.length; i++){

        if(data.customers[i].name.toLowerCase().includes(customerSearshInput.value.toLowerCase())){

            searshList.push(data.customers[i]);

        }
    }
    
   
    displaySearsh();
   
}

function displaySearsh(){
    let cartona =``;
        for (let i = 0; i < searshList.length; i++) {

            cartona+=`
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    
                    ${searshList[i].name}
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                   
                    ${tot[i]}
                </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    
                    <button onclick="diplaychar(),char(${searshList[i].id})" class="rounded bg-green-400 py-1 px-3 text-xs font-bold">View</button>
                  </td>
            </tr>`
           
            
        }
        tbody.innerHTML=cartona;
}

// -------------------------- Chart
function diplaychar(){
  let cartona=`<canvas id="myChart"></canvas>`
  document.querySelector('.char').innerHTML=cartona;
}
function char(id){
  const ctx = document.getElementById('myChart');
    // ctx.classList.remove('hidden')
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["2022-01-01", "2022-01-02","2022-01-03", "2022-01-04"],
      datasets: [{
        label: '# of Amounts',
        data: [gamounts[id-1][0], gamounts[id-1][1], gamounts[id-1][2], gamounts[id-1][3]],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
      borderWidth: 1
        
      }]
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  // chart.destroy();
};
