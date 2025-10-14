//check response status code
pm.test("Response status code is 200", function(){
    pm.response.to.have.status(200);
});

//checks if response is valid JSON format
pm.test("Response is valid JSON fromat", function(){
    pm.response.to.be.json;
});

//checks if response time is less than expected
pm.test("Response time is less than 300ms", function(){
    pm.expect(pm.response.responseTime).to.be.below(300);
});

//checks if array exists and if it's empty
pm.test("Items array exists and is not empty", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("items");
    pm.expect(jsonData.items).to.be.an("array");
    pm.expect(jsonData.items.length).to.be.above(0);
});

//check token validity
pm.test("Check token validity", function(){
    pm.response.to.not.have.status(401);
});

const jsonData = pm.response.json();

//checks if there is a duplicated track in user playlist
pm.test("No duplicated tracks by name", function(){
    // Dohvati sve nazive pjesama u jedan niz
    var trackNames = jsonData.items
    .filter(item => item.track !== null && item.track !== undefined)
    .map(item => item.track.name.toLowerCase().trim());
    // kreiranje set (koji ce ukloniti duplikate)
    var uniqueTrackNames = new Set(trackNames);

    //ako ima razlika u brojevima => postoje duplikati
    pm.expect(uniqueTrackNames.size).to.eql(trackNames.length);
});
