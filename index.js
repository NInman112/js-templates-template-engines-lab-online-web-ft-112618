function createPost() {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  let postTemplate = _.template(document.getElementById("post-template").innerHTML)
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  let postTitle = document.getElementById("postTitle").value
  let postText = document.getElementById("postText").value
  let postAuthor = document.getElementById("postAuthor").value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  var blogSection = postTemplate({ 'title': postTitle, 'body': postText, 'poster': postAuthor })
  var commentsSection = commentsTemplate()
  var postElement = document.getElementById("post")

  postElement.innerHTML = blogSection
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commentAuthor").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commentAuthor': commentAuthor, 'commentText': commentText });
}
