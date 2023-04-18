<template>

  <div >
    <div >
      <div >
        <div >
          <div >Vue Axios Post - ItSolutionStuff.com</div>
          <div >
            <form @submit="formSubmit">
              <strong>Name:</strong>
              <input type="text"  v-model="name">
              <strong>Description:</strong>
              <textarea  v-model="description"></textarea>
              <button >Submit</button>
            </form>
            <strong>Output:</strong>
            <pre>{{output}}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    console.log('Component mounted.')
  },
  data() {
    return {
      name: '',
      description: '',
      output: ''
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      this.axios.post('/post', {
        name: this.name,
        description: this.description
      })
          .then(function (response) {
            currentObj.output = response.data;
          })
          .catch(function (error) {
            currentObj.output = error;
          });
    }
  }
}

</script>