
describe("layout", function(){
  describe("template", function(){
    it("shows Data visualation header", function(){
      expect($('.template-home h1').text()).toEqual('FDA Data Visualtion');
    });
  });
});
