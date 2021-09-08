<template>
	<!-- Page Container -->
	<!--
		Sidebar on Desktop
			Closed '' (no class)
			Opened 'lg:pl-64'
	-->
	<div
		class="flex flex-col mx-auto w-full min-h-screen bg-white"
		:class="{
      'lg:pl-64': desktopSidebarOpen
    }"
	>
		<!-- Page Sidebar -->
		<!--
			Sidebar on Mobile
				Closed '-translate-x-full'
				Opened 'translate-x-0'

			Sidebar on Desktop
				Closed 'lg:-translate-x-full'
				Opened 'lg:translate-x-0'
		-->
		<nav
			id="page-sidebar"
			class="flex flex-col fixed top-0 left-0 bottom-0 w-full sm:w-64 h-full bg-sidebar-dark text-gray-200 z-50 transform transition-transform duration-500 ease-out"
			:class="{
        '-translate-x-full': !mobileSidebarOpen,
        'translate-x-0': mobileSidebarOpen,
        'lg:-translate-x-full': !desktopSidebarOpen,
        'lg:translate-x-0': desktopSidebarOpen,
      }"
			aria-label="Main Sidebar Navigation"
		>
			<!-- Sidebar Header -->
			<div
				class="h-16 bg-gray-600 bg-opacity-25 flex-none flex items-center justify-between lg:justify-center px-4 w-full">
				<!-- Brand -->
				<a href="javascript:void(0)"
				   class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-white-600 hover:text-white-400 text-white hover:opacity-75">
					<svg class="hi-solid hi-cube-transparent inline-block w-5 h-5 text-indigo-400" fill="currentColor"
					     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
						      d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
						      clip-rule="evenodd"/>
					</svg>
					<span>Company</span>
				</a>
				<!-- END Brand -->
				
				<!-- Close Sidebar on Mobile -->
				<div class="lg:hidden">
					<button
						type="button"
						class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-white opacity-75 hover:opacity-100 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:opacity-75"
						@click="mobileSidebarOpen = false"
					>
						<svg class="hi-solid hi-x inline-block w-4 h-4 -mx-1" fill="currentColor" viewBox="0 0 20 20"
						     xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
							      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							      clip-rule="evenodd"/>
						</svg>
					</button>
				</div>
				<!-- END Close Sidebar on Mobile -->
			</div>
			<!-- END Sidebar Header -->
			
			<!-- Sidebar Navigation -->
			<div class="overflow-y-auto">
				<div class="p-4 w-full">
					<nav class="space-y-1">
						<a href="javascript:void(0)"
						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-200 bg-gray-800 bg-opacity-50">
              <span class="flex-none flex items-center opacity-50">
                <svg class="hi-outline hi-home inline-block w-5 h-5" stroke="currentColor" fill="none"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </span>
							<span class="py-2 flex-grow">Dashboard</span>
							<span
								class="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-100 bg-gray-400">3</span>
						</a>
						<div class="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Projects</div>
						<a href="javascript:void(0)"
						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-50 active:bg-gray-800 active:bg-opacity-25">
              <span class="flex-none flex items-center opacity-50">
                <svg class="hi-outline hi-view-grid inline-block w-5 h-5" stroke="currentColor" fill="none"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </span>
							<span class="py-2 flex-grow">Manage</span>
							<span
								class="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-100 bg-gray-400">99+</span>
						</a>
						<a href="javascript:void(0)"
						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-50 active:bg-gray-800 active:bg-opacity-25">
              <span class="flex-none flex items-center opacity-50">
                <svg class="hi-outline hi-clipboard-list inline-block w-5 h-5" stroke="currentColor" fill="none"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
              </span>
							<span class="py-2 flex-grow">Tasks</span>
							<span
								class="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-100 bg-gray-400">9</span>
						</a>
						<a href="javascript:void(0)"
						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-50 active:bg-gray-800 active:bg-opacity-25">
              <span class="flex-none flex items-center opacity-50">
                <svg class="hi-outline hi-users inline-block w-5 h-5" stroke="currentColor" fill="none"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </span>
							<span class="py-2 flex-grow">Clients</span>
							<span
								class="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-100 bg-gray-400">26</span>
						</a>
						<a href="javascript:void(0)"
						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-50 active:bg-gray-800 active:bg-opacity-25">
              <span class="flex-none flex items-center opacity-50">
                <svg class="hi-outline hi-plus-circle inline-block w-5 h-5 text-green-300" stroke="currentColor"
                     fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                              stroke-linejoin="round"
                                                                                              stroke-width="2"
                                                                                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </span>
							<span class="py-2 flex-grow">Add New</span>
						</a>
						<div class="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Account</div>
						<a href="javascript:void(0)"
						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-50 active:bg-gray-800 active:bg-opacity-25">
              <span class="flex-none flex items-center opacity-50">
                <svg class="hi-outline hi-user inline-block w-5 h-5" stroke="currentColor" fill="none"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </span>
							<span class="py-2 flex-grow">Profile</span>
						</a>
						<a href="javascript:void(0)"
						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-50 active:bg-gray-800 active:bg-opacity-25">
              <span class="flex-none flex items-center opacity-50">
                <svg class="hi-outline hi-cog inline-block w-5 h-5" stroke="currentColor" fill="none"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path
	                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </span>
							<span class="py-2 flex-grow">Settings</span>
						</a>
						<a href="javascript:void(0)"
						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-800 hover:bg-opacity-50 active:bg-gray-800 active:bg-opacity-25">
              <span class="flex-none flex items-center opacity-50">
                <svg class="hi-outline hi-lock-open inline-block w-5 h-5 text-red-300" stroke="currentColor" fill="none"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>
              </span>
							<span class="py-2 flex-grow">Log out</span>
						</a>
					</nav>
				</div>
			</div>
			<!-- END Sidebar Navigation -->
		</nav>
		<!-- Page Sidebar -->
		
		<!-- Page Header -->
		<!--
			Sidebar on Desktop
				Closed '' (no class)
				Opened 'lg:pl-64'
		-->
		<header
			id="page-header"
			class="flex flex-none items-center h-16 bg-gradient-theme shadow-sm fixed top-0 right-0 left-0 z-30"
			:class="{
        'lg:pl-64': desktopSidebarOpen
      }"
		>
			<div class="flex justify-between max-w-10xl mx-auto px-4 lg:px-8 w-full">
				<!-- Left Section -->
				<div class="flex items-center space-x-2">
					<!-- Toggle Sidebar on Desktop -->
					<div class="hidden lg:block">
						<button
							type="button"
							class="inline-flex btn-nav-theme justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded  shadow-sm  hover:shadow focus:ring  focus:ring-opacity-25  active:shadow-none"
							@click="desktopSidebarOpen = !desktopSidebarOpen"
						>
							<svg class="hi-solid hi-menu-alt-1 inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
							     xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
								      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								      clip-rule="evenodd"/>
							</svg>
						</button>
					</div>
					<!-- END Toggle Sidebar on Desktop -->
					
					<!-- Toggle Sidebar on Mobile -->
					<div class="lg:hidden">
						<button
							type="button"
							class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6
							btn-nav-theme rounded  shadow-sm hover:shadow
							focus:ring focus:ring-opacity-25
							 active:shadow-none"
							@click="mobileSidebarOpen = true"
						>
							<svg class="hi-solid hi-menu-alt-1 inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
							     xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
								      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								      clip-rule="evenodd"/>
							</svg>
						</button>
					</div>
					<!-- END Toggle Sidebar on Mobile -->
					
					<!-- Search -->
					<div class="hidden sm:block">
						<form onsubmit="return false;">
							<input type="text"
							       class="w-full block bg-yellow-100 border border-gray-200 rounded px-3 py-2 leading-5 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
							       id="tk-form-layouts-search" placeholder="Search.."/>
						</form>
					</div>
					<div class="sm:hidden">
						<button type="button"
						        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
							<svg class="hi-solid hi-search inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
							     xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
								      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								      clip-rule="evenodd"/>
							</svg>
						</button>
					</div>
					<!-- END Search -->
				</div>
				<!-- END Left Section -->
				
				<!-- Right Section -->
				<div class="flex items-center space-x-2">
					<!-- Notifications -->
					<button type="button"
					        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
						<svg class="hi-outline hi-bell inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24"
						     xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
						</svg>
						<span class="text-indigo-500">•</span>
					</button>
					<!-- END Notifications -->
					
					<!-- User Dropdown -->
					<div class="relative inline-block">
						<!-- Dropdown Toggle Button -->
						<button
							type="button"
							class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded
							shadow-sm hover:shadow focus:ring focus:ring-opacity-25 btn-nav-theme active:shadow-none"
							id="tk-dropdown-layouts-user"
							aria-haspopup="true"
							@aria-expanded="userDropdownOpen"
							@click="userDropdownOpen = !userDropdownOpen"
						>
							<span>Admin</span>
							<svg class="hi-solid hi-chevron-down inline-block w-5 h-5 opacity-50" fill="currentColor"
							     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
								      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								      clip-rule="evenodd"/>
							</svg>
						</button>
						<!-- END Dropdown Toggle Button -->
						
						<!-- Dropdown -->
						<!--
							Visibility
								Closed        'hidden'
								Opened        '' (no class)

							Show/Hide with transitions
								enter         'transition ease-out duration-150'
								enter-start   'transform opacity-0 scale-75'
								enter-end     'transform opacity-100 scale-100'
								leave         'transition ease-in duration-100'
								leave-start   'transform opacity-100 scale-100'
								leave-end     'transform opacity-0 scale-75'
						-->
						<transition
							enter-active-class="transition ease-out duration-150"
							enter-class="transform opacity-0 scale-75"
							enter-to-class="transform opacity-100 scale-100"
							leave-active-class="transition ease-in duration-100"
							leave-class="transform opacity-100 scale-100"
							leave-to-class="transform opacity-0 scale-75"
						>
							<div
								v-if="userDropdownOpen"
								role="menu"
								aria-labelledby="tk-dropdown-layouts-user"
								class="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1"
							>
								<div class="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">
									<div class="p-2 space-y-1">
										<a role="menuitem" href="javascript:void(0)"
										   class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
											<svg class="hi-solid hi-user-circle inline-block w-5 h-5 opacity-50" fill="currentColor"
											     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd"
												      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
												      clip-rule="evenodd"/>
											</svg>
											<span>Profile</span>
										</a>
										<a role="menuitem" href="javascript:void(0)"
										   class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
											<svg class="hi-solid hi-inbox inline-block w-5 h-5 opacity-50" fill="currentColor"
											     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd"
												      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
												      clip-rule="evenodd"/>
											</svg>
											<span>Inbox</span>
										</a>
									</div>
									<div class="p-2 space-y-1">
										<a role="menuitem" href="javascript:void(0)"
										   class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
											<svg class="hi-solid hi-cog inline-block w-5 h-5 opacity-50" fill="currentColor"
											     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd"
												      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
												      clip-rule="evenodd"/>
											</svg>
											<span>Settings</span>
										</a>
									</div>
									<div class="p-2 space-y-1">
										<form onsubmit="return false;">
											<button type="submit" role="menuitem"
											        class="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
												<svg class="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50" fill="currentColor"
												     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd"
													      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
													      clip-rule="evenodd"/>
												</svg>
												<span>Sign out</span>
											</button>
										</form>
									</div>
								</div>
							</div>
						</transition>
						<!-- END Dropdown -->
					</div>
					<!-- END User Dropdown -->
				</div>
				<!-- END Right Section -->
			</div>
		</header>
		<!-- END Page Header -->
		
		<!-- Page Content -->
		<main id="page-content" class="flex flex-auto flex-col max-w-full pt-16 transition">
			<!-- Page Section -->
			<div class="max-w-10xl mx-auto p-4 lg:p-8 w-full">
				<!--
				ADD YOUR MAIN CONTENT BELOW
				-->
				<Nuxt/>
			</div>
			<!-- END Page Section -->
		</main>
		<!-- END Page Content -->
		
		<!-- Page Footer -->
		<!--    <footer id="page-footer" class="flex flex-none items-center bg-white">-->
		<!--      <div class="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm max-w-10xl mx-auto px-4 lg:px-8 w-full">-->
		<!--        <div class="pt-4 pb-1 md:pb-4">-->
		<!--          <a href="https://tailkit.com" target="_blank" class="font-medium text-indigo-600 hover:text-indigo-400">Tailkit</a> © 2020-->
		<!--        </div>-->
		<!--        <div class="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">-->
		<!--          <span>Crafted with</span>-->
		<!--          <svg class="hi-solid hi-heart inline-block w-4 h-4 mx-1 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/></svg>-->
		<!--          <span>by <a href="https://pixelcave.com" target="_blank" class="font-medium text-indigo-600 hover:text-indigo-400">pixelcave</a></span>-->
		<!--        </div>-->
		<!--      </div>-->
		<!--    </footer>-->
		<!-- END Page Footer -->
	</div>
	<!-- END Page Container -->
</template>

<script>
export default {
	
	data() {
		return {
			mobileSidebarOpen: false,
			desktopSidebarOpen: false,
			userDropdownOpen: false,
		}
	}
}
</script>


<!--<template>-->
<!--	&lt;!&ndash; Page Container &ndash;&gt;-->
<!--	&lt;!&ndash;-->
<!--	  Sidebar on Desktop-->
<!--		Closed '' (no class)-->
<!--		Opened 'lg:pl-64'-->
<!--	&ndash;&gt;-->
<!--	<div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64"-->
<!--	     :class="{-->
<!--			'lg:pl-64': mobileSidebarOpen-->
<!--		 }"-->
<!--	>-->
<!--		&lt;!&ndash; Page Sidebar &ndash;&gt;-->
<!--		&lt;!&ndash;-->
<!--		  Sidebar on Mobile-->
<!--			Closed '-translate-x-full'-->
<!--			Opened 'translate-x-0'-->
<!--	  -->
<!--		  Sidebar on Desktop-->
<!--			Closed 'lg:-translate-x-full'-->
<!--			Opened 'lg:translate-x-0'-->
<!--		&ndash;&gt;-->
<!--		<nav id="page-sidebar"-->
<!--		     class="flex flex-col fixed top-0 left-0 bottom-0 w-full lg:w-64 h-full bg-sidebar-light border-r border-gray-200 z-50 transform transition-transform duration-500 ease-out -translate-x-full lg:translate-x-0"-->
<!--		     :class="{-->
<!--		        '-translate-x-full': !mobileSidebarOpen,-->
<!--		        'translate-x-0': mobileSidebarOpen,-->
<!--		        'lg:-translate-x-full': !desktopSidebarOpen,-->
<!--		        'lg:translate-x-0': desktopSidebarOpen,-->
<!--		      }"-->
<!--		     aria-label="Main Sidebar Navigation">-->
<!--			&lt;!&ndash; Sidebar Header &ndash;&gt;-->
<!--			<div class="h-16 flex-none flex items-center justify-between lg:justify-center px-4 w-full">-->
<!--				&lt;!&ndash; Brand &ndash;&gt;-->
<!--				<a href="javascript:void(0)"-->
<!--				   class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-600 hover:text-gray-500">-->
<!--					<svg class="hi-solid hi-cube-transparent inline-block w-5 h-5 text-indigo-400" fill="currentColor"-->
<!--					     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--						<path fill-rule="evenodd"-->
<!--						      d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"-->
<!--						      clip-rule="evenodd"/>-->
<!--					</svg>-->
<!--					<span>Company</span>-->
<!--				</a>-->
<!--				&lt;!&ndash; END Brand &ndash;&gt;-->
<!--				-->
<!--				&lt;!&ndash; Close Sidebar on Mobile &ndash;&gt;-->
<!--				<div class="lg:hidden">-->
<!--					<button type="button"-->
<!--					        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-red-600 hover:text-red-400 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:text-red-600">-->
<!--						<svg class="hi-solid hi-x inline-block w-4 h-4 -mx-1" fill="currentColor" viewBox="0 0 20 20"-->
<!--						     xmlns="http://www.w3.org/2000/svg">-->
<!--							<path fill-rule="evenodd"-->
<!--							      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"-->
<!--							      clip-rule="evenodd"/>-->
<!--						</svg>-->
<!--					</button>-->
<!--				</div>-->
<!--				&lt;!&ndash; END Close Sidebar on Mobile &ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; END Sidebar Header &ndash;&gt;-->
<!--			-->
<!--			&lt;!&ndash; Sidebar Navigation &ndash;&gt;-->
<!--			<div class="overflow-y-auto">-->
<!--				<div class="p-4 w-full">-->
<!--					<nav class="space-y-1">-->
<!--						<a href="javascript:void(0)"-->
<!--						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-700 bg-gray-100">-->
<!--            <span class="flex-none flex items-center opacity-50">-->
<!--              <svg class="hi-outline hi-home inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24"-->
<!--                   xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"-->
<!--                                                            stroke-width="2"-->
<!--                                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>-->
<!--            </span>-->
<!--							<span class="py-2 flex-grow">Dashboard</span>-->
<!--							<span-->
<!--								class="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-600 bg-gray-500">3</span>-->
<!--						</a>-->
<!--						<div class="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">-->
<!--							Projects-->
<!--						</div>-->
<!--						<a href="javascript:void(0)"-->
<!--						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">-->
<!--            <span class="flex-none flex items-center opacity-50">-->
<!--              <svg class="hi-outline hi-view-grid inline-block w-5 h-5" stroke="currentColor" fill="none"-->
<!--                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"-->
<!--                                                                                stroke-linejoin="round" stroke-width="2"-->
<!--                                                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>-->
<!--            </span>-->
<!--							<span class="py-2 flex-grow">Manage</span>-->
<!--							<span-->
<!--								class="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-600 bg-gray-500">99+</span>-->
<!--						</a>-->
<!--						<a href="javascript:void(0)"-->
<!--						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">-->
<!--            <span class="flex-none flex items-center opacity-50">-->
<!--              <svg class="hi-outline hi-clipboard-list inline-block w-5 h-5" stroke="currentColor" fill="none"-->
<!--                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"-->
<!--                                                                                stroke-linejoin="round" stroke-width="2"-->
<!--                                                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>-->
<!--            </span>-->
<!--							<span class="py-2 flex-grow">Tasks</span>-->
<!--							<span-->
<!--								class="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-600 bg-gray-500">9</span>-->
<!--						</a>-->
<!--						<a href="javascript:void(0)"-->
<!--						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">-->
<!--            <span class="flex-none flex items-center opacity-50">-->
<!--              <svg class="hi-outline hi-users inline-block w-5 h-5" stroke="currentColor" fill="none"-->
<!--                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"-->
<!--                                                                                stroke-linejoin="round" stroke-width="2"-->
<!--                                                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>-->
<!--            </span>-->
<!--							<span class="py-2 flex-grow">Clients</span>-->
<!--							<span-->
<!--								class="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-600 bg-gray-500">26</span>-->
<!--						</a>-->
<!--						<a href="javascript:void(0)"-->
<!--						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">-->
<!--            <span class="flex-none flex items-center opacity-50">-->
<!--              <svg class="hi-outline hi-plus-circle inline-block w-5 h-5 text-green-600" stroke="currentColor"-->
<!--                   fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"-->
<!--                                                                                            stroke-linejoin="round"-->
<!--                                                                                            stroke-width="2"-->
<!--                                                                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>-->
<!--            </span>-->
<!--							<span class="py-2 flex-grow">Add New</span>-->
<!--						</a>-->
<!--						<div class="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Account-->
<!--						</div>-->
<!--						<a href="javascript:void(0)"-->
<!--						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">-->
<!--            <span class="flex-none flex items-center opacity-50">-->
<!--              <svg class="hi-outline hi-user inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24"-->
<!--                   xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"-->
<!--                                                            stroke-width="2"-->
<!--                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>-->
<!--            </span>-->
<!--							<span class="py-2 flex-grow">Profile</span>-->
<!--						</a>-->
<!--						<a href="javascript:void(0)"-->
<!--						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">-->
<!--            <span class="flex-none flex items-center opacity-50">-->
<!--              <svg class="hi-outline hi-cog inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24"-->
<!--                   xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"-->
<!--                                                            stroke-width="2"-->
<!--                                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path-->
<!--	              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>-->
<!--            </span>-->
<!--							<span class="py-2 flex-grow">Settings</span>-->
<!--						</a>-->
<!--						<a href="javascript:void(0)"-->
<!--						   class="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50">-->
<!--            <span class="flex-none flex items-center opacity-50">-->
<!--              <svg class="hi-outline hi-lock-open inline-block w-5 h-5 text-red-600" stroke="currentColor" fill="none"-->
<!--                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"-->
<!--                                                                                stroke-linejoin="round" stroke-width="2"-->
<!--                                                                                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>-->
<!--            </span>-->
<!--							<span class="py-2 flex-grow">Log out</span>-->
<!--						</a>-->
<!--					</nav>-->
<!--				</div>-->
<!--			</div>-->
<!--			&lt;!&ndash; END Sidebar Navigation &ndash;&gt;-->
<!--		</nav>-->
<!--		&lt;!&ndash; Page Sidebar &ndash;&gt;-->
<!--		-->
<!--		&lt;!&ndash; Page Header &ndash;&gt;-->
<!--		&lt;!&ndash;-->
<!--		  Sidebar on Desktop-->
<!--			Closed '' (no class)-->
<!--			Opened 'lg:pl-64'-->
<!--		&ndash;&gt;-->
<!--		<header id="page-header"-->
<!--		        class="flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-30 lg:pl-64"-->
<!--		        :class="{'lg:pl-64': desktopSidebarOpen}">-->
<!--			<div class="flex justify-between container xl:max-w-7xl mx-auto px-4 lg:px-8">-->
<!--				&lt;!&ndash; Left Section &ndash;&gt;-->
<!--				<div class="flex items-center space-x-2">-->
<!--					&lt;!&ndash; Toggle Sidebar on Desktop &ndash;&gt;-->
<!--					<div class="hidden lg:block">-->
<!--						<button type="button"-->
<!--						        @click="desktopSidebarOpen = ! desktopSidebarOpen"-->
<!--						        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">-->
<!--							<svg class="hi-solid hi-menu-alt-1 inline-block w-5 h-5" fill="currentColor"-->
<!--							     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--								<path fill-rule="evenodd"-->
<!--								      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"-->
<!--								      clip-rule="evenodd"/>-->
<!--							</svg>-->
<!--						</button>-->
<!--					</div>-->
<!--					&lt;!&ndash; END Toggle Sidebar on Desktop &ndash;&gt;-->
<!--					-->
<!--					&lt;!&ndash; Toggle Sidebar on Mobile &ndash;&gt;-->
<!--					<div class="lg:hidden">-->
<!--						<button type="button"-->
<!--						        @click="mobileSidebarOpen = !mobileSidebarOpen"-->
<!--						        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">-->
<!--							<svg class="hi-solid hi-menu-alt-1 inline-block w-5 h-5" fill="currentColor"-->
<!--							     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--								<path fill-rule="evenodd"-->
<!--								      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"-->
<!--								      clip-rule="evenodd"/>-->
<!--							</svg>-->
<!--						</button>-->
<!--					</div>-->
<!--					&lt;!&ndash; END Toggle Sidebar on Mobile &ndash;&gt;-->
<!--					-->
<!--					&lt;!&ndash; Search &ndash;&gt;-->
<!--					<div class="hidden sm:block">-->
<!--						<form onsubmit="return false;">-->
<!--							<input type="text"-->
<!--							       class="w-full block border border-gray-200 rounded px-3 py-2 leading-5 text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"-->
<!--							       id="tk-form-layouts-search" placeholder="Search.."/>-->
<!--						</form>-->
<!--					</div>-->
<!--					<div class="sm:hidden">-->
<!--						<button type="button"-->
<!--						        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">-->
<!--							<svg class="hi-solid hi-search inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20"-->
<!--							     xmlns="http://www.w3.org/2000/svg">-->
<!--								<path fill-rule="evenodd"-->
<!--								      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"-->
<!--								      clip-rule="evenodd"/>-->
<!--							</svg>-->
<!--						</button>-->
<!--					</div>-->
<!--					&lt;!&ndash; END Search &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; END Left Section &ndash;&gt;-->
<!--				-->
<!--				&lt;!&ndash; Right Section &ndash;&gt;-->
<!--				<div class="flex items-center space-x-2">-->
<!--					&lt;!&ndash; Notifications &ndash;&gt;-->
<!--					<button type="button"-->
<!--					        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">-->
<!--						<svg class="hi-outline hi-bell inline-block w-5 h-5" stroke="currentColor" fill="none"-->
<!--						     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--							      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>-->
<!--						</svg>-->
<!--						<span class="text-indigo-500">•</span>-->
<!--					</button>-->
<!--					&lt;!&ndash; END Notifications &ndash;&gt;-->
<!--					-->
<!--					&lt;!&ndash; User Dropdown &ndash;&gt;-->
<!--					<div class="relative inline-block">-->
<!--						&lt;!&ndash; Dropdown Toggle Button &ndash;&gt;-->
<!--						<button-->
<!--							@click="toggleAdmin=!toggleAdmin"-->
<!--							type="button"-->
<!--							class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"-->
<!--							id="tk-dropdown-layouts-user"-->
<!--							aria-haspopup="true"-->
<!--							aria-expanded="true"-->
<!--						>-->
<!--							<span>Admin</span>-->
<!--							<svg class="hi-solid hi-chevron-down inline-block w-5 h-5 opacity-50" fill="currentColor"-->
<!--							     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--								<path fill-rule="evenodd"-->
<!--								      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"-->
<!--								      clip-rule="evenodd"/>-->
<!--							</svg>-->
<!--						</button>-->
<!--						&lt;!&ndash; END Dropdown Toggle Button &ndash;&gt;-->
<!--						-->
<!--						&lt;!&ndash; Dropdown &ndash;&gt;-->
<!--						&lt;!&ndash;-->
<!--						  Visibility-->
<!--							Closed        'hidden'-->
<!--							Opened        '' (no class)-->
<!--			  -->
<!--						  Show/Hide with transitions-->
<!--							enter         'transition ease-out duration-150'-->
<!--							enter-start   'transform opacity-0 scale-75'-->
<!--							enter-end     'transform opacity-100 scale-100'-->
<!--							leave         'transition ease-in duration-100'-->
<!--							leave-start   'transform opacity-100 scale-100'-->
<!--							leave-end     'transform opacity-0 scale-75'-->
<!--						&ndash;&gt;-->
<!--						<transition-->
<!--							enter-class="transform opacity-0 scale-75"-->
<!--							enter-active-class="transition ease-out duration-150"-->
<!--							enter-to-class="transform opacity-100 scale-100"-->
<!--							leave-class="transform opacity-100 scale-100"-->
<!--							leave-active-class="transition ease-in duration-100"-->
<!--							leave-to-class="transform opacity-0 scale-75"-->
<!--						>-->
<!--							<div v-if="toggleAdmin" role="menu" aria-labelledby="tk-dropdown-layouts-user"-->
<!--							     class="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1">-->
<!--								<div class="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">-->
<!--									<div class="p-2 space-y-1">-->
<!--										<a role="menuitem" href="javascript:void(0)"-->
<!--										   class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">-->
<!--											<svg class="hi-solid hi-user-circle inline-block w-5 h-5 opacity-50"-->
<!--											     fill="currentColor" viewBox="0 0 20 20"-->
<!--											     xmlns="http://www.w3.org/2000/svg">-->
<!--												<path fill-rule="evenodd"-->
<!--												      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"-->
<!--												      clip-rule="evenodd"/>-->
<!--											</svg>-->
<!--											<span>Profile</span>-->
<!--										</a>-->
<!--										<a role="menuitem" href="javascript:void(0)"-->
<!--										   class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">-->
<!--											<svg class="hi-solid hi-inbox inline-block w-5 h-5 opacity-50"-->
<!--											     fill="currentColor" viewBox="0 0 20 20"-->
<!--											     xmlns="http://www.w3.org/2000/svg">-->
<!--												<path fill-rule="evenodd"-->
<!--												      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"-->
<!--												      clip-rule="evenodd"/>-->
<!--											</svg>-->
<!--											<span>Inbox</span>-->
<!--										</a>-->
<!--									</div>-->
<!--									<div class="p-2 space-y-1">-->
<!--										<a role="menuitem" href="javascript:void(0)"-->
<!--										   class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">-->
<!--											<svg class="hi-solid hi-cog inline-block w-5 h-5 opacity-50"-->
<!--											     fill="currentColor"-->
<!--											     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--												<path fill-rule="evenodd"-->
<!--												      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"-->
<!--												      clip-rule="evenodd"/>-->
<!--											</svg>-->
<!--											<span>Settings</span>-->
<!--										</a>-->
<!--									</div>-->
<!--									<div class="p-2 space-y-1">-->
<!--										<form onsubmit="return false;">-->
<!--											<button type="submit" role="menuitem"-->
<!--											        class="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">-->
<!--												<svg class="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50"-->
<!--												     fill="currentColor" viewBox="0 0 20 20"-->
<!--												     xmlns="http://www.w3.org/2000/svg">-->
<!--													<path fill-rule="evenodd"-->
<!--													      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"-->
<!--													      clip-rule="evenodd"/>-->
<!--												</svg>-->
<!--												<span>Sign out</span>-->
<!--											</button>-->
<!--										</form>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						-->
<!--						</transition>-->
<!--						-->
<!--						&lt;!&ndash; END Dropdown &ndash;&gt;-->
<!--					</div>-->
<!--					&lt;!&ndash; END User Dropdown &ndash;&gt;-->
<!--				</div>-->
<!--				&lt;!&ndash; END Right Section &ndash;&gt;-->
<!--			</div>-->
<!--		</header>-->
<!--		&lt;!&ndash; END Page Header &ndash;&gt;-->
<!--		-->
<!--		&lt;!&ndash; Page Content &ndash;&gt;-->
<!--		<main id="page-content" class="flex flex-auto flex-col max-w-full pt-16">-->
<!--			&lt;!&ndash; Page Section &ndash;&gt;-->
<!--			<div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">-->
<!--				&lt;!&ndash;-->
<!--		  -->
<!--				ADD YOUR MAIN CONTENT BELOW-->
<!--		  -->
<!--				&ndash;&gt;-->
<!--				-->
<!--				-->
<!--				&lt;!&ndash; Placeholder &ndash;&gt;-->
<!--				<div-->
<!--					class="flex justify-center rounded-lg bg-gray-50   text-gray-500 text-lg ">-->
<!--					<Nuxt/>-->
<!--				</div>-->
<!--				-->
<!--				-->
<!--				&lt;!&ndash;-->
<!--		  -->
<!--				ADD YOUR MAIN CONTENT ABOVE-->
<!--		  -->
<!--				&ndash;&gt;-->
<!--			</div>-->
<!--			&lt;!&ndash; END Page Section &ndash;&gt;-->
<!--		</main>-->
<!--		&lt;!&ndash; END Page Content &ndash;&gt;-->
<!--		-->
<!--		&lt;!&ndash; Page Footer &ndash;&gt;-->
<!--		<footer id="page-footer" class="flex flex-none items-center bg-white">-->
<!--		-->
<!--		</footer>-->
<!--		&lt;!&ndash; END Page Footer &ndash;&gt;-->
<!--	</div>-->
<!--	&lt;!&ndash; END Page Container &ndash;&gt;-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--	data() {-->
<!--		return {-->
<!--			toggleAdmin: false,-->
<!--			mobileSidebarOpen: false,-->
<!--			desktopSidebarOpen: true,-->
<!--		}-->
<!--	},-->
<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
