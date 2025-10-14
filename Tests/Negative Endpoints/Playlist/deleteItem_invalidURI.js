//Goal: To check API Endpoint bevaiour when we try to delete track from playlist with invalid trackId

//check if response status is 400
pm.test("Status code is 400", function(){
    pm.response.to.have.status(400);
});

//check if response contain correct message
pm.test("Track uri is invalid", function(){
    pm.expect(pm.response.json().error).to.have.property("message", 'Invalid base62 id');
});
