/* Summary: The hero component contains the following two parts:
- To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
- To the right: There is an image relevant to the app.
*/
Vue.component("simple_hero_component_1722548648", {
    template: `
        <section id="hero-section" style="min-height: 270px" class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex-1">
            <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7">
                    
                    <div id="hero-title-container-text" class="flex">
                        <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Indulge in Irresistible Gingerbread Magic!</h1>
                    </div>

                    <div id="hero-subtitle-container" class="flex">
                        <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Homemade with Love and Traditional Spices</p>
                    </div>

                    <div id="hero-buttons-container" class="flex space-x-4">
                        <div id="hero-button-1-container" class="flex-1">
                            <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="inline-block w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">Order Now</a>
                        </div>
                        <div id="hero-button-2-container" class="flex-1">
                            <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="inline-block w-full px-5 py-3 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 focus:ring-4 focus:ring-blue-300">Learn More</a>
                        </div>
                    </div>
                    
                </div>
                <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img id="hero-image" src="./images/hero.png" alt="hero image">
                </div>
            </div>
        </section>            
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
