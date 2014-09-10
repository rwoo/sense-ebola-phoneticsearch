function(doc) {

	  // we care only about documents of type "contact"
	  if (doc.doc_type != "contact") {	    
	     return ;
	  }
	 
	  // we care only about documents with visits (must be an array)
	  if (typeof doc.Surname != "string" || doc.Surname.length == 0) {	    
		return;
	  }	
	  
	  var DoubleMetaphone = require('views/lib/doublemetaphone');
      var encoder = new DoubleMetaphone();
      encoder.setMaxCodeLen(7);
	  
			  
	  var phonetichash = encoder.doubleMetaphone(doc.Surname).primary;	  
	  
	  emit(phonetichash, null);
};