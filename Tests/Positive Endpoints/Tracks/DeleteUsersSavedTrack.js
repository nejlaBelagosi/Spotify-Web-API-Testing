// Fixed the test for response body validation
pm.test("Status code is 200", function(){
    pm.response.to.have.status(200);
});

// checks if response is empty or it contains message like "Item successfully removed"
pm.test("Response body is empty or contains valid message", function(){
    let responseBody = pm.response.text();
    pm.expect(responseBody).to.be.empty;
});
