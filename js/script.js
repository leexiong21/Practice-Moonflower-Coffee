$(()=>{
	console.log("Hello world!");
	$toggleAll();
	$.getJSON("data/menu.json" ,function(data){
		//console.log(data);
		
		addmenutopage(data.beverages);//
		addBakerytopage(data.bakery);
		$(`h3, li, #staff, #story`).hide();
	})
	
	.fail (()=>{
		console.log("JSON data can't load");
	})
	.always(()=>{
		console.log("menu data can't load");
	});
	
	//function loadbeveragesTopage(beveragesArray){
	const $menu = $("#menu");

		function addmenutopage(menuArray){
			$("<h3>Beverages</h3>").insertAfter($menu.children().last());
			let $list = $(`<ul>`);
			$("#menu").append($list);
			$("#menu p").remove();
			menuArray.forEach((menu) =>{
			//console.log(menuArray);	
			$list.append(`<li>${menu.name} ${menu.price}</li>`); 
       
			});
		}
		
		function addBakerytopage(menuArray){
			$("<h3>Bakery</h3>").insertAfter($menu.children().last());
			let $list = $(`<ul>`);
			$("#menu").append($list);
			$("#menu p").remove();
			menuArray.forEach((menu) =>{
			//console.log(menuArray)
			$list.append(`<li>${menu.name} ${menu.price}</li>`); 
			
			});		
		}
	//=============================================================================================
	$.getJSON("data/moonflowers.json" ,function(data){
		//console.log(data);
		addspecialstopage(data.specials);
		addstafftopage(data.staff);
		addmoonflowerstopage(data.hours);
	})
	.fail (()=>{
		console.log("JSON data can't load");
	})
	.always(()=>{
		console.log("menu data can't load");
	});
	
	//$("#moonflowers p").remove();
	const $moonflowers =$("#moonflowers");
	
	function addmoonflowerstopage(moonflowersArray){
			//$("<h2>Staff Members</h2>").insertAfter($moonflowers.children().last());
			let $list = $("<ul >");
			$("#hours").append($list);
			moonflowersArray.forEach((moonflowers) =>{
			$("#hours p").remove();
			$list.append(`<li>${moonflowers.day} ${moonflowers.time}</li>`); 
			
			});		
		}
	function addspecialstopage(specialsArray){
			$("#specials p").remove();
			specialsArray.forEach((moonflowers) =>{
			//console.log(menuArray);
			$("#specials").append(`<h3>${moonflowers.code}</h3> <p>${moonflowers.desc} </p>`);
				if (moonflowers.img != undefined)
				{
				 	$("#specials").append(`<div><img src="images/${moonflowers.img}"></div>`);
				}			
			});		
		}	
	function addstafftopage(staffArray){
			$("#staff").append("<h2>Staff Members</h2>");
			staffArray.forEach((moonflowers) =>{
				let $row = $(`<div class="staff row"></div>`);
			$("#staff").append($row);	
			$row.append(`<div class="col-sm-8"><h3>${moonflowers.id}</h3><h4>${moonflowers.name}</h4><p>${moonflowers.text}</p></div>`);
			$row.append(`<div class="col-sm-4"><img class="img-responsive" src="images/${moonflowers.img}"</div>`);			
			});	
		}
	/*$(`#specials`).on("click", function(){
		$(`h3, li`).toggle();
	});*/
});
function $toggleAll(){
	$("#menu").on("click", function(){
	  $(`h3, #staff, #story, li`).slideToggle();
		
		return false;
		//return true;
	})
}