import React from 'react'

const Footer = () => {
  return (
<footer class="bg-white dark:bg-gray-900 fixed bottom-0 left-0 z-20 w-full">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-4">
    <div class="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
      <span class="text-sm mx-auto text-gray-200 sm:text-center dark:text-gray-100">
        © {new Date().getFullYear()} 
        <span class="font-semibold"> QuizQuest </span>. All Rights Reserved.
      </span>
    </div>
  </div>
</footer>

  )
}

export default Footer
