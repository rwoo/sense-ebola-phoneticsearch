describe("phoneticsearch", function() {

  it("calculate phonetic", function() {
  
    expect(phonetic("Alexander")).toEqual("ALKSNTR");
    expect(phonetic("Aleksandr")).toEqual("ALKSNTR");

  });

    
  it("calculate phonetichash from contact", function() {

   var contact = {
     "_id": "23d3386d0cd2a8991f3550ff9200c2c0",
     "_rev": "20-71609139ad67129f600f74281096d547",
	 "doc_type": "contact",
	 "Surname": "ORIYOMI",
     "OtherNames": "SALAUDEEN"
   };
	   
    expect(phonetichash(contact)).toEqual("ARM");
  });
  
});
