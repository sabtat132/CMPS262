fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=MZ7AJiGIKIrgVSGsLi8BlNr7w26OOVzB')
.then(response =>{
  return response.json()
})
.then(data =>{
  console.log(data.response.docs[0].display_title.main)
})
.catch(data=>{
  //do something here if an error occurs
})
