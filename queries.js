/* Add all the required libraries*/
var 
mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, { useNewUrlParser: true });

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

//passing a callback executes the query
/*
   The callback function receives (err, rawResponse).
  err is the error if any occurred
  rawResponse is the full response from Mongo

*/



var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({ name: 'Library West'}, function(err, listing) 
  {
    if(err)
    {
      throw err;
    }
    console.log(listing);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({ code: 'CABL'}, function(err, listing)
   {
    if(err)
    {
      throw err;
    }
    console.log(listing);
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps LAb address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  //update to Museum Rd, Gainesville, FL 32603

 //new: bool - if true, return the modified document rather than the original. defaults to false
  Listing.findOneAndUpdate({ code: 'PHL'},{address: 'Museum Rd, Gainesville, FL 32603'}, {new:true}, function(err, listing)
  {
    if(err)
    {
      throw err;
    }
    console.log(listing);
  });
};


var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({},function(err, listing)
  {
    if(err)
    {
      throw err;
    }
    const util = require('util')
    console.log(util.inspect(listing, { maxArrayLength: null }))
  

  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();