//checks status code
pm.test("Response statuse code is 201", function () {
    pm.response.to.have.status(201);
});

//checks if response is valid JSON format
pm.test("Response is valid JSON format", function () {
    pm.response.to.be.json;
});

const jsonData = pm.response.json();

//creating playlist id
pm.environment.set("playlistId", jsonData.id);

//checks if response body has all required properties
pm.test("Playlist has required properties", function () {
    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData).to.have.property("name");
    pm.expect(jsonData).to.have.property("description");
    pm.expect(jsonData).to.have.property("public");
})

//checks if the playlist name is eql to the playlist name from the request
const requestBody = JSON.parse(pm.request.body.raw);
pm.test("Playlist name is correct", function () {
    pm.expect(jsonData.name).to.eql(requestBody.name);
});

// checks playlist visibility
pm.test("Playlist visibility is correct", function () {
    pm.expect(jsonData.public).to.eql(requestBody.public);
});
