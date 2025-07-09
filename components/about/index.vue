<script setup lang="ts">
const listLink: any[] = [
  {
    title: "Github",
    icon: "github",
    url: "https://github.com/kevadamar",
  },
  {
    title: "Linkedin",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/kevadamargalih",
  },
  {
    title: "Email",
    icon: "envelopes",
    url: "mailto:kevadamarg@gmail.com?subject=Inquiry&body=Hello, I have a question about....",
  },
  {
    title: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/kevadamar",
  },
  {
    title: "Resume",
    icon: "cloud-download",
    url: "https://drive.google.com/file/d/19CKSUYyUUazBzw3B3PrkwYfW9zQe1Gzb/view?usp=share_link",
  },
];
</script>
<template>
  <section
    id="about"
    class="w-full min-h-[700px] flex flex-col md:flex-row items-center gap-12 md:gap-[5rem] px-5 justify-center"
  >
    <div class="min-w-[250px] max-w-[250px]">
      <img
        src="~/assets/images/keva.jpeg"
        alt="keva damar galih"
        class="rounded-[50%]"
        loading="lazy"
      />
    </div>
    <div class="flex flex-row md:flex-col gap-8">
      <a
        v-for="(link, idx) in listLink"
        :key="idx"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon :name="'uil:'+link.icon" class="cursor-pointer" size="24px" />
      </a>
    </div>
    <div class="introduce flex flex-col gap-5">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[color:var(--color-primary)]"
      >
        About Me
      </h1>
      <p class="tracking-wider text-justify indent-12">
        Hi 👋, I'm Keva and i am Frontend Developer. I have been working in the
        information technology sector for approximately three years. In this
        time, I have developed a working knowledge of all the latest trends and
        techniques for the best applications. I have worked in commercial
        environments such as Banks, Government and Ports. I also like challenges
        and new things, and accept web - based application development projects
        according to client requests.
      </p>
    </div>
  </section>
</template>
