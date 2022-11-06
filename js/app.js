'use strict';
const 


( async ()=>{
  try {
    const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/advance");
    const data = await response.json();
    renderD(data);
  }
  catch(err){
    error(err)
  }
})();
function renderD(postData){
  postData;
}