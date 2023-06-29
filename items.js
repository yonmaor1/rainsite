var items = [
  {
    "title": "empty classrooms #11",
    "year": "2023",
    "image": "assets/ec11.png",
    "medium": "acrylic on canvas",
    "description": "lorem ipsum",
  },
  {
  "title": "empty classrooms #11",
  "year": "2023",
  "image": "assets/abstraction.png",
  "medium": "acrylic on panel",
  "description": "lorem ipsum",
},
{
  "title": "empty classrooms #9",
  "year": "2023",
  "image": "assets/ec9.png",
  "medium": "acrylic on canvas",
  "description": "lorem ipsum",
},
{
  "title": "this box will make you sexy",
  "year": "2022",
  "image": "assets/box.JPG",
  "medium": "mixed media",
  "description": "lorem ipsum",
},
{
  "title": "dinner date",
  "year": "2023",
  "image": "assets/dinnerdate.JPG",
  "medium": "mixed media",
  "description": "lorem ipsum",
},
{
  "title": "waves",
  "year": "2022",
  "image": "assets/small-boat.JPG",
  "medium": "laser cut plywood, 3D printed PLA",
  "description": "lorem ipsum",
},
{
  "title": "riso",
  "year": "2023",
  "image": "assets/riso.png",
  "medium": "risograph print",
  "description": "lorem ipsum",
},
{
  "title": "self portrait",
  "year": "2022",
  "image": "assets/imageSamplingSquare.jpg",
  "medium": "digital",
  "description": "lorem ipsum",
},
];

function append_json(data) {
  //Set Up the template
  var s = $("#postTemplate")[0].innerHTML.trim();
  var holder = document.createElement('div');
  holder.innerHTML = s;
  var template = holder.childNodes;

  var member = document.getElementById('container');
  data.forEach(function(object) {

    //Clone Template
    var newItem = $(template).clone();

    //Populate it
    $(newItem).find(".title").html(object.title);
    $(newItem).find(".year").html($(newItem).find(".year").html() + " " + object.year);
    // $(newItem).find(".image").attr("href", object.image);
    var img = $(newItem).find(".work-img")
    $(img).attr("src", object.image).attr("alt", $(img).attr("alt") + object.membername + " " + "etc")
      .attr("title", $(img).attr("title") + object.membername + " finish this off");
    $(newItem).find(".medium").html(object.medium);
    $(newItem).find(".description").html(object.description);
    //Append it

    $(".container").append(newItem);

  });
}

$("document").ready(function() {
  append_json(items);
});