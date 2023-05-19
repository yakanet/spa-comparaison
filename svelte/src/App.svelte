<script>
  let firstName = '';
  let lastName = '';

  $: fullName = firstName + ' ' + lastName;

  function reset() {
    firstName = '';
    lastName = '';
  }
</script>

<main>
  <h1>Hi, please enter your name:</h1>
  <p>First: <input bind:value={firstName} /></p>
  <p>Last: <input bind:value={lastName} /></p>
  <p>{ fullName }</p>
  <p><button on:click={reset}>Reset</button></p>
</main>