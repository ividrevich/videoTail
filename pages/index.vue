<template>
	<div class="">
		<div class="py-3 space-y-1">
			<!-- Breadcrumb -->
			<nav>
				<ol class="flex items-center justify-center sm:justify-start">
					<li>
						<a href="/" class="text-blue-600 hover:text-gray-500">Courses</a>
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
						<span class="text-gray-600 hover:text-gray-500">{{ currentCategory }}</span>
					</li>

				</ol>
			</nav>
			<!-- END Breadcrumb -->
			<!-- Page Heading with Icon -->
			<h2 class="text-2xl font-bold py-2 border-b-2 border-gray-200 mb-4 lg:mb-8">
				
				
				<svg class="hi-outline hi-presentation-chart-line inline-block w-6 h-6 opacity-50" stroke="currentColor"
				     fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
				</svg>
				<span>Course</span>
				<span class="block sm:inline-block text-xl text-gray-600 font-normal">Directory</span>
			</h2>
			<!-- END Page Heading with Icon -->
		</div>
		
		
		<!-- Courses Grid -->
		<div class="p-10 text-center"
		     v-if="!isLoaded">Loading...
		</div>
		<div v-else class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
			
			<!-- Course Card -->
			
			<ColorCard v-for="course in sortedCourses"
			           :key="course.id"
			           :title="course.Name"
			           :sub-title="generateSubTitle(course)"
			           :stars="course.Rating"
			           :category="course.Category"
			           :link="'/course/'+ course.id"
			
			></ColorCard>
		
		
		</div>
		<!-- END Courses Grid -->
	
	</div>
</template>

<script>
import ColorCard from "~/components/Cards/ColorCard";

export default {
	components: {ColorCard},
	data() {
		return {
			courses: [],
			isLoaded: false,
		}
	},
	async fetch() {
		console.log('starting axios fetch')
		this.courses = await this.$axios.$get('/api/math/course_list')
		this.isLoaded = true
	},
	methods: {
		generateSubTitle(course) {
			if (course.Status === 'Coming Soon') {
				return 'Coming Soon | ' + course.Difficulty
			} else {
				return course.LessonCount + ' Lessons | ' + course.Difficulty
			}
		}
	},
	computed: {
		filteredCourses() {
			if (this.$route.query.category) {
				return this.courses.filter(c => c.Category === this.$route.query.category)
			}
			return this.courses
		},
		sortedCourses() {
			return this.filteredCourses.sort((a,b) => a.LessonCount > b.LessonCount ? -1 : 1)
		},
		currentCategory() {
			if (this.$route.query.category) {
				return this.$route.query.category
			}
			return 'All'
		}
	}
}
</script>
