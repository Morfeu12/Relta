//Variaveis, cada texto tem uma variavel
var home = "Home",
	services = "Services",
	portfolio = "Portfolio",
	about = "About",
	contact = "Contact", 
	banner_1 = "",
	banner_msg_1 = "",
	banner_2 = "",
	banner_msg_2 = "",
	banner_3 = "",
	banner_msg_3 = "",
	desc_CasaVerde = "Construction of a single-family residence to better accommodate a foreign family. We carry out the projects for the execution, from the foundation until the conclusion of the work.",
	desc_CasaGP = "",
	desc_ccsp = "",
	desc_esv = "Interior renovation due to the change of company headquarters. We had the need to meet all the requested spaces with a designer vision and entertainment in the workspaces. An especially laid back company!",
	desc_guarulhos = "",
	desc_vilamadalena = "",
	txtlocation = "Location:",
	txtproject = "Project Date:",
	txtarea = "Area:",
	txtarquiterura = "Architecture:",
	txtinteriores = "Interiors:",
	txtteam = "Team:",
	port_titulo = "PORTIFOLIO",
	port_desc = "know all our projects",
	port_op_1_desc = "Descricao da Obra.",
	port_op_2_desc = "Descricao da Obra.",
	port_op_3_desc = "Descricao da Obra.",
	port_op_4_desc = "Descricao da Obra.",
	port_op_5_desc = "Descricao da Obra.",
	port_op_6_desc = "Descricao da Obra."
	
//Funcao verifica e altera o valor do elemnto HTML
function validaID (id, valor){
	var element = !!document.querySelector(id)
	if(element){
		document.querySelector(id).innerHTML = valor
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

function validaMetaDados (id, nome, desc){
	var element = !!document.querySelector(id)
	var el = document.querySelector(id)
	if(element){
		el.dataset.title = nome
		el.dataset.description = desc
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

function validaBtn (id, valor){
	var element = !!document.querySelector(id)
	var el = document.querySelector(id)
	if(element){
		el.value = valor
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

//Atribui o valor da variavel no ID (html)
this.validaID('#menu-1', home);
this.validaID('#menu-2', services);
this.validaID('#menu-3', portfolio);
this.validaID('#menu-4', about);
this.validaID('#menu-5', contact);
this.validaID('#banner-1', banner_1);
this.validaID('#banner-2', banner_2);
this.validaID('#banner-3', banner_3);
this.validaID('#banner-msg-1', banner_msg_1);
this.validaID('#banner-msg-2', banner_msg_2);
this.validaID('#banner-msg-3', banner_msg_3);
this.validaID('#desc_CasaVerde', desc_CasaVerde);
this.validaID('#desc_CasaGP', desc_CasaGP);
this.validaID('#desc_ccsp', desc_ccsp);
this.validaID('#desc_esv', desc_esv);
this.validaID('#desc_guarulhos', desc_guarulhos);
this.validaID('#desc_vilamadalena', desc_vilamadalena);
this.validaID('#txtlocation', txtlocation);
this.validaID('#txtproject', txtproject);
this.validaID('#txtarea', txtarea);
this.validaID('#txtarquiterura', txtarquiterura);
this.validaID('#txtinteriores', txtinteriores);
this.validaID('#txtteam', txtteam);
this.validaID('#port_titulo', port_titulo);
this.validaID('#port_desc', port_desc);
this.validaID('#port_op_1_desc', port_op_1_desc);
this.validaID('#port_op_2_desc', port_op_2_desc);
this.validaID('#port_op_3_desc', port_op_3_desc);
this.validaID('#port_op_4_desc', port_op_4_desc);
this.validaID('#port_op_5_desc', port_op_5_desc);
this.validaID('#port_op_6_desc', port_op_6_desc);