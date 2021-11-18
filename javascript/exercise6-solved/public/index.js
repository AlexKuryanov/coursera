// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
  var commandName = command.split(' ')[0];

  if (commandName === 'ADD') {
    let contact = command.split(' ')[1];
    let phone = command.split(' ')[2];
    phone = phone.split(',').join(', ');
    return addContact(contact, phone);
  }

  if (commandName === 'REMOVE_PHONE') {
    let phoneToDel = command.split(' ')[1];
    return deletePhone(phoneBook, phoneToDel);
  }

  if (commandName === 'SHOW') {
    return showPhoneBook(phoneBook);
  }

  function addContact(key, value) {
    if (!phoneBook.hasOwnProperty(key)) {
      phoneBook[key] = value;
    } else {
      if (phoneBook[key] === '') {
        phoneBook[key] = value;
      } else {
        phoneBook[key] += `, ${value}`;
      }
    }
  }

  function deletePhone(book, numToDel) {
    for (const key in book) {
      var isDeleted = true;
      let arrStr = book[key].split(', ');
      let idx = arrStr.indexOf(numToDel);
      if (idx !== -1) {
        arrStr.splice(idx, 1);
        if (arrStr !== []) {
          book[key] = arrStr.join(', ');
          break;
        } else {
          delete book[key];
        }
      } else {
        isDeleted = false;
      }
    }
    return isDeleted;
  }

  function showPhoneBook(book) {
    var arr3 = [];
    for (const key in book) {
      if (book[key] !== '') {
        arr3.push(`${key}: ${book[key]}`)
      }
    }
    return arr3.sort();
  }
};
