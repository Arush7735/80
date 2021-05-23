name_of_the_guest_array = [];

function submit() {

var name_guest = document.getElementById("name1").value;
names_of_people.push(name_guest);

document.getElementById("display_name").innerHTML=name_of_the_guest_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}










function sort() {

    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);
    document.getElementById("display_name").innerHTML=name_of_the_guest_array;
}