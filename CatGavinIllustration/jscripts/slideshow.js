var slideIndex = 1;
showSlide(slideIndex);

function arrowClick(x)
{
	showSlide(slideIndex += x);
}

function currentSlide(x)
{
	showSlide(slideIndex = x);
}

function showSlide(x)
{
	var i;
	var currentImage = document.getElementsByClassName("slideImages");
	var dots = document.getElementsByClassName("dot");
	if(x > currentImage.length)
	{
		slideIndex = 1;
	}
	if(x < 1)
	{
		slideIndex = currentImage.length;
	}
	
	for (i = 0; i < currentImage.length; i++)
	{
		currentImage[i].style.display = "none";
	}
	for(i = 0; i < dots.length; i++)
	{
		dots[i].className = dots[i].className.replace(" activeDot", "");
	}
	currentImage[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " activeDot";
}