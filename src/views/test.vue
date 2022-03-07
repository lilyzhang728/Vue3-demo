<template>
	<div v-for="item in list" :ref="setItemRef">{{item.content}}</div>
	<button @click="handleClick">clear</button>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						id: 1,
						done: false,
						content: '搭建一个Vue3demo'
					},{
						id: 2,
						done: false,
						content: '看Vue3文档'
					},{
						id: 3,
						done: false,
						content: '看Vue3源码'
					}
				],
				itemRefs: []
			}
		},
		created() {
			console.log('----created-----')
		},
		beforeUpdate() {
			debugger
			this.itemRefs = []
		},
		updated() {
			console.log(this.itemRefs)
		},
		methods: {
			setItemRef(el) {
				debugger
				if(el) {
					this.itemRefs.push(el)
				}
				console.log('-----after push------', this.itemRefs)
			},
			handleClick() {
				this.list = []
			}
		}
	}
</script>

<style>
</style>
