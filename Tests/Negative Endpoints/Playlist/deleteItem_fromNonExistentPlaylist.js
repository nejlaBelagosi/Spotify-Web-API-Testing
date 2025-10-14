// Goal to check API Endpoint behaviour if we provide non-existant snapshotId
pm.test("Response status code is 404", function(){
    pm.response.to.have.status(404);
});

//check if response body contains error message
pm.test("Response body contains correct error message", function(){
    pm.expect(pm.response.json().error).to.have.property("message", "Resource not found");
});
