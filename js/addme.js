var saveBtn = document.getElementById("add-contacts");
saveBtn.addEventListener("click", function () {
  // Get the contact information from the website
  var contact = {
    name: "Ahmed Rashed",
    phone: "+201002825028",
    email: "iarashed@live.com"
  };
  // create a vcard file
  var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;
  
  newLink.click();
});