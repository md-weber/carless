<template>
  <footer class="mt-12 bg-gray-800">
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <ul class="mt-4 space-y-4">
                <li>
                  <nuxt-link
                    to="/"
                    class="text-base leading-6 text-gray-300 hover:text-white"
                  >
                    Home
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/about"
                    class="text-base leading-6 text-gray-300 hover:text-white"
                  >
                    Über mich
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/products"
                    class="text-base leading-6 text-gray-300 hover:text-white"
                  >
                    Products
                  </nuxt-link>
                </li>
                <li>
                  <a
                    href="/admin"
                    target="_blank"
                    rel="nofollow"
                    class="text-base leading-6 text-gray-300 hover:text-white"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <ul class="mt-4 space-y-4">
                <li>
                  <nuxt-link
                    to="/blog"
                    class="text-base leading-6 text-gray-300 hover:text-white"
                  >
                    Mein Blog
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/contact"
                    class="text-base leading-6 text-gray-300 hover:text-white"
                  >
                    Kontakt
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          pt-8
          mt-8
          border-t border-gray-700
          md:flex md:items-center md:justify-between
        "
      >
        <div class="flex space-x-6 md:order-2">
          <a
            href="https://youtube.com/c/flutterexplained"
            target="_blank"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">YouTube</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/flutter_exp"
            target="_blank"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">Twitter</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
          <a
            href="https://github.com/md-weber"
            target="_blank"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">GitHub</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p class="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
          &copy; 2021 Max Weber
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped></style>
