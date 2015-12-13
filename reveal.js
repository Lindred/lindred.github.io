window.onload = reveal;

function reveal()
{
	var title = document.getElementById('title_h1');
	var aboutNav = document.getElementById('aboutNav');
	var aboutText = document.getElementById('aboutText');
	var linksList = document.getElementById('linksList');
	var videoNav = document.getElementById('videoNav');

	var videoContainerPosition = $('#videoContainer').offset().top;
	var scrollDuration = 1500;
	var easeStyle = 'easeInOutSine';

	title.style.transition = 'text-shadow 3.0s';
	aboutText.style.opacity = '0';

	title.addEventListener('click', function(e)
		{
			title.style.textShadow = '#002EFF -2px 0 15px';
			// put scroll function here
			// when finished scrolling, change opacity
			$('body').animate({scrollTop: 0}, scrollDuration, easeStyle);
		});

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
			title.style.textShadow = '#00D800 -2px 0 15px';
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

	videoNav.addEventListener('click', function(e)
		{
			title.style.textShadow = 'red -4px 0 18px';
			// put scroll function here
			// when finished scrolling, change opacity
			$('body').animate({scrollTop: videoContainerPosition}, scrollDuration, easeStyle);
		});
}
