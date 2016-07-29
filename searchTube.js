//show JSON by using strinify to create a strong that can be used as a variable and added to the innerHTML #response
$(function(){
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCX9ZTK48f0vQ5_iPDc1yK37ADI5IUQpmw');    
    search();
}

function search(){
	var request = gapi.client.youtube.search.list({
		part: 'snippet',
		q: 'red'
	}); 
	request.execute(onSearchResponse);
}

function onSearchResponse(response){
	showResponse(response);
	}
});