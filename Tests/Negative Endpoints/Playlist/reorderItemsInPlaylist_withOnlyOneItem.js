//Goal: checking API endpoint behaviour when tracks selected to be reordered are out of playlist scope.

//checks if status code is 400
pm.test("Response status code is 400", function(){
    pm.response.to.have.status(400);
});

//checks if response is JSON
pm.test("Response is valid JSON format", function(){
    pm.response.to.be.json;
});

//checks if response body contains the correct error message
pm.test("Response body contains the correct error message", function(){
    pm.expect(pm.response.json()).to.have.property('error');
    pm.expect(pm.response.json().error).to.have.property('status', 400);
    pm.expect(pm.response.json().error).to.have.property('message', 'Tracks selected to be reordered are out of bounds');
});
