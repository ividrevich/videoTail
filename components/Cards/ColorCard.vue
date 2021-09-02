<template>
	<!-- Course Card (Based on TailKit Color Card Grid -->
	<div :class="title.length > 20 ? 'sm:col-span-2' : ''">
		<div class="flex flex-col group text-white rounded shadow-sm  overflow-hidden"
		     :class="bgColorUsed">
			<div class="bg-black bg-opacity-30 flex flex-col flex-grow">
				<div class="flex justify-between items-start p-4">
					<!--Category Label	-->
					<div>
						<div
							class="font-semibold inline-flex px-2 py-1 leading-4 bg-opacity-25 text-sm rounded text-black-700 bg-black-200 text-white bg-black">
							{{ category }}
						</div>
					</div>
					<!--Action Buttons	Removed			-->
	
				</div>
				<div class="py-6 px-4 space-y-1 flex-grow">
					<div class="text-yellow-400">
						<div class="text-yellow-400">
							<svg v-for="i in [1,2,3,4,5]"
							     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
							     :class="i > stars ? 'text-white' : ''"
							     class="hi-solid hi-star inline-block w-5 h-5">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
						</div>
					</div>
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
		
	</div>
	<!-- END Course Card -->
</template>

<script>
export default {
	name: "ColorCard",
	props: {
		title: {type: String, default: 'Title'},
		category: {type: String, default: 'Category'},
		subTitle: {type: String, default: 'SubTitle'},
		stars: {type: Number, default: 0},
		link: {type: String, required: true },
		bgColor: {type: String}
	},
	data() {
		return {
			colors: ['bg-red-500', 'bg-gray-600', 'bg-purple-500', 'bg-indigo-600', 'bg-green-500',
				'bg-teal-500', 'bg-blue-500']
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
