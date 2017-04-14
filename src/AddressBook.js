function AddressBook() {
  // Add a PROPERTY to the CLASS with THIS
  // (Don't make contacts a global variable, as I did to
  // get around the problem of making sure it was always
  // defined)
  this.contacts = [];
  this.initialComplete =false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
  var self = this;

  setTimeout(function() {
    // the line "self.initialComplete = true;" within the callback
    // is the important part of this function (the rest is just
    // boilerplate to make it act asynchronous). This is what our fake
    // API call will do when the asynchronous function is complete.
    // NOTE that we gave it an initial value of false within the constructor.
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
};

AddressBook.prototype.addContact = function(newContact) {
  this.contacts.push(newContact);
};

AddressBook.prototype.getContact = function(index) {
  return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index, 1);
};



