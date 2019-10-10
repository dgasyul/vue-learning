# v-model

<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>


# multi-line text

<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>


#checkbox
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>



# multiple checkboxes

<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>

new Vue({
  el: '#example-3',
  data: {
    checkedNames: [] //['John','Jack','Mike']
  }
})


#radio 
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>

#select
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>

new Vue({
  el: '...',
  data: {
    selected: ''
  }
})

#multiple select

<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selected: {{ selected }}</span>

new Vue({
  el: '...',
  data: {
    selected: ["A", "B"]
  }
})


#select dynamic options
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>

new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})

# modifiers

    - lazy
    - trim
    - number


#custom components binding
<switch v-model="customInput"></switch>


<template>
  <input @input="handleInput" />
</template>

<script>
export default {
  prop: ['value'],
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.content)
    }
  }
}
</script>


#vuelidate

<input 
    type="text" 
    v-model="name" 
    @input="$v.name.$touch()"
    @blur="$v.name.$touch()">
<span v-if="!$v.name.$error">
    Some invalid text
</span>

<span v-if="!$v.name.required">
    This field is required
</span>

<script>
    import { required, minLength, between } from 'vuelidate/lib/validators'

    export default {
        data () {
            return {
            name: '',
            }
        },
        validations: {
            name: {
            required,
            minLength: minLength(4)
            }
        }
    }
</script>
