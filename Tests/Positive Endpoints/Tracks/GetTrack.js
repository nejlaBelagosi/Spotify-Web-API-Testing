//check response status
pm.test("Response status is 200", function(){
    pm.response.to.have.status(200);
});

//check response body
pm.test("Response body contains track information", function(){
    pm.expect(pm.response.json()).to.have.property('id');
    pm.expect(pm.response.json()).to.have.property('name');
    pm.expect(pm.response.json()).to.have.property('album');
    pm.expect(pm.response.json()).to.have.property('artists');
});

//check response headers
pm.test("Response headers contains Content-type", function(){
    pm.expect(pm.response.headers.get('Content-type')).to.include('application/json');
});
