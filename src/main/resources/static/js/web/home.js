$(document).on("click","#btnempezar",function(){
	//alert("VIVA TAYLOR SWIFT");
	let usuario = $("#txtusuario").val();
	let password = $("#txtpassword").val();
	$("#lbldatos").text("Usuario: " + usuario + " - Password: " + password);
	$("#modalempezar").modal("show");
})