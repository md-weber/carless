<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="relative bg-white dark:bg-gray-900">
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
    <div class="max-w-screen-xl mx-auto">
      <div
        class="
          flex
          items-center
          justify-between
          px-4
          py-6
          sm:px-6
          md:justify-start md:space-x-10
        "
      >
        <div>
          <nuxt-link to="/" class="flex">
            <img class="h-5" src="/img/logo.svg" alt="Workflow" />
          </nuxt-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              text-gray-400
              transition
              duration-150
              ease-in-out
              rounded-md
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none focus:bg-gray-100 focus:text-gray-500
            "
            @click="toggleMenu"
          >
            <!-- Heroicon name: menu -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            hidden
            md:flex-1 md:flex md:items-center md:justify-between md:space-x-12
          "
        >
          <nav class="flex space-x-10">
            <nuxt-link
              to="/about"
              class="
                text-base
                font-medium
                leading-6
                text-gray-500
                transition
                duration-150
                ease-in-out
                hover:text-gray-900
                focus:outline-none focus:text-gray-900
              "
            >
              Über mich
            </nuxt-link>
            <nuxt-link
              to="/products"
              class="
                text-base
                font-medium
                leading-6
                text-gray-500
                transition
                duration-150
                ease-in-out
                hover:text-gray-900
                focus:outline-none focus:text-gray-900
              "
            >
              Produkte
            </nuxt-link>
            <nuxt-link
              to="/blog"
              class="
                text-base
                font-medium
                leading-6
                text-gray-500
                transition
                duration-150
                ease-in-out
                hover:text-gray-900
                focus:outline-none focus:text-gray-900
              "
            >
              Blog
            </nuxt-link>
            <nuxt-link
              to="/contact"
              class="
                text-base
                font-medium
                leading-6
                text-gray-500
                transition
                duration-150
                ease-in-out
                hover:text-gray-900
                focus:outline-none focus:text-gray-900
              "
            >
              Kontakt
            </nuxt-link>
          </nav>
        </div>
      </div>

      <div
        class="
          absolute
          inset-x-0
          top-0
          z-50
          p-2
          transition
          origin-top-right
          transform
          md:hidden
        "
        :class="{ hidden: !menuOpen }"
      >
        <div class="rounded-lg shadow-lg">
          <div class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
            <div class="px-5 pt-5 pb-6 space-y-6">
              <div class="flex items-center justify-between">
                <nuxt-link to="/" @click.native="toggleMenu">
                  <!--suppress HtmlUnknownTarget -->
                  <img
                    class="h-5"
                    src="/assets/images/logo.svg"
                    alt="Workflow"
                  />
                </nuxt-link>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-2
                      text-gray-400
                      transition
                      duration-150
                      ease-in-out
                      rounded-md
                      hover:text-gray-500 hover:bg-gray-100
                      focus:outline-none focus:bg-gray-100 focus:text-gray-500
                    "
                    @click="toggleMenu"
                  >
                    <!-- Heroicon name: x -->
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="px-5 py-6 space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <nuxt-link
                  to="/about"
                  class="
                    text-base
                    font-medium
                    leading-6
                    text-gray-900
                    transition
                    duration-150
                    ease-in-out
                    hover:text-gray-700
                  "
                  @click.native="toggleMenu"
                >
                  Über mich
                </nuxt-link>
                <nuxt-link
                  to="/products"
                  class="
                    text-base
                    font-medium
                    leading-6
                    text-gray-900
                    transition
                    duration-150
                    ease-in-out
                    hover:text-gray-700
                  "
                  @click.native="toggleMenu"
                >
                  Produkte
                </nuxt-link>
                <nuxt-link
                  to="/blog"
                  class="
                    text-base
                    font-medium
                    leading-6
                    text-gray-900
                    transition
                    duration-150
                    ease-in-out
                    hover:text-gray-700
                  "
                  @click.native="toggleMenu"
                >
                  Blog
                </nuxt-link>
                <nuxt-link
                  to="/contact"
                  class="
                    text-base
                    font-medium
                    leading-6
                    text-gray-900
                    transition
                    duration-150
                    ease-in-out
                    hover:text-gray-700
                  "
                  @click.native="toggleMenu"
                >
                  Kontakt
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style scoped></style>
