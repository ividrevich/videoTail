<template>
	<!-- Course Card (Based on TailKit Color Card Grid -->
	<div class="flex flex-col group text-white rounded shadow-sm  overflow-hidden cursor-pointer
	hover:opacity-90 hover:scale-105 transform transition"
	     :class="[bgColorUsed, {'sm:col-span-2': title.length>20}]"
	     @click="cardSelected">

		<div class="bg-black bg-opacity-30 flex flex-col flex-grow ">
			<div class="flex justify-between items-start p-4">
				<!--Category Label	-->
						<div @click.stop="categoryClick"
		     class="font-semibold inline-flex px-2 py-1 leading-4 bg-opacity-25 text-sm
						rounded bg-black-200 text-white bg-black hover:opacity-100 hover:bg-blue-800">
			{{ category }}
		</div>
				<!--Action Buttons	Removed			-->
			
			</div>
			<div class="py-6 px-4 space-y-1 flex-grow ">
				
				<star-ratings :stars="stars"/>
				<h3 class="text-lg font-semibold">
					<a :href="link"
					   class="text-white-600 hover:text-white-400 text-white hover:opacity-75">{{ title }}
					</a>
				</h3>
			</div>
			<div class="p-4 uppercase tracking-wide text-sm font-semibold opacity-75">
				{{ subTitle }}
			</div>
		</div>
	</div>
	
	<!-- END Course Card -->
</template>

<script>
import StarRatings from "~/components/Common/StarRatings";

export default {
	name: "ColorCard",
	components: {StarRatings},
	props: {
		title: {type: String, default: 'Title'},
		category: {type: String, default: 'Category'},
		subTitle: {type: String, default: 'SubTitle'},
		stars: {type: Number, default: 0},
		link: {type: String, required: true},
		bgColor: {type: String}
	},
	data() {
		return {
			colors: ['bg-red-500', 'bg-gray-600', 'bg-purple-500', 'bg-indigo-600', 'bg-green-500',
				'bg-teal-500', 'bg-blue-500']
		}
	},
	methods: {
		cardSelected() {
			console.log('Redirecting to:', this.link)
			this.$router.push(this.link)
		},
		categoryClick() {
			this.$router.push('courses?category=' + this.category)
		}
	},
	computed: {
		bgColorUsed() {
			if (this.bgColor) {
				return this.bgColor
			} else {
				const i = Math.floor(Math.random() * this.colors.length)
				return this.colors[i]
			}
		}
	}
}
</script>

<style scoped>

</style>
