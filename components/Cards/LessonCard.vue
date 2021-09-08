<template>
	<div class="flex bg-blue-50 w-full h-16 space-x-2 rounded-xl items-center
							 cursor-pointer hover:bg-blue-100
							 active:shadow-lg active:bg-blue-200"
	     :class="{'bg-blue-200': lesson.id === lessonSelected}"
	     @click="onClick">
		
		<!-- Image Thumb-->
		<div class="w-20 h-16 p-2 overflow-hidden">
			<img class="object-cover ring-2 rounded-lg w-full h-full"
			     :src="thumbnail"
			     alt="Lesson Image"/>
		</div>
		<!--Lesson Title		-->
		<div class="sm:leading-3 w-full">
			<div class="flex flex-row items-center justify-between">
				<h3 class="text-purple-800 font-medium text-sm">Lesson {{ lesson.Lesson }}</h3>
				<div
					class="font-semibold inline-flex px-2 py-1  items-center space-x-1 text-xs  text-purple-600 ">
					<svg class="hi-outline hi-clock inline-block w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"
					     xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
					<span>{{ lesson.Duration }}</span>
				</div>
			
			</div>
			<span class="text-gray-500 text-xs">{{ lesson.Description }}</span>
		</div>
	
	</div>
	
	<!--	<div class="flex mx-auto mt-8 w-full h-80 flex-col rounded-lg bg-white overflow-hidden transform transition hover:shadow-md hover:scale-105 cursor-pointer">-->
	<!--		&lt;!&ndash;Image Header&ndash;&gt;-->
	<!--		<div class="w-full h-40 relative overflow-hidden">-->
	<!--			<img class="object-cover rounded-lg w-full h-full"-->
	<!--			     :src="thumbnail"-->
	<!--			     alt="Lesson Image"/>-->
	<!--			-->
	<!--			<div class="absolute w-16 inset-x-0  bottom-2 left-2-->
	<!--        text-center text-white text-xs bg-indigo-400 rounded-->
	<!--        font-medium leading-5">{{lesson.Status}}-->
	<!--			</div>-->
	<!--		</div>-->
	<!--		&lt;!&ndash; Card Body &ndash;&gt;-->
	<!--		<div class="p-4 space-y-4">-->
	<!--			<div class="text-md font-bold ">Lesson {{ lesson.Lesson }}</div>-->
	<!--			<div class="text-sm text-gray-400">{{ lesson.Description}}</div>-->
	<!--				-->
	
	<!--				<div-->
	<!--					class="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-xs rounded-full border border-yellow-600 text-yellow-600 bg-yellow-100">-->
	<!--					<svg class="hi-outline hi-clock inline-block w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"-->
	<!--					     xmlns="http://www.w3.org/2000/svg">-->
	<!--						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
	<!--						      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>-->
	<!--					</svg>-->
	<!--					<span>{{lesson.Duration}}</span>-->
	<!--				</div>-->
	<!--			</div>-->
	<!--		</div>-->

</template>

<script>
export default {
	name: "LessonCard",
	props: {
		lesson: {type: Object, required: true},
		lessonSelected: {type: String, required: false},
	},
	data() {
		return {
			isLoading: true,
			
		}
	},
	computed: {
		thumbnail() {
			if (this.lesson.Thumbnail) {
				return this.lesson.Thumbnail[0].url
			}
			return null
		}
	},
	methods: {
		onClick() {
			this.$emit('click')
		}
	}
}
</script>

<style scoped>

</style>
