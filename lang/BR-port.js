//Variaveis, cada texto tem uma variavel
var home = "Página Inicial",
	services = "Serviços",
	portfolio = "Portfólio",
	about = "Sobre Nós",
	contact = "Contato",
	banner_1 = "",
	banner_msg_1 = "",
	banner_2 = "",
	banner_msg_2 = "",
	banner_3 = "",
	banner_msg_3 = "",
	desc_CasaVerde = "Construção de uma residência unifamiliar no intuito de acomodar melhor uma família estrangeira. Realizamos os projetos para a execução, desde a fundação até a conclusão da obra.",
	desc_CasaGP = "Lorem ipsum dolor dolor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloresit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloresit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	desc_ccsp = "Lorem ipsum dolor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloresit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	desc_esv = "Realização de reforma em interiores devido a mudança da sede da empresa. Tivemos a necessidade de atender todos os espaços solicitados com uma visão de designer e entretenimento nos espaços de trabalho. Uma empresa especialmente descontraída!",
	desc_guarulhos = "Lorem ipsum dolor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloresit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	desc_vilamadalena = "Lorem ipsum dolor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloresit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	txtlocation = "Local:",
	txtproject = "Data do Projeto:",
	txtarea = "Área:",
	txtarquiterura = "Arquitetura:",
	txtinteriores = "Interiores:",
	txtteam = "Equipe:",
	port_titulo = "PORTIFÓLIO",
	port_desc = "Conheça todos os nossos projetos.",
	port_op_1_desc = desc_CasaGP.substr(0,91) + "...",
	port_op_2_desc = desc_CasaVerde.substr(0,91) + "...",
	port_op_3_desc = desc_ccsp.substr(0,91) + "...",
	port_op_4_desc = desc_guarulhos.substr(0,91) + "...",
	port_op_5_desc = desc_vilamadalena.substr(0,91) + "...",
	port_op_6_desc = desc_esv.substr(0,91) + "..."
	
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