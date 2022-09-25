let xhr = new XMLHttpRequest();
xhr.open("POST", "https://apis.hotelelissam.com/mailer/simplemail/queue/");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
    "branch":"mboppi",
    "service":"lodging",
    "data":{
        "name":"telmah",
        "phone":237683722677,
        "email":"tantohtelmah@gmail.com",
        "message":"this is test"
        }

}`;