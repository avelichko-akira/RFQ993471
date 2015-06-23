Meteor.startup(function() {


	var blacklist = /^(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)$/;
	function uniqueArray(arr) {
		var tags = {};

		for (var  i = 0; i < arr.length;) {
			arr[i] = arr[i].toLowerCase();			
			var item = arr[i];
			if (blacklist.test(item) || tags[item] > 0) {
				arr[i] = arr[arr.length - 1].toLowerCase();
				arr.length -= 1;
			} else {
				tags[item] = (tags[item] || 0) + 1;
				i++;
			}
		} 
		
		var newArr = [];
		for (var x in tags) {
			newArr.push(
				{
					key : x, 
					value : tags[x]
				}
			);
		} 
		   
	    newArr.sort(function(t, e) {
	        return e.value - t.value
	    });


	    return newArr;
	};

	Meteor.methods({

		drug_label : function() {			
			var api_key = "aMPyEqulzBLRTglncaRK6iGVR5pnbARPOKJySErf";
			var url = "https://api.fda.gov/drug/label.json?";
			url += 'api_key=' + api_key + '&';
			url += 'search=_exists_:' + 'boxed_warning';

			var result = Meteor.http.get(url, {timeout:30000})
			if (result.statusCode == 200) {
				var res = JSON.parse(result.content);			
				var warnings;
				var words = [];

				for (var i = 0; i < res.results.length; i++) {
					warnings += res.results[i].warnings;					
				}

				words = warnings.match(/\w+/g);
				
				var uwords = uniqueArray(words);
				console.log(uwords);
				return uwords;
			} else {
				console.log('Response issue', result.statusCode);
				throw new Meteor.Error(result.statusCode, 'Error');
			}

			return {"result" : "ok"};
		}
	});

});

