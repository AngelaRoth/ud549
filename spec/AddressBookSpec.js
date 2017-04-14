// Decide to take an object oriented approach to this problem,
// and intantiate a new AddressBook Object in our spec.
describe('Address Book', function() {
  var addressBook,
      thisContact;

  // Code herein runs before each test within this test suite
  // Why not add repeated addressBook.addContact(thisContact); line too?
  // We're not sure if this functionality will be required for any
  // future specs we might write within this suite.
  beforeEach(function() {
    addressBook = new AddressBook(),
    thisContact = new Contact();
  });

  it('should be able to find a contact', function() {
    // To add a contact, we will need some sort of addContact
    // method in our address book. What would we pass to addContact?
    // We'll need some kind of object, so (above) we created a new Contact
    // Object and instantiated it as thisContact
    addressBook.addContact(thisContact);

    // Think: what is a good way for me to test that this contact was
    // actually added to my address book? I expect that, if I were to get the
    // first contact in my address book, it would be the same as thisContact.
    // In doing this, we also see that we will need to add a getContact method
    // into our address book, one which accepts an integer index.
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function() {
    // Add contact to address book, to we can delete it.
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

// Write a new test suite, within which we have a new spec which
// should grab initial contacts.
describe('Async Address Book', function() {
  // address book in suite-level scope
  var addressBook = new AddressBook();

  // Pass done to the callback of the beforeEach function.
  // Call addressBook.getInitialContacts, just as normal, but within
  // its callback we then call the done function. This will signal to
  // the framework that our asynchronous function is done doing what we
  // needed it to do and we can continue testing.
  beforeEach(function(done) {
    addressBook.getInitialContacts(function() {
      done();
    });
  });

  // The only other thing we need to do is signal to the framework
  // which of our tests rely upon that asynchronous execution.
  // Again, we use done to signal this. We pass done to our function
  // within our spec; we then just call done after our tests.
  it('should grab initial contacts', function(done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
