# meteor - Word Cloud System 

This system includes iron-router, Bootstrap 3, Font Awesome, LESS and more.

- Development

  1. Clone this repo to `<yourapp>`

    `git clone https://github.com/akira-tech/RFQ993471.git <yourapp>`

  2. run project
    `cd <yourapp>`    
    `meteor`    

- Deploy 
  
  1. Clone this repo to `<yourapp>`

    `git clone https://github.com/akira-tech/RFQ993471.git <yourapp>`

  2. Deploy project
    `cd <yourapp>`    
    `meteor deloy <site url>`    

- Summary
  
  This project is to show the data visualation using d3 word clud library. 
  To get the words library We made the rest api. 

  server/methods/api.js
    - drug_label
      It's get the data from FDA service url. 
      The data have duplicated words and have bad words like auxiliary verb. 
      After we get the data, we remove the bad words and get uique data.
      Every word has two attributes. key, value.
      Key is word name, value is frequency of word in sentence.
      We returned the json object that converted array. 

  client/home/home.js

    It's to show the data visualation using d3 word clud libary.
    We create the d3 object and called the drug_label api. 
    after we get the data , it's displayed in screen.
      



