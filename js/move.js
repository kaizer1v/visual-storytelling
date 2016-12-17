var scroll = scroller().container(d3.select('#graphic'));

scroll(d3.selectAll('.step'));

// updateFunctions[index](progress);
var images = [];
var directory = "graphs/"
images[0] = directory +"hackathon.jpg";
images[1] = directory +"total_search_categories_draw.jpg";
images[2] = directory +"sports_trends.jpg";
images[3] = directory +"cricket_vs_exams.jpg";
images[4] = directory +"events_sub_genre_trends.png";
images[5] = directory +"earthquake.jpg";
images[6] = directory +"brands_sub_genre_trends.jpg";
images[7] = directory +"thats_all_folks.jpg";

scroll.on('progress', function(index, progress) {
  // console.log(index, progress, images[index]);

  $("#images-graphs").attr("src", images[index]);
});