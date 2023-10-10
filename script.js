function createTable() {
    //Write your code here
	let rows  = parseInt(prompt("input number of rows"));
	let columns  = parseInt(prompt("input number of columns"));

	const table   = document.getElementById("myTable");
	for(let i = 0 ;i<rows;i++){
		let tr  = document.createElement('tr');
		for(let j = 0;j<columns;j++){
			let td = document.createElement('td');
			td.innerText  = `Row-${i} Column-${j}`;
			tr.appendChild(td);
		}

		table.appendChild(tr);
		
	}
  
}
