//check status code
pm.test("Status code is 200", function(){
    pm.response.to.have.status(200);
});

//checks if response is valid json
pm.test("Response is valid JSON format", function(){
    pm.response.to.be.json;
});

var jsonData = pm.response.json();

//check if there is duplicated tracks by it's id
pm.test("No duplicated tracks", function(){
    var trackIds = [];
    jsonData.items.forEach(function(item){
        if(trackIds.includes(item.track.id)){
            pm.expect(false).to.be.true;
        };
        trackIds.push(item.track.id);
    });
});

//checks if there is duplicated tracks by it's name
pm.test("No duplicated tracks by name", function(){
    // Dohvati sve nazive pjesama u jedan niz
    var trackNames = jsonData.items.map(item => item.track.name.toLowerCase().trim());
    // kreiranje set (koji ce ukloniti duplikate)
    var uniqueTrackNames = new Set(trackNames);

    //ako ima razlika u brojevima => postoje duplikati
    pm.expect(uniqueTrackNames.size).to.eql(trackNames.length);
});

