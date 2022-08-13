// code a inclure dans la balise <head> de chaque page html dans une balise <script>

connected = localStorage.getItem("is_connected");
let delay = 1, login_url = new URL("https://eliaaa-webdev.github.io/leo/login.html");
if(!connected){
  setTimeout("document.location.replace(login_url)",delay + '000',);
}
