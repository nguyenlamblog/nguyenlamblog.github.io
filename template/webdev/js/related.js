function rcentbytag(e) {
  document.write('<div class="scroll">');
  for (var t = 0; t < e.feed.entry.length; t++) {
    var n = e.feed.entry[t];
    var r = n.title.$t;
    var rs = r.slice(0,35);
    var i;
    if (t == e.feed.entry.length) break;
    for (var o = 0; o < n.link.length; o++) {
      // if (n.link[o].rel == "replies" && n.link[o].type == "text/html") {
      //   var u = n.link[o].title; 
      //   var f = n.link[o].href
      // }
      if (n.link[o].rel == "alternate") {
        i = n.link[o].href;
        break
      }
    }
    var l;
    try {
      l = n.media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/w280-h140-p-k-no-nu")
    }
    catch (h) {
    }
    if(l==undefined || l.includes("img.youtube.com")){
      l = "https://fiik346.github.io/img/noimage2by1.svg"
    }
    var p = n.published.$t;
    var v = p.substring(0, 4);
    var m = p.substring(5, 7);
    var g = p.substring(8, 10);
    var y = new Array;
    y[1] = "Januari";
    y[2] = "Februari";
    y[3] = "Maret";
    y[4] = "April";
    y[5] = "Mei";
    y[6] = "Juni";
    y[7] = "Juli";
    y[8] = "Agustus";
    y[9] = "September";
    y[10] = "Oktober";
    y[11] = "November";
    y[12] = "Desember";
    
    document.write('<div class="card">');
    if (showpostthumbnails == true) document.write('<a href="' + i + '" target ="_blank" title="' + r + '" class="d-block"><img class="card-img-top lazyload" alt="' + r + '" data-src="' + l + '"/></a>');
    document.write('<div class="card-body">');
    document.write('<h3 class="card-title"><a href="' + i + '" target ="_blank" data-toggle="tooltip" title="' + r + '" rel="nofollow">' + rs + '</a>...</h3>');
    var x = "";
    var T = 0;
    if (showpostdate == true) {
      x = '<span class="small text-muted">' + x + g + " " + y[parseInt(m, 10)] + " " + v + "</span>";
      T = 1
    }
    document.write(x);
    document.write("</div>");
    document.write("</div>");
  }
  document.write("</div>")
} 
