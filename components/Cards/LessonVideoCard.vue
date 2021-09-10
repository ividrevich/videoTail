<template>
	<div class="bg-blue-50 rounded-xl w-full h-full flex flex-col">
		<div v-if="lesson"
			class="w-full h-full p-4 items-center justify-center text-blue-700">
			<h1 class="text-md text-purple-600 font-semibold">Lesson {{lesson.Lesson }}</h1>
			<h3 class="text-sm text-blue-400 font-light">{{lesson.Description}}</h3>
			
			<div v-if="lesson.Status === 'Coming Soon'" class="text-xl text-center mt-10 ">Coming Soon</div>
			<div v-else>
							<video width="450" controls  :src="videoURL"
				        class="mt-4">
			</video>
			
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: "LessonVideoCard",
	props: {
		lesson: {type: Object, required: false},

	},
	computed: {
		videoURL() {
			if (this.lesson.Video) {
				return this.lesson.Video[0].url
			}
			return null
		}
	}
	
}
</script>

<style scoped>

</style>
