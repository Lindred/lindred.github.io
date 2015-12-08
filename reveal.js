window.onload = reveal;

function reveal()
{
	var aboutNav = document.getElementById('aboutNav');
	var aboutText = document.getElementById('aboutText');
	var linksNav = document.getElementById('linksNav');
	var linksList = document.getElementById('linksList');
	// var hidden = document.getElementsByClassName('hidden');

	aboutText.style.opacity = '0';
	linksList.style.opacity = '0';

	aboutNav.addEventListener('mouseenter', function(e)
		{
			aboutText.style.transition = 'opacity 1s';
			aboutText.style.opacity = '1';
		});

	aboutNav.addEventListener('mouseleave', function(e)
		{
			aboutText.style.transition = 'opacity 1s';
			aboutText.style.opacity = '0';
		});

	linksNav.addEventListener('mouseenter', function(e)
		{
			linksList.style.transition = 'opacity 1s';
			linksList.style.opacity = '1';
		});
}
