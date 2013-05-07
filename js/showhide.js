			//Cufon
				Cufon.replace('h1');
				Cufon.replace('.button');
			//HIDESHOW
				//--HOME
					$(document).ready(function() {
						$('#home').click(function() {
							$('#sub').hide('slow');
							$('#set').hide('slow');
							$('#game').hide('slow');
							if ($('#homepage').css('display') == "none")
								$('#homepage').show('slow');
							else
								$('#homepage').hide('slow');
						});
					});
				//--SUBTRACTION
					$(document).ready(function() {
						$("#sub").hide();
					});
					$(document).ready(function() {
						$('#submethod').click(function() {
							$('#homepage').hide('slow');
							$('#set').hide('slow');
							$('#game').hide('slow');
							if ($('#sub').css('display') == "none")
								$('#sub').show('slow');
							else
								$('#sub').hide('slow');
						});
					});
				//--SET-EQUAL
					$(document).ready(function() {
						$("#set").hide();
					});
					$(document).ready(function() {
						$('#setequal').click(function() {
							$('#homepage').hide('slow');
							$('#sub').hide('slow');
							$('#game').hide('slow');
							if ($('#set').css('display') == "none")
								$('#set').show('slow');
							else
								$('#set').hide('slow');
						});
					});
				//--GAME
					$(document).ready(function() {
						$("#game").hide();
					});
					$(document).ready(function() {
						$('#intgame').click(function() {
							$('#homepage').hide('slow');
							$('#set').hide('slow');
							$('#sub').hide('slow');
							if ($('#game').css('display') == "none")
								$('#game').show('slow');
							else
								$('#game').hide('slow');
						});
					});