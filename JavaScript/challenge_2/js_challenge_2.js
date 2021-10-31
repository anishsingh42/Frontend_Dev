function generateCats()
{
    //create the image element 
    var image = document.createElement("img");
    //get the div where you want the image element
    var div = document.getElementById("flex-box-cat-generator");
    //set the image src 
    image.src = "/challenge_2/img/cat1.jpg";
    //set the height and width
    image.height = 100;
    image.width = 100;
    //append the image in the div that was fetched 
    if(div)
    {
        document.getElementById('flex-box-cat-generator').remove();
    }
    else
    {
        div.appendChild(image);
    }
    
}