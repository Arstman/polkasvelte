<script>
	export let menu;
</script>

<header class="bg-opacity-60 bg-white border-b fixed inset-x-0 top-0 w-full z-50">
	<nav class="container flex flex-wrap items-center mx-auto px-4 py-2 lg:py-0">
		<a href="/" class="font-bold hover:text-gray-700 mr-3 text-gray-900 text-xl">大众阀门集团</a>
		<div class="flex flex-row items-center ml-auto px-2 space-x-2 lg:order-2">
			<a
				href="/"
				class="bg-gray-700 hidden hover:bg-gray-900 px-6 py-2 rounded-full text-center text-white sm:inline-flex sm:items-center"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="1.25em"
					height="1.25em"
					class="mr-2"
				>
					<g>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
						/>
					</g>
				</svg><span>成为代理商</span></a
			><a
				href="/"
				class="bg-gray-700 hover:bg-gray-900 inline-flex p-2.5 rounded-full text-white"
				aria-label="search"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="1.25em"
					height="1.25em"
				>
					<g>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
						/>
					</g>
				</svg></a
			>
		</div>
		<button
			class="bg-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 rounded text-white lg:hidden"
			data-name="nav-toggler"
			data-pg-ia={JSON.stringify({
				l: [
					{
						name: 'NabMenuToggler',
						trg: 'click',
						a: {
							l: [
								{
									t: '^nav|[data-name=nav-menu]',
									l: [{ t: 'set', p: 0, d: 0, l: { 'class.remove': 'hidden' } }]
								},
								{
									t: '#gt# span:nth-of-type(1)',
									l: [{ t: 'tween', p: 0, d: 0.2, l: { rotationZ: 45, yPercent: 300 } }]
								},
								{
									t: '#gt# span:nth-of-type(2)',
									l: [{ t: 'tween', p: 0, d: 0.2, l: { autoAlpha: 0 } }]
								},
								{
									t: '#gt# span:nth-of-type(3)',
									l: [{ t: 'tween', p: 0, d: 0.2, l: { rotationZ: -45, yPercent: -300 } }]
								}
							]
						},
						pdef: 'true',
						trev: 'true'
					}
				]
			})}
		>
			<span class="block border-b-2 border-current my-1 w-6" />
			<span class="block border-b-2 border-current my-1 w-6" />
			<span class="block border-b-2 border-current my-1 w-6" />
		</button>
		<div data-name="nav-menu" class="flex-grow hidden lg:flex lg:items-center lg:w-auto w-full">
			<div class="flex flex-col lg:flex-row">
				{#each menu as nav}
					{#if nav.children.length == 0}
						<a
							href="/{nav.slug}"
							class="hover:text-gray-700 px-0 py-2 text-gray-900 lg:px-4 lg:py-6">{nav.title}</a
						>
					{:else}
						<div class="relative">
							<a
								href="/{nav.slug}"
								class="block hover:text-gray-700 px-0 py-2 text-gray-900 lg:px-4 lg:py-6"
								role="button"
								data-name="nav-dropdown-trigger"
								data-pg-ia={JSON.stringify({
									l: [
										{
											trg: 'click',
											a: {
												l: [
													{ t: '^div|div', l: [{ t: 'set', p: 0, d: 0, l: { display: 'block' } }] }
												]
											},
											pdef: 'true',
											trev: 'true',
											name: 'NavDropdownTrigger'
										}
									]
								})}
							>
								<span>{nav.title}</span>
								<svg
									class="h-4 inline-block ml-1 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									aria-hidden="true"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg></a
							>
							<div
								class="bg-white border hidden left-0 min-w-max py-2 rounded-bl rounded-br shadow top-full z-20 lg:absolute"
							>
								{#each nav.children as child}
									<a
										href={child.slug}
										class="block hover:bg-gray-100 hover:text-gray-700 px-4 py-1 text-gray-900"
										>{child.title}</a
									>
								{/each}
								<!-- <hr class="my-2" /> -->
							</div>
						</div>
					{/if}
				{/each}
			</div>
			<div class="flex flex-col ml-auto lg:flex-row">
				<a href="/" class="hover:text-gray-700 px-0 py-2 text-gray-900 lg:px-4 lg:py-6"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						width="1.25em"
						height="1.25em"
						class="inline-block mr-2"
					>
						<g>
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
							/>
						</g>
					</svg>Login/Sign Up</a
				>
			</div>
		</div>
	</nav>
</header>
