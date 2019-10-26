var url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5f2a2cdf326ef35cd54421079b615f9a&per_page=6&format=json&nojsoncallback=1"


var url2 = "https://www.flickr.com/services/api/explore/flickr.photos.search"

$.getJSON(url2, { 
    "api_key": "9d8466aa8200562129890c7265d8baf6",
    "per_page": 6,
    "format": "json",
    "nojsoncallback": 1
    },
    
    function(lista) {
        console.log(lista);
});


// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5f2a2cdf326ef35cd54421079b615f9a&per_page=6&format=json&nojsoncallback=1


//  { "photos": { "page": 1, "pages": "140020", "perpage": 6, "total": "840120", 
//     "photo": [
//       { "id": "48960507737", "owner": "168955518@N08", "secret": "8571148794", "server": "65535", "farm": 66, "title": "2019_02_13-09_17_23.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//       { "id": "48960507732", "owner": "37548647@N04", "secret": "03512901b3", "server": "65535", "farm": 66, "title": "PJR_4079.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//       { "id": "48960321701", "owner": "142555568@N05", "secret": "183a93225e", "server": "65535", "farm": 66, "title": "Effin around XD", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//       { "id": "48960507682", "owner": "184886499@N02", "secret": "58413abdc2", "server": "65535", "farm": 66, "title": "OSHO's BIOGRAPHY - Osho Dhara", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//       { "id": "48960321601", "owner": "144799440@N08", "secret": "254f9818fd", "server": "65535", "farm": 66, "title": "1025191406a", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//       { "id": "48960321561", "owner": "27171618@N08", "secret": "5100ee6ea9", "server": "65535", "farm": 66, "title": "#Praguecaatle #prague #czechrepublic", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
//     ] }, "stat": "ok" }


// https://www.flickr.com/photos/alanshapiro/45034330775/in/photolist-254SNiN-2e6fwnx-2chUi5S-2bASEPN-TaEi9Q-2bBwHyT-2hAsEzV-2hAsCHD-2hArpKf-2hAofaS-2hAoeeP-2hAqcbz-2hAq6CS-2hAq6tZ-2hAq6pL-2hAp7Yo-2hAmi5d-2hAq5WM-2hAp7vp-2hAmgWB-2hAp5Ls-2hAoDhg-2hAoavV-2hAoahy-2hAkk71-2hAo9R3-2hAp6WK-2hAkjgo-2hAkj18-2hAp6jc-2hAo8id-2hAjuQm-2hAo8um-2hAnU1Y-2hAmSrC-2hAmS24-2hAmNQ9-2hAhVzq-2hAhH8G-2hAmgNQ-2hAm9jm-2hAm7gP-2hAh2gh-2hAgDYx-2hAgqC9-2hAjGec-2hAfNWz-2hAfNUq-2hAjAjG-2hAfNLQ