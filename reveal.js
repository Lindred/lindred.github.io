// $('html,body').animate({scrollTop: 500}, 1500, "easeInOutSine");
// $('body').animate({scrollTop: $('#videoContainer').offset().top}, 1500, "easeInOutSine")
window.onload = reveal;

function reveal()
{
	var aboutNav = document.getElementById('aboutNav');
	var aboutText = document.getElementById('aboutText');
	var linksNav = document.getElementById('linksNav');
	var linksList = document.getElementById('linksList');
	var videoNav = document.getElementById('videoNav');

	var videoContainerPosition = $('#videoContainer').offset().top;
	var scrollDuration = 1500;
	var easeStyle = 'easeInOutSine';

	aboutText.style.opacity = '0';
	linksList.style.opacity = '0';

	aboutText.addEventListener('mouseenter', function(e)
		{
			aboutText.style.transition = 'opacity 2s';
			aboutText.style.opacity = '1';
		});

	aboutText.addEventListener('mouseleave', function(e)
		{
			aboutText.style.transition = 'opacity 1s';
			aboutText.style.opacity = '0';
		});

	aboutNav.addEventListener('click', function(e)
		{
			$('body').animate({scrollTop: $('#aboutDiv').offset().top}, 1500, "easeInOutSine", function()
					{
						// when finished scrolling, change opacity
						aboutText.style.transition = 'opacity 1.5s';
						aboutText.style.opacity = '1';
					});
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

	videoNav.addEventListener('click', function(e)
		{
			// put scroll function here
			// when finished scrolling, change opacity
			$('body').animate({scrollTop: videoContainerPosition}, scrollDuration, easeStyle);
		});
}
