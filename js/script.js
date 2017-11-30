$(()=>{
	//$("#menu").on("click", function(){
		//$("h2", "#staff", "#story").this().toggle();
	//})
	$.getJSON("data/menu.json" ,function(data){
		console.log(data);
		
		addmenutopage(data.beverages);//
		addmenutopage(data.bakery);
	})
	.fail (()=>{
		console.log("JSON data can't load");
	})
	.always(()=>{
		console.log("menu data can't load");
	});
	
	//function loadbeveragesTopage(beveragesArray){
	const $menu = $("#menu");
//$("<h3>Beverages</h3>").insertAfter($menu.children().last());
		function addmenutopage(menuArray){
			$("<h3>Beverages</h3>").insertAfter($menu.children().last());
			let $list = $("<ul>");
			$("#menu").append($list);
			menuArray.forEach((menu) =>{
			console.log(menuArray)
			$("#menu p").remove();
			$list.append(`<li>${menu.name} ${menu.price}</li>`) 
       
			});
		
		}
		
		function addmenutopage(menuArray){
			$("<h3>Bakery</h3>").insertAfter($menu.children().last());
			let $list = $("<ul>");
			$("#menu").append($list);
			menuArray.forEach((menu) =>{
			//console.log(menuArray)
			$("#menu p").remove();
			$list.append(`<li>${menu.name} ${menu.price}</li>`) 
			
			});
		
		}
	//=============================================================================================
	$.getJSON("data/moonflowers.json" ,function(data){
		//console.log(data);
		
		addmoonflowerstopage(data.hours);
		addspecialstopage(data.specials);
		addstafftopage(data.staff)
	})
	.fail (()=>{
		console.log("JSON data can't load");
	})
	.always(()=>{
		console.log("menu data can't load");
	});	
	//$("#moonflowers p").remove();
	const $moonflowers =$("#moonflowers")
	
	function addmoonflowerstopage(moonflowersArray){
			//$("<h2>Staff Members</h2>").insertAfter($moonflowers.children().last());
			let $list = $("<ul>");
			$("#hours").append($list);
			moonflowersArray.forEach((moonflowers) =>{
			$("#hours p").remove();
			$list.append(`<li>${moonflowers.day} ${moonflowers.time}</li>`) 
			
			});
		
		}
	function addspecialstopage(specialsArray){
			
			specialsArray.forEach((items) =>{
			console.log(items)
				
			$("#specials p").remove();
				if(items.type ==="")
			$("#specials").append(`<p>${items.code[0]} ${items.desc[0]} </p>`);
				$("#specials").append(`<p>${items.code[1]} ${items.desc[2]} </p>`);
			$("#specials").append(`<div img class="img-responsive" src = "images/${items.img}" alt="Image of ${items.name}"></div>`)	
			//$("#specials").append(`<div><p>${moonflowers.code} ${moonflowers.desc} ${moonflowers.img}</p></div>`)
			
			});
	
		}
	
		function addstafftopage(staffArray){
			$("<h2>Staff Members</h2>").insertAfter($moonflowers.children().last());
			staffArray.forEach((person) =>{
			let $row = $('<div> class="staff row"</div>');
			$("#staff").append($row);
            $row.append(`<div class="col-sm-8"><h3>${person.id}</h3><h4>${person.name}</h4><p>${person.text}</p></div>`);
            $row.append(`<div class="col-sm-4"><img class="img-responsive" src="images/${person.img}" alt="Image of ${person.name}"></div>`)
			/*$("#staff").append(`<h4>${moonflowers.id}</h4>`);
			$("#staff").append(`<h5>${moonflowers.name}</h5>`);
			$("#staff").append(`${"moonflowers.img"}`);
			$("#staff").append(`${moonflowers.text}`);*/
				
			
			//$("#specials").append(`<div><p>${moonflowers.code} ${moonflowers.desc} ${moonflowers.img}</p></div>`)
			
			});
		
		}
	menutoggle();
	hourstoggle();
	
});
function menutoggle(){
	$menu.on("click", function(){
		$(`"#menu" , "h2"`).nextAll().slideToggle(1000);
		
	})
}
function hourstoggle(){
	$("#hours").on("click", function(){
		$(this).next().toggle();
	})
}