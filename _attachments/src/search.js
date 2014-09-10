
function phonetic(name) {

    // var DoubleMetaphone = require('doublemetaphone'),
    encoder = new DoubleMetaphone();
	encoder.setMaxCodeLen(7);
    return encoder.doubleMetaphone(name).primary;
}

function phonetichash(doc) {

	  // we care only about documents of type "contact"
	  if (doc.doc_type != "contact") {	    
		return null;
	  }
	 
	  // we care only about documents with visits (must be an array)
	  if (typeof doc.Surname != "string" || doc.Surname.length == 0) {	    
		return null;
	  }	 
			
	  return phonetic(doc.Surname);
}