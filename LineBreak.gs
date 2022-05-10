function addLineBreaks()

{

  var form = FormApp.getActiveForm(); 

  // modify form title 

  var mainTitle = form.getTitle();
  form.setTitle(mainTitle.split("|").join("\n"));


  var subSection = form.getItems(FormApp.ItemType.PAGE_BREAK);

  for(i = 0; i < subSection.length; i++)

  {
    
    var subSectionTitle = subSection[i].getTitle();
      

    subSection[i].setTitle(subSectionTitle.split("|").join("\n"));

  }



  var questions = form.getItems(FormApp.ItemType.PAGE_BREAK);

  for(i = 0; i < questions.length; i++)

  {
    
    var title = questions[i].getTitle();
      

    questions[i].setTitle(title.split("|").join("\n"));

  }

}
