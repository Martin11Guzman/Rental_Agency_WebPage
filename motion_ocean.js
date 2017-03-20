

 var cashRegister = {
 	"total": 0,
 	"lastTransactionAmount": 0,
 	"numItems": 0,
 	//adding items
 	"add": function(itemCost) { this.total += itemCost; this.lastTransactionAmount = itemCost; /*this.numItems += quantity;*/},
 	//scanning items
 	"scan": function(item, quantity) {
 		switch(item) {
 			case "Wheelchair": this.add(90 * quantity); break;
 			case "Scooter": this.add(100 * quantity); break;
 			case "Hospital Bed": this.add(300 * quantity); break;
 			case "Crutches": this.add(50 * quantity); break;
 			case "Surgical Tools": this.add(20 * quantity); break;
 			case "Stretcher": this.add(100 * quantity); break;
 			case "MRI": this.add(400 * quantity); break;
 			case "Leg Braces": this.add(40 * quantity); break;
 			case "Walking Boot": this.add(20 * quantity); break;
  			case "X-ray Machine": this.add(500 * quantity); break;



 		}
 	},
 	//void last transaction
 	"voidLastTransaction": function() {	this.total -= this.lastTransactionAmount; },
 }

 function numberWithCommas(x) {
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

function showTotal() {
	document.getElementById('total').innerHTML = "Your total is: $"+ numberWithCommas(cashRegister.total.toFixed(2));
}