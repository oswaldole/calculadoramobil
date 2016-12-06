var App = function(){
	var inicio='#inicio';
	var presupuestos ='#presupuestos';
	var navegacion = '.navegacion';

	var comp_inicio = 'componentes/inicio.html';
	var comp_presupuestos = 'componentes/presupuestos.html';
	var comp_menu = 'componentes/menu.html';

	var initComponente = function(selector, componente, callback){
		$(selector).load(componente, callback);
	};

	var refresh = function(){
		$('[data-role="page"]').trigger('create');
	};


this.init = function(){
	initComponente(inicio, comp_inicio, function(){
		initComponente(navegacion, comp_menu, function(){
			refresh();
		});
	});

	initComponente(presupuestos, comp_presupuestos, function(){
		initComponente(navegacion, comp_menu, function(){
			refresh();
		});
	});
};

this.refreshNavegacion = function(){
	var pagina = $(':mobile-pagecontainer').pagecontainer('getActivePage').attr('id');
	$('[data-role="navbar"] a').removeClass('ui-btn-active');
	$('a[href="#'+ pagina +'"]').addClass('ui-btn-active');
};



};


$(document).on('pagebeforeshow', function(){

	var app = new App();
	app.init();
	});


$(document).on('pagechange', function(){

	var app = new App();
	app.refreshNavegacion();

});

/*	$('#inicio').load('componentes/inicio.html', function(){
		$('.navegacion').load('componentes/menu.html', function(){ 
			$('[data-role="page"]').trigger('create');
		});
	});

	$('#presupuestos').load('componentes/presupuestos.html', function(){
		$('.navegacion').load('componentes/menu.html', function(){ 
			
		});
	});*/


	