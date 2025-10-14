// Goal: to check API endpoint behaviour if we try to create playlist but we left playlist name empty

//check status code
pm.test("Response has statuscode 400", function(){
    pm.response.to.have.status(400);
});

// check if response contain correct message
pm.test("Check if playlist name is required", function(){
    pm.expect(pm.response.json().error).to.have.property('message', "Missing required field: name");
})
