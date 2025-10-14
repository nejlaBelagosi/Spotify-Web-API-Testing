// Goal: checking API Endpoint behaviour when we try to add item to the playlist with invalid URI

// check statuscode is 400 when adding invalid URI
pm.test("Status code is 400", function(){
    pm.response.to.have.status(400);
});

// check response body contains error message
pm.test("Response body contains correct error message", function(){
    pm.expect(pm.response.json()).to.have.property('error');
    pm.expect(pm.response.json().error).to.have.property('status', 400);
    pm.expect(pm.response.json().error).to.have.property('message', 'Invalid base62 id');
});
