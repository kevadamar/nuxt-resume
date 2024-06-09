<template>
  <header
    class="container flex items-center justify-start md:justify-center px-4 py-4 mx-auto font-semibold leading-6 lg:py-6 relative md:fixed top-0 bg-slate-900 z-50"
  >
    <div class="flex items-center">
      <div class="flex md:hidden justify-evenly items-center fixed bottom-0 bg-slate-900 shadow-[0_35px_50px_1px_rgba(255,255,255,1)] w-full z-50 p-5 left-0">
        <a href="/#about" class="transition duration-300 text-hover">
          <Icon name="uil:chat-bubble-user" size="24px"/>
        </a>
        <a href="/#technologies" class="transition duration-300 text-hover">
          <Icon name="uil:window" size="24px"/>
        </a>
        <a href="/#resume" class="transition duration-300 text-hover">
          <Icon name="uil:clipboard-notes" size="24px"/>
        </a>
      </div>
      <nav class="hidden md:flex text-white-primary">
        <ul class="flex items-center space-x-14">
          <li class="nav-item">
            <a
              class="pb-[4px] transition duration-300 text-hover"
              href="/#about"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="pb-[4px] transition duration-300 text-hover"
              href="/#technologies"
              >Technologies</a
            >
          </li>
          <li class="nav-item">
            <a
              class="pb-[4px] transition duration-300 text-hover"
              href="/#resume"
              >Resume</a
            >
          </li>
          <!-- <li class="nav-item">
            <a
              class="pb-[4px] transition duration-300 text-hover"
              href="/#projects"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a
              class="pb-[4px] transition duration-300 text-hover"
              href="/#contact"
              >Contact</a
            >
          </li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-item {
  display: block;
  padding: 0;
  margin: 0 0 4px 0;
  position: relative;
}

.nav-item::after {
  content: "";
  position: absolute;
  left: 0;
  margin-right: 12px;
  bottom: 0;
  right: 0;
  opacity: 0;
  height: 2px;
  width: 100%;
  display: block;
  background-color: var(--color-primary);
  transition: all 0.5s ease-in-out;
  border-radius: 12px;
  transform-origin: center;
  transform: scaleX(0);
}
.nav-item:hover::after {
  transform: scaleX(1);
  opacity: 1;
}
.nav-item:hover {
  cursor: pointer;
  color: var(--color-primary);
  text-shadow: 0px 0px 1px var(--color-primary);
}
</style>
