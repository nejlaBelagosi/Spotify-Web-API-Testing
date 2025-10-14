// Goal to check API Endpoint behaviour if we provide non-existant snapshotId
pm.test("Response status code is 400 or 502", function(){
    pm.expect(pm.response.code).to.be.oneOf([400, 502]);
});

//check if response body contains error message
pm.test("Response body contains correct error message", function(){
    pm.expect(pm.response.json().error).to.have.property("message", "Error while loading resource");
});
