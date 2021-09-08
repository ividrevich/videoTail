<template>
	<div class="">
		<!-- Page Heading with Actions and Breadcrumb -->
		<div
			class="text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:border-b-2 sm:border-gray-200 mb-4 lg:mb-8">
			<div class="py-3 space-y-1">
				<!-- Breadcrumb -->
				<nav>
					<ol class="flex items-center justify-center sm:justify-start">
						<li>
							<a href="/index" class="text-blue-600 hover:text-gray-500">Courses</a>
						</li>
						<li class="flex items-center px-1 sm:px-2 opacity-25">
							<svg class="hi-solid hi-chevron-right inline-block w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
							     xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
								      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								      clip-rule="evenodd"/>
							</svg>
						</li>
						<li>
							<a :href="'index?category='+course.Category"
							   class="text-blue-600 hover:text-gray-500">{{ course.Category }}</a>
						</li>
						<li class="flex items-center px-1 sm:px-2 opacity-25">
							<svg class="hi-solid hi-chevron-right inline-block w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
							     xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
								      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								      clip-rule="evenodd"/>
							</svg>
						</li>
						<li>
							<span class="text-gray-600 hover:text-gray-500">{{ course.Name }}</span>
						</li>
					</ol>
				</nav>
				<!-- END Breadcrumb -->
				<!--	Course Title -->
				<h5 class="text-2xl font-bold">
					{{ course.Name }}
				</h5>
				
				<!--	END Course Title -->
			</div>
			
			<!-- Actions -->
			<div
				class="flex items-center justify-between sm:justify-end space-x-2 py-3 bg-gray-50 rounded sm:bg-transparent px-2 sm:px-0">
				<button type="button"
				        @click="goBack"
				        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-indigo-600 hover:text-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:text-indigo-600">
					<svg class="hi-solid hi-arrow-left inline-block w-5 h-5 opacity-75 transform rotate-45" fill="currentColor"
					     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
						      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
						      clip-rule="evenodd"/>
					</svg>
					<span>Go Back</span>
				</button>
			</div>
			<!-- END Actions -->
		</div>
		<!-- END Page Heading with Actions and Breadcrumb -->
		
		<!-- Main Content -->
		
		
		<div class="md:grid md:grid-cols-2 md:gap-6">
			<!--	Left Section: Lessons Grid -->
			<div class="col-span-1">
				<!-- Info Alert -->
				<div class="p-4 px-8 md:p-5 rounded-lg text-blue-700 bg-blue-100">
					<div class="flex items-center mb-2">
						<svg class="hi-solid hi-information-circle inline-block w-5 h-5 mr-3 flex-none text-blue-500"
						     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
							      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							      clip-rule="evenodd"/>
						</svg>
						<h3 class="font-semibold">{{ course.Description }}</h3>
					</div>
					<div class="flex items-center">
						<div @click="categoryClick"
						     class="font-semibold cursor-pointer inline-flex px-2 py-1 leading-4 bg-opacity-25 text-sm
							rounded bg-black-200 text-white bg-black hover:opacity-100 hover:bg-blue-800">
							{{ course.Category }}
						</div>
						<span class="px-4 uppercase tracking-tighter text-md text-gray-600 font-semibold opacity-75">
							{{ generatedSubTitle }}</span>
						<star-ratings class="ml-auto" :stars="course.Rating"/>
					</div>
				</div>
				<!-- END Info Alert -->
				
				<!-- Lesson Card Grid -->
				<div class="my-4">
					<div class="grid grid-cols-1  gap-4 ">
						
						<LessonCard v-for="lesson in sortedLessons"
						            :key="lesson.id"
						            :lesson="lesson"
						            :lesson-selected="lessonSelected.id"
						            @click="cardSelected(lesson)"
						></LessonCard>
					
					</div>
				</div>
				<!-- END Lesson Card Grid -->
			
			</div>
			<!-- Right Panel: Lesson Detail-->
			<div class="col-span-1">
			 <lesson-video-card :lesson="lessonSelected" />
			</div>
		
		</div>
	
	
	</div>


</template>

<script>
import StarRatings from "~/components/Common/StarRatings";
import LessonCard from "~/components/Cards/LessonCard";
import LessonVideoCard from "@/components/Cards/LessonVideoCard";

export default {
	components: {StarRatings, LessonCard, LessonVideoCard},
	data() {
		return {
			lessons: null,
			lessonSelected: null,
		}
	},
	async asyncData({params, $axios}) {
		const recId = params.id
		const axiosParams = new URLSearchParams()
		axiosParams.append('course_id', recId)
		const result = await $axios.get('/api/math/course', {params: axiosParams})
		return {course: result.data}
	},
	mounted() {
		if (this.course.Lessons) {
			const axiosParams = new URLSearchParams()
			axiosParams.append('course_id', this.course.id)
			this.$axios.get('/api/math/lessons_for_course',
				{params: axiosParams}).then(r => {
				console.log(r)
				this.lessons = r.data
				this.lessonSelected = this.lessons[0]
			})
		}
	},
	computed: {
		generatedSubTitle() {
			if (this.course.Status === 'Coming Soon') {
				return 'Coming Soon | ' + this.course.Difficulty
			} else {
				return this.course.LessonCount + ' Lessons | ' + this.course.Difficulty
			}
		},
		sortedLessons() {
			if (this.lessons) {
				return this.lessons.sort((a, b) => a.Lesson.localeCompare(b.Lesson))
			}
			return null
		},
		
	},
	methods: {
		goBack() {
			this.$router.go(-1)
		},
		cardSelected(lesson) {
			// console.log('Lesson Selected:', id)
			this.lessonSelected = lesson
		},
		categoryClick() {
			this.$router.push('/index?category=' + this.course.Category)
		}
	}
}
</script>

<style scoped>

</style>
