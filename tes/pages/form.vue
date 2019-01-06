<template>
<div class="container">
      <h1 class="intro">Test Form</h1>
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" id="name" />
        </div>

        <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" class="form-control" name="email" id="email" />
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" name="message" id="message" rows="5"></textarea>
        </div>

        <button type="submit" class="btn btn-square btn-sm btn-filled-blue">Send message</button>
    </form>
    </div>
</template>

<style>
.btn {
  color: #fff;
  background-color: transparent;
  outline: 0;
  -moz-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  font-family: 'Ubuntu', sans-serif;
}

.btn-square {
  border: 0;
}

.btn-sm {
  padding: 6px 22.5px 6px 22.5px;
  font-size: 0.8em;
}

.btn-filled-blue {
  background-color: #3498db;
}
.btn-filled-blue:hover {
  background-color: #217dbb;
}
.btn-filled-blue:active {
  -moz-box-shadow: inset 0 0 100px #196090;
  -webkit-box-shadow: inset 0 0 100px #196090;
  box-shadow: inset 0 0 100px #196090;
}

.form-group {
    position: relative;
    padding-top: 1.5rem;
}

label {
    position: absolute;
    top: 0;
    font-size: var(--font-size-small);
    opacity: 1;
    transform: translateY(0);
    transition: all 0.2s ease-out;
}

input:placeholder-shown + label {
    opacity: 0;
    transform: translateY(1rem);
}
</style>

<script>
export default {
  data() {
    return {
      fields: {},
      errors: {},
    }
  },
  methods: {
    submit() {
      this.errors = {};
      axios.post('/submit', this.fields).then(response => {
        alert('Message sent!');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors || {};
        }
      });
    },
  },
}
</script>