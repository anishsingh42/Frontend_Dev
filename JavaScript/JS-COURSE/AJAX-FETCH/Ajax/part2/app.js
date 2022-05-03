document.getElementById('customer-cnt-1').addEventListener('click', loadDataCustomer);

function loadDataCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer_1.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const  customer = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.Name}</li>
                    <li>PHONE: ${customer.Phone}</li>
                    <li>COMPANY: ${customer.Company}</li>
                </ul>
            `;
            document.getElementById('output-customer-1').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault;
}


document.getElementById('customer-cnt-many').addEventListener('click', loadDataCustomers);

function loadDataCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer-many.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function(customer){
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.Name}</li>
                    <li>PHONE: ${customer.Phone}</li>
                    <li>COMPANY: ${customer.Company}</li>
                </ul>
            `;
            
            });
            document.getElementById('output-customer-many').innerHTML = output;
        }

    }
    xhr.send()


    e.preventDefault;
}
