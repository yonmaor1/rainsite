var postData = [{
  "title": "piece 1",
  "year": "2023",
  "image": "assets/abstraction.png",
  "medium": "mixed media",
  "description": "lorem ipsum",
},
{
  "title": "piece 2",
  "year": "2023",
  "image": "assets/ec9.png",
  "medium": "mixed media",
  "description": "lorem ipsum",
},
{
  "title": "piece 3",
  "year": "2023",
  "image": "assets/taman.JPG",
  "medium": "mixed media",
  "description": "lorem ipsum",
},
{
  "title": "piece 4",
  "year": "2023",
  "image": "assets/taman.JPG",
  "medium": "mixed media",
  "description": "lorem ipsum",
},
];

function append_json(data) {
//Set Up the template
var s = $("#postTemplate")[0].innerHTML.trim();
var holder = document.createElement('div');
holder.innerHTML = s;
var template = holder.childNodes;

var member = document.getElementById('newmembers');
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

  $(".newmembers").append(newItem);

});
}

$("document").ready(function() {
append_json(postData);
});