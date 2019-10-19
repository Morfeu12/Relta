function menuNavegacao(id){
    var menuNav = `
    <!-- Fixed navbar -->
    <div class="navbar navbar-smak navbar-fixed-top " id="navbar" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><i
                        class="fa fa-bars"></i></button>
                <a class="navbar-brand animate" onclick="recarregar('../index.html')"><img src="../img/logo no background.png" alt="logo1"></a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right animate">
                    <li><a id="menu-1" onclick="recarregar('../index.html')"></a></li>
                    <li><a id="menu-2" onclick="recarregar('../index.html#services')"></a></li>
                    <li><a id="menu-3" href="#"></a><div uk-dropdown="offset: 0">
                            <ul class="uk-nav uk-dropdown-nav">
                                <li><a href="casa-gp.html">Casa GP</a></li>
                                <li><a href="casa-verde.html">Casa Verde</a></li>
                                <li><a href="ccsp.html">CCSP</a></li>
                                <li><a href="esv.html">ESV</a></li>
                                <li><a href="guarulhos.html">Guarulhos</a></li>
                                <li><a href="vila-madalena.html">Vila Madalena</a></li>
                            </ul>
                        </div></li>
                    <li><a id="menu-4" onclick="recarregar('../index.html#about')"></a></li>
                    <li><a id="menu-5" onclick="recarregar('../index.html#contact')"></a></li>
                    <li>
                        <span id="idioma"><a onclick="lang_BR()">BR</a>&nbsp;|&nbsp;
                            <a onclick="lang_EN()">EN</a></span>
                    </li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </div>

    <div uk-slideshow="animation: fade;autoplay:true; autoplay-interval:7000;pause-on-hover:false">

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

            <ul class="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 25">
                <li>
                    <img src="../img/Banner/banner1.png" alt="" uk-cover>
                    <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
                        <h3 id="banner-1" class="uk-margin-remove"></h3>
                        <p id="banner-msg-1" class="uk-margin-remove"></p>
                    </div>
                </li>
                <li>
                    <img src="../img/Banner/banner2.png" alt="" uk-cover>
                    <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
                        <h3 id="banner-2" class="uk-margin-remove"></h3>
                        <p id="banner-msg-2" class="uk-margin-remove"></p>
                    </div>
                </li>
                <li>
                    <img src="../img/Banner/banner3.png" alt="" uk-cover>
                    <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
                        <h3 id="banner-3" class="uk-margin-remove"></h3>
                        <p id="banner-msg-3" class="uk-margin-remove"></p>
                    </div>
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
                uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                uk-slideshow-item="next"></a>

        </div>

        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

    </div>`,
    element = !!document.querySelector(id),
	el = document.querySelector(id)
	if(element){
		el.innerHTML = menuNav
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}
function rodape(){
    var rodape = `
            <div class="container">
                <p id="copyright">©Copyright <a href='http://www.relta.com.br/'>Relta.com</a> 2014 All rights
                    reserved<br />
                    By: <a href="https://www.linkedin.com/in/omarcosta152">Omar Costa</a></p>
                <ul class="social-list">
                    <li class="facebook">
                        <a href="http://goo.gl/RqhEjP"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li class="twitter">
                        <a href="http://goo.gl/hUfpSB"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li class="dribbble">
                        <a href="http://goo.gl/k9zAy5"> <i class="fa fa-dribbble"></i></a>
                    </li>
                    <li class="youtube">
                        <a href="#"><i class="fa fa-youtube"></i></a>
                    </li>
                </ul>
                <a href="#banner-1" class="square-l goup" style="position: relative">
                    <span>
                        <span class="fa fa-angle-double-up fa-2x"></span>
                    </span>
                </a>
            </div>`,
            element = !!document.querySelector('footer'),
	        el = document.querySelector('footer')
	        if(element){
		        el.innerHTML = rodape
	        } else {
		        console.log("A tag <footer> nao existe!")
	        }
}
function addPortfolio(id){
    var port = `
    <!-- Inicio partifolio -->
    <section id="more-port" style="margin-bottom: 30px;">
        <div class="uk-container uk-container-large">
            <div class="heading">
                <h1 id="port_titulo">Outros Projetos</h1>
                <div class="divider"><span></span></div>
                <p id="port_desc">Conheça todos os nossos projetos.</p>
            </div>

            <!--Uikit portifolio-->
            <div uk-slider>
                <div class="uk-position-relative">
                    <!-- lista Clientes -->
                    <div class="uk-slider-container">
                        <!-- uk-child-width-1-2@s ajuste resolucao maior que 640x; uk-child-width-1-6@l ajuste resolucao maior que 1200 -->
                        <ul id="projetos"
                            class="uk-slider-items uk-child-width-1-2 uk-child-width-1-1@s uk-child-width-1-6@l">
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="casa-gp.html"><img src="../img/portfolio/casaGP/Capa.jpg"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_1" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="casa-gp.html">Casa GP</a>
                                        <p id="port_op_1_desc"></p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="casa-verde.html"><img src="../img/portfolio/Casa Verde/Capa.JPG"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_2" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="casa-verde.html">Casa Verde</a>
                                        <p id="port_op_2_desc"></p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="ccsp.html"><img src="../img/portfolio/ccsp/Capa.jpg" alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_3" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="ccsp.html">CCSP</a>
                                        <p id="port_op_3_desc"></p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="guarulhos.html"><img src="../img/portfolio/vl madalena/Capa.jpg"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_4" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="guarulhos.html">Guarulhos</a>
                                        <p id="port_op_4_desc"></p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="vila-madalena.html"><img
                                                src="../img/portfolio/vl madalena/Capa.jpg" alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_5" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="vila-madalena.html">Vila Madalena</a>
                                        <p id="port_op_5_desc"></p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="esv.html"><img src="../img/portfolio/ESV/Capa.png"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_5" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="esv.html">ESV</a>
                                        <p id="port_op_5_desc">Descricao da Obra.</p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                    </div>
                    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    <div class="uk-hidden@s uk-light">
                        <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous
                            uk-slider-item="previous"></a>
                        <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next
                            uk-slider-item="next"></a>
                    </div>

                    <div class="uk-visible@s">
                        <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous
                            uk-slider-item="previous"></a>
                        <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next
                            uk-slider-item="next"></a>
                    </div>
                </div>
            </div>
    </section>
    <!-- FIM Portifolio-->
    `
    element = !!document.querySelector(id),
	el = document.querySelector(id)
	if(element){
		el.innerHTML = port
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}