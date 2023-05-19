document.addEventListener('load', () => {
  const firstName = document.querySelector('[name=firstName]');
  const lastName = document.querySelector('[name=lastName]');
  const reset = document.querySelector('#reset');
  const fullName = document.querySelector('#fullName');

  const invalidateFullName = () => {
    fullName.innerHTML = firstName.value + ' ' + lastName.value;
  }

  reset.addEventListener('click', () => {
    firstName.value = '';
    lastName.value = '';
    invalidateFullName();
  });

  firstName.addEventListener('input', () => {
    invalidateFullName();
  });

  lastName.addEventListener('input', () => {
    invalidateFullName();
  });

  invalidateFullName();
}, true)