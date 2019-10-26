var url = "https://www.flickr.com/services/api/explore/flickr.photos.search"

$.getJSON(url, { 
    "api_key": "9d8466aa8200562129890c7265d8baf6",
    "per_page": 6,
    "format": "json",
    "nojsoncallback": 1
    },
    
    function(json_resp) {
        var op = $.each(json_resp["photos"]["photo"]);
});

$.each(op, function(i, lista) {

    // Construir link src
    var link_src = "https://farm" + lista["farm"] + ".staticflickr.com/" + lista["server"] + "/" +lista["id"]+"_" +lista["secret"]+ ".jpg"

    // Aplicar imagens na pagina
    var img = $('<img >');
    img.attr('src', link_src);
    img.appendTo('#pics');
});