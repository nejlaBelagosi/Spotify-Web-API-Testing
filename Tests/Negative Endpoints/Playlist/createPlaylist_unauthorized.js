// Goal to test API Endpoint for creating playlist but as an unauthorized user
pm.test("Response status code is 401", function(){
    pm.response.to.have.status(401);
});

//check if error message is correct
pm.test("Response body has correct error message", function(){
    pm.expect(pm.response.json().error).to.have.property("message", "No token provided");
});
