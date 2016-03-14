Journal = function(title, entryDate, content) {
  this.title = title;
  this.entryDate = entryDate;
  this.content = content;
}

  Journal.prototype.wordCount = function() {
    var content = this.content;
    return content.split(' ').length;
  }

  $(document).ready(function() {


  $("form#journalEntry").submit(function(event) {
    event.preventDefault();
    var inputTitle = $('input#title').val();
    var inputEntryDate = $('input#entryDate').val();
    var inputContent = $('input#content').val();
    var newEntry = new Journal(inputTitle, inputEntryDate, inputContent);
    var inputWordCount = newEntry.wordCount(content);

    console.log(newEntry.dateFormat());

      $("#entry").append("<li>" + inputTitle + "</li><ul><li>" +  inputEntryDate + "</li> <li>" + inputContent + "</li> <li>" +"Word Count: " + inputWordCount);

  });
});