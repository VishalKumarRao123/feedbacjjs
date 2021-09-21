function empty() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("sugges").value = "";
}

function takedetails() {
    debugger;
    //alert("Hello!");
    var fname = document.getElementById("fname").value;
    var midmame = document.getElementById("mname").value;
    var lastname = document.getElementById("lname").value;
    var Gender = document.querySelector('input[name="gender"]:checked').value;

    var feedback = document.getElementById("Feedbackshow").value;
    var suggestion = document.getElementById("sugges").value;

    var d = new Date();
    //alert(fname.length);
    if (fname == "") {
        alert("Please inpur your first name. ");
    } else if (lastname == "") {
        alert("Please inpur your last name. ");
    } else if (fname.length > 40 || midmame.length > 40 || lastname.length > 40) {
        alert("Please inpur your name in 40 char ");
    } else {
        if (midmame.trim() == "")
            name = Gender + " " + fname.trim() + " " + lastname.trim();
        else {
            name = Gender + " " + fname.trim() + " " + midmame.trim() + " " + lastname.trim()
        }
    }
    feedback += "\n" + "Name: " + name + "\n" + "Suggestion: " + suggestion + "\n" + d + "\n";
    document.getElementById("Feedbackshow").value = feedback;
    empty();
}