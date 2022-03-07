<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
<!-- 	<a-button @click="add2('a')" type="primary">
		点我加a{{state.a}}
	</a-button>
	<a-button @click="add2('b')" type="primary">
		点我加b{{state.b}}
	</a-button> -->
	
	<router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  setup() {
	  
	  const count = ref(0)
	  const state = reactive({
		  a: 0,
		  b: 0
	  })
	  const add = () => {
		  count.value += 1
	  }
	  const add2 = (type) => {
		  state[type] += 1
	  }
	  return {
		  state,
		  count,
		  add,
		  add2
	  }
		
  },
  components: {
    // HelloWorld
  }
}
</script>
