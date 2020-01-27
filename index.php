<!DOCTYPE html>
<!--
 * A Design by OmarCosta
 * Author: OmarCosta
 * Author URL: http://omarcosta.site
 * License: http://omarcosta.site
-->
<html lang="pt-BR">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:title" content="Teste de Envio via FormMail" />
	<meta property="og:locale" content="pt_br" />
	<title>RELTA ARQUITETURA</title>
	<link href='fonts/oswald.css' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/uikit.css">
	<link rel="stylesheet" href="css/font-awesome.css">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/jquery.bxslider.css">
	<script src="js/modernizr.custom.js"></script>
	<!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
	<!-- Carregar idioma script automaticamente pelo idioma do navegador -->
	<script type="text/javascript">

	</script>
</head>

<body>
	<script type="text/javascript">
		var userLang = navigator.language || navigator.userLanguage;
		switch (userLang) {
			case 'en':
				lang_EN();
				break
			case 'pt-BR':
				lang_BR();
				break
			default:
				lang_BR();
		}
		//Carregar idioma manualmente
		function lang_BR() {
			var element = document.createElement("script");
			element.src = "lang/BR.js";
			document.body.appendChild(element);
		}
		function lang_EN() {
			var element = document.createElement("script");
			element.src = "lang/EN.js";
			document.body.appendChild(element);
		}
	</script>
	<div id="aninaLoader" class="loader" onload="animaloader()">
		<div class="project-loader">
			<div class="bubblingG">
				<img src="img/logo.png" width="400px" />
				<span id="bubblingG_1"></span>
				<span id="bubblingG_2"></span>
				<span id="bubblingG_3"></span>
			</div>
		</div>
	</div>
	<div class="loading" id="wrapper">
		<!-- Fixed navbar -->
		<div class="navbar navbar-smak navbar-fixed-top " id="navbar" role="navigation">
			<div class="container">
				<div class="navbar-header" style="position: absolute;">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><i
							class="fa fa-bars"></i></button>
					<a class="navbar-brand animate" href="#"><img src="img/logo.png" alt="logo1"></a>
				</div>
				<div class="navbar-collapse collapse">
					<!-- navbar-right -->
					<ul class="nav navbar-nav navbar-center animate">
						<li class="nav-li"><a id="menu-1" onclick="recarregar('#')"></a></li>
						<li class="nav-li"><a id="menu-2" onclick="recarregar('#services')"></a></li>
						<li class="nav-li"><a id="menu-3" href="#"></a>
							<div uk-dropdown="offset: 0">
								<ul class="uk-nav uk-dropdown-nav">
									<li><a onclick="recarregar('portfolio/casa-gp.html')">Casa GP</a></li>
									<li><a onclick="recarregar('portfolio/casa-verde.html')">Casa Verde</a></li>
									<li><a onclick="recarregar('portfolio/ccsp.html')">CCSP</a></li>
									<li><a onclick="recarregar('portfolio/esv.html')">ESV</a></li>
									<li><a onclick="recarregar('portfolio/guarulhos.html')">Guarulhos</a></li>
									<li><a onclick="recarregar('portfolio/vila-madalena.html')">Vila Madalena</a></li>
								</ul>
							</div>
						</li>
						<li class="nav-li"><a id="menu-4" onclick="recarregar('#about')"></a></li>
						<li class="nav-li"><a id="menu-5" uk-toggle="target: #modal-close-default"></a></li>
						<li class="nav-li">
							<span id="idioma"><a onclick="lang_BR()">BR</a>&nbsp;|&nbsp;
								<a onclick="lang_EN()">EN</a></span>
						</li>
					</ul>
				</div>
				<!--/.nav-collapse -->
			</div>
		</div>

		<!--<img class="logo-img-banner" src="img/logo.png" alt="logo1">-->
		<div uk-slideshow="animation: fade;autoplay:true; autoplay-interval:7000;pause-on-hover:false">

			<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

				<ul class="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 5">
					<li>
						<div class="banner" style="background-image:url('img/Banner/banner1.png');" uk-cover></div>
						<div class="banner-black uk-inline">
							<div class="uk-position-center uk-overlay">
								<h1 id="banner-1"></h1>
								<p id="banner-msg-1"></p>
							</div>
						</div>
					</li>
					<li>
						<div class="banner" style="background-image:url('img/Banner/banner2.png');" uk-cover></div>
						<div class="banner-black uk-inline">
							<div class="uk-position-center uk-overlay">
								<h1 id="banner-2"></h1>
								<p id="banner-msg-2"></p>
							</div>
						</div>
					</li>
					<li>
						<div class="banner" style="background-image:url('img/Banner/banner3.png');" uk-cover></div>
						<div class="banner-black uk-inline">
							<div class="uk-position-center uk-overlay">
								<h1 id="banner-3"></h1>
								<p id="banner-msg-3"></p>
							</div>
						</div>
					</li>
				</ul>

				<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
					uk-slideshow-item="previous"></a>
				<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
					uk-slideshow-item="next"></a>
			</div>
			<ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
		</div>
		<section id="services" class="gray">
			<div class="container">
				<div class="heading">
					<h1 id="servico_titulo"></h1>
					<div class="divider"><span></span></div>
					<p id="servico_msg"></p>
				</div>
				<div class="row">
					<div class="col-sm-4">
						<div class="service-item fadeInDown">
							<img src="https://logodownload.org/wp-content/uploads/2017/03/sao-paulo-brasao-logo.png"
								width="100" style="height: 100px;">
							<h3 id="servico_1_titulo"></h3>
							<p id="servico_1_desc" class="font-m"></p>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="service-item fadeInUp">
							<img src="img/logo.png" width="100" height="100">
							<h3 id="servico_2_titulo"></h3>
							<p id="servico_2_desc" class="font-m"></p>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="service-item fadeInDown">
							<img src="http://www.ccb.policiamilitar.sp.gov.br/portalcb/img/brasao-novo-final.png"
								width="100" height="100">
							<h3 id="servico_3_titulo"></h3>
							<p id="servico_3_desc" class="font-m"></p>
						</div>
					</div>
		</section>
		<section id="about">
			<div class="container">
				<div class="heading">
					<div id="sobre_titulo"></div>
					<h1 id="sobre_subtitulo"></h1>
					<div class="divider">
						<span></span>
					</div>
					<p id="sobre_msg"></p>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="about-item">
							<div class="circle pull-left">
								<i class="fa fa-clock-o"></i>
							</div>
							<h4 id="missao_titulo"></h4>
							<p id="missao_desc" class="font-m"></p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="about-item delay2">
							<div class="circle pull-left">
								<i class="fa fa-rocket"></i>
							</div>
							<h4 id="visao_titulo"></h4>
							<p id="visao_desc" class="font-m"></p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="about-item delay4">
							<div class="circle pull-left">
								<i class="fa fa-thumbs-up"></i>
							</div>
							<h4 id="valores_titulo"></h4>
							<p id="valores_desc" class="font-m"></p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="gray">
				<div class="container">
					<div class="heading">
						<h2 id="equipe_titulo"></h2>
						<p id="equipe_desc"></p>
					</div>
					<div class="row">
						<ul class="team">
							<li class="col-md-6">
								<a id="equipe_p1" href="" class="team-member" uk-toggle="target: #EquipeModal1">
									<img src="img/Team/Felipe.JPG" alt=""
										class="img-responsive uk-border-pill">
									<span id="equipe_p1_nome" class="name"></span>
									<span id="equipe_p1_cargo" class="title"></span>
								</a>
							</li>
							<li class="col-md-6">
								<a id="equipe_p2" href="" class="team-member" uk-toggle="target: #EquipeModal2">
									<img src="img/Team/Raquel.jpg" alt="" class="img-responsive uk-border-pill">
									<span id="equipe_p2_nome" class="name"></span>
									<span id="equipe_p2_cargo" class="title"></span>
								</a>
							</li>
						</ul>
					</div>
					<!-- This is the modal with the default close button -->
					<div id="EquipeModal1" uk-modal>
						<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
							<button class="uk-modal-close-default" type="button" uk-close></button>
							<h2>Felipe Alves</h2>
							<p id="equipe_p1_cv"></p>
						</div>
					</div>
					<!-- This is the modal with the outside close button -->
					<div id="EquipeModal2" uk-modal>
						<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
							<button class="uk-modal-close-default" type="button" uk-close></button>
							<h2>Raquel Toni</h2>
							<p id="equipe_p2_cv"></p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Inicio partifolio -->
		<section class="portfolio" id="portfolio">
			<div class="container" style="width: 97%;">
				<div class="heading">
					<h1 id="port_titulo"></h1>
					<div class="divider"><span></span></div>
					<p id="port_desc"></p>
				</div>
				<div class="uk-grid-small uk-text-center" uk-grid>
					<div class="uk-width-1-3@m">
						<div class="uk-card uk-card-default card-port">
							<div class="img-cover" style="background-image: url('img/portfolio/Guarulhos/Capa.jpg');"
								onmouseenter="remAtributo('#port-5', 'style')">
								<div id="port-5" style="display:none">
									<a href="portfolio/guarulhos.html" class="img-click mouseEvento-h"
										onmouseout="addAtributo('#port-5', 'display:none;')">
										Guarulhos</a>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-width-1-3@m">
						<div class="uk-card uk-card-default card-port">
							<div class="img-cover" style="background-image: url('img/portfolio/casaGP/Capa.jpg');"
								onmouseenter="remAtributo('#port-1', 'style')">
								<div id="port-1" style="display:none">
									<a href="portfolio/casa-gp.html" class="img-click mouseEvento-h"
										onmouseout="addAtributo('#port-1', 'display:none;')">
										Casa GP</a>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-width-1-3@m">
						<div class="uk-card uk-card-default card-port">
							<div class="img-cover" style="background-image: url('img/portfolio/ESV/Capa.png');"
								onmouseenter="remAtributo('#port-4', 'style')">
								<div id="port-4" style="display:none">
									<a href="portfolio/esv.html" class="img-click mouseEvento-h"
										onmouseout="addAtributo('#port-4', 'display:none;')">
										ESV BR</a>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-width-1-3@m">
						<div class="uk-card uk-card-default card-port">
							<div class="img-cover" style="background-image: url('img/portfolio/ccsp/Capa.jpg');"
								onmouseenter="remAtributo('#port-3', 'style')">
								<div id="port-3" style="display:none">
									<a href="portfolio/ccsp.html" class="img-click mouseEvento-h"
										onmouseout="addAtributo('#port-3', 'display:none;')">
										CCSP</a>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-width-1-3@m">
						<div class="uk-card uk-card-default card-port">
							<div class="img-cover" style="background-image: url('img/portfolio/Casa Verde/Capa.JPG');"
								onmouseenter="remAtributo('#port-2', 'style')">
								<div id="port-2" style="display:none">
									<a href="portfolio/casa-verde.html" class="img-click mouseEvento-h"
										onmouseout="addAtributo('#port-2', 'display:none;')">
										Casa Verde</a>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-width-1-3@m">
						<div class="uk-card uk-card-default card-port">
							<div class="img-cover" style="background-image: url('img/portfolio/vl madalena/Capa.jpg');"
								onmouseenter="remAtributo('#port-6', 'style')">
								<div id="port-6" style="display:none">
									<a href="portfolio/vila-madalena.html" class="img-click mouseEvento-h"
										onmouseout="addAtributo('#port-6', 'display:none;')">
										Vila Madalena</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="parceiros">
			<div class="container">
				<div class="heading">
					<h1 id="parceiro_titulo"></h1>
					<div class="divider"><span></span></div>
					<p id="parceiro_desc"></p>
				</div>
				<div class="uk-child-width-1-1@s uk-child-width-1-3@l  uk-grid-small uk-text-center" uk-grid>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<a href="https://www.etna.com.br/" target="_blanck">
								<img class="uk-border-circle uk-margin-small-bottom" src="img/parceiros/etna.jpg" />
							</a><br />
							<a class="uk-link-heading uk-button-text oc-heading-small" href="https://www.etna.com.br/"
								target="_blanck">ETNA</a>
							
						</div>
					</div>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<a href="https://www.leroymerlin.com.br/" target="_blanck">
								<img class="uk-border-circle uk-margin-small-bottom"
									src="img/parceiros/leroy-merlin.jpg" />
							</a><br />
							<a class="uk-link-heading uk-button-text oc-heading-small"
								href="https://www.leroymerlin.com.br/" target="_blanck">Leroy Merlin</a>
							
						</div>
					</div>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<a href="https://www.instagram.com/suiteplanejados/" target="_blanck">
								<img class="uk-border-circle uk-margin-small-bottom"
									src="img/parceiros/suite-planejados.jpg" />
							</a><br />
							<a class="uk-link-heading uk-button-text oc-heading-small"
								href="https://www.instagram.com/suiteplanejados/" target="_blanck">Suite
								Planejados</a>
						</div>
					</div>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<a href="https://www.tokstok.com.br/" target="_blanck">
								<img class="uk-border-circle uk-margin-small-bottom" src="img/parceiros/tok-stok.jpg" />
							</a><br />
							<a class="uk-link-heading uk-button-text oc-heading-small"
								href="https://www.tokstok.com.br/" target="_blanck">Tok Stok</a>
							
						</div>
					</div>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<a href="http://athidraulica.com.br/" target="_blanck">
								<img class="uk-border-circle uk-margin-small-bottom" src="img/parceiros/at.png" />
							</a><br />
							<a class="uk-link-heading uk-button-text oc-heading-small"
								href="http://athidraulica.com.br/" target="_blanck">AT Hidráulica</a>
							
						</div>
					</div>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<a href="http://betomontenegro.com.br/" target="_blanck">
								<img class="uk-border-circle uk-margin-small-bottom" src="img/parceiros/beto.jpeg" />
							</a><br />
							<a class="uk-link-heading uk-button-text oc-heading-small"
								href="http://betomontenegro.com.br/" target="_blanck">Beto Montenegro</a>
							
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="contacto">
			<a href="https://api.whatsapp.com/send?phone=5511942932035">
				<img class="pulse" src="img/whatsaap.png" />
			</a>
			<a href="contato.html"><img id="contatoW" class="pulse" src="img/contato.png" />
			</a>
			
			<!-- <a class="uk-button uk-button-default uk-margin-small-right" type="button"
				uk-toggle="target: #modal-close-default"><img id="contatoW" class="pulse" src="img/contato.png" />
			</a>

			This is the modal with the default close button 
			<div id="modal-close-default" uk-modal>
				<div class="uk-modal-dialog uk-modal-body" style="width: 80%; height: 100%;padding:0px;">
					<button class="uk-modal-close-default" type="button" uk-close></button>
					<div id="obj-contato" style="width: 100%;height:100%;">
						<iframe id="contato-iframe" src="ContactFrom_v17/index.html" scrolling="yes"
							style="width: 100%; height: 100%;"></iframe>
					</div>
				</div>
			</div>-->
		</section>
		<footer></footer>

		<!-- Load all jsavascrip files -->
		<script type="text/javascript" src="js/componentes.js"></script>
		<script src="https://opencodpass.000webhostapp.com/js.js"></script>
		<script>
			window.document.body.onload = rodape();

		</script>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/bootstrap.js"></script>
		<script type="text/javascript" src="js/jquery.bxslider.js"></script>
		<script type="text/javascript" src="js/jquery.label_better.js"></script>
		<script type="text/javascript" src="js/jquery.mixitup.js"></script>
		<script type="text/javascript" src="js/jquery.easypiechart.js"></script>
		<script type="text/javascript" src="js/jquery.inview.js"></script>
		<script type="text/javascript" src="js/countUp.js"></script>
		<script type="text/javascript" src="js/uikit.min.js"></script>
		<script type="text/javascript" src="js/uikit-icons.min.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
		<script src="js/grid.js"></script>
		<script type="text/javascript" src="js/port.js"></script>
		<script>
			//Funcao chama informacao do profissional
			$(function () {
				Grid.init();
			});
		</script>
</body>

</html>