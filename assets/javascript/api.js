var apiKey = "4d7b6be708514fb38ba42159116c9400";
var searchTerm = "new york";
var numberRec = "5";
var startDate = "20000816"; ///YYYYMMDD
var endDate = "";


$(document).ready(function () {
    APICall();

});

function APICall() {

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?api-key=" + apiKey;
    /* url += '?' + $.param({
        'api-key': apiKey,
        'q': searchTerm,
        'fq': numberRec
    }); */
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4d7b6be708514fb38ba42159116c9400&q=Arizona&fq=5
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?4d7b6be708514fb38ba42159116c9400&q=Arizona&fq=5
    if(true){
        url += '&q='+ searchTerm;
    }
    if(true){
        url += '&fq='+ numberRec;
    }
    console.log(url);

    /*,
    'begin_date': startDate,
    'end_date': endDate*/


    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
        console.log(result.response.docs[0]);
        CreateDiv(result.response.docs);

    }).fail(function (err) {
        throw err;
    });
}


function CreateDiv(stories) {
    for(var i = 0; i < stories.length; i++){
        var storyDiv = $("<div>");
        var heading = $("<h3>").text(i+1+ " " +stories[i].headline.main);
        var by = $("<h5>").text(stories[i].byline.original);

        storyDiv.append(heading);
        storyDiv.append(by);
        $("body").append(storyDiv);
        

    }
}