
let dataCustomers=[];
async function getDataCustomers(){

  let respons = await fetch('https://api-d414.vercel.app/customers');
  dataCustomers=await  respons.json();
  
}
getDataCustomers();


let dataTransactions=[];
async function getDataTransactions(){
  let respons = await fetch('https://api-d414.vercel.app/transactions');
  dataTransactions=await  respons.json();
  // console.log(dataTransactions)
}
getDataTransactions();

    let tot=[];
    function total(){
        let totalAmount=0;
    for (let y = 0; y < dataCustomers.length; y++) {

        for (let i = 0; i < dataTransactions.length; i++) {
            
            if(dataCustomers[y].id == dataTransactions[i].customer_id){
           
            totalAmount += dataTransactions[i].amount;
            
            
        }
    }
    tot.push(totalAmount);
    totalAmount=0;
    
  };
  // console.log(tot);
};
(async function(){
  await getDataCustomers();
  await getDataTransactions();
  total();
})();

    let date=[];
    let da=[];
function dates(){
        let totalDate=0;
    for (let y = 0; y < dataCustomers.length; y++) {

        for (let i = 0; i < dataTransactions.length; i++) {
            
            if(dataCustomers[y].id == dataTransactions[i].customer_id){
           
            // totalDate += dataTransactions[i].date;
            da.push(dataTransactions[i].date);
            
            
        }
    }
    date.push(da);
    da=[];
    
  };
  console.log(date);
};

(async function(){
  await getDataCustomers();
  await getDataTransactions();
  dates();
})();
    let amounts=[];
    let gamounts=[];
    function amount(){
        
    for (let y = 0; y < dataCustomers.length; y++) {

        for (let i = 0; i < dataTransactions.length; i++) {
            
            if(dataCustomers[y].id == dataTransactions[i].customer_id){
           
            amounts.push( dataTransactions[i].amount);
            
            
        }
    }
    gamounts.push(amounts);
    amounts=[];
    
}
// console.log(amounts);
// console.log(gamounts);
}
(async function(){
  await getDataCustomers();
  await getDataTransactions();
  amount();
 
})();
    // console.log(dataCustomers);
    let tbody=document.querySelector('tbody');
    // console.log(tbody)
    function displayCustomer(arr){
        let cartona =``;
        for (let i = 0; i < arr.length; i++) {

            cartona+=`
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    
                    ${arr[i].name}
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                   
                    ${tot[i]}
                </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    
                    <button onclick="diplaychar(),char(${arr[i].id})" class="rounded bg-green-400 py-1 px-3 text-xs font-bold">View</button>
                  </td>
            </tr>`
           
            
        }
        tbody.innerHTML=cartona;
    }
    (async function(){
      await getDataCustomers();
      await getDataTransactions();
      total();
      displayCustomer(dataCustomers);
    })();

// ==================== Searsh customer ===================




var customerSearshInput=document.getElementById('customerSearshInput');
var login=document.querySelector('.login');

customerSearshInput.addEventListener('input',function(eventInfo){
  
  searshcustomer();
    searshList=[];
       
  
    

});
let searshList=[];
function searshcustomer(){


    for(var i =0; i<dataCustomers.length; i++){

        if(dataCustomers[i].name.toLowerCase().includes(customerSearshInput.value.toLowerCase())){

            searshList.push(dataCustomers[i]);

        }
    }
      displaySearsh();
    
    // console.log(searshList)
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
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [date[id-1][0], date[id-1][1],date[id-1][2], date[id-1][3]],
      datasets: [{
        label: '# of Amounts',
        data: [gamounts[id-1][0], gamounts[id-1][1], gamounts[id-1][2], gamounts[id-1][3]],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)'
      ],
      borderColor: [
         
          'rgba(153, 102, 255)'
        ],
      borderWidth: 3
        
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
