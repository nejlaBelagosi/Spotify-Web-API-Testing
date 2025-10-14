//checks status code
pm.test("Response status code is 200", function(){
    pm.response.to.have.status(200);
});

//checks if response is valid json
pm.test("Response is valid JSON fromat", function(){
    pm.response.to.be.json;
});

const jsonData = pm.response.json();

