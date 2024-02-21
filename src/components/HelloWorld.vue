<template>
  <section class="flex flex-col items-center pb-12 mx-auto w-full bg-stone-50 max-w-[480px]">
    <header class="flex overflow-hidden relative flex-col self-stretch px-5 pb-12 w-full min-h-[603px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa19feb57f93591158653d4f547a444c80938b257409da5b49c186972fa66a54?apiKey=6e848ce2035d4bd6a3b40a9b7efa8116" alt="" class="object-cover absolute inset-0 size-full">
      <div class="flex relative gap-5 justify-between py-4 pr-5 pl-10 w-full bg-white bg-opacity-0">
        <time class="justify-center self-start text-base font-bold tracking-tight leading-5 text-center text-black whitespace-nowrap aspect-[2.5]">9:41</time>
        <div class="flex gap-1.5 justify-between items-start">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3cc977bfd521d7347dfb9a8641519508d786b78518441f5d852482e3d9b7629?apiKey=6e848ce2035d4bd6a3b40a9b7efa8116" alt="Signal Indicator" class="aspect-[1.89] fill-black w-[19px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db0eb58e13599ce5a9575eb036c4e9b947d0a06b1d51f6ba2d5a74b9f958996?apiKey=6e848ce2035d4bd6a3b40a9b7efa8116" alt="Wifi Indicator" class="aspect-[1.54] fill-black w-[17px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ffd6d718eab29ed70fb8aab149e449fe3e25b25c17c0c546ee9adfa05e69253?apiKey=6e848ce2035d4bd6a3b40a9b7efa8116" alt="Battery Indicator" class="self-stretch w-7 aspect-[2.33]">
        </div>
      </div>
      <h1 class="relative mt-40 mb-12 text-5xl font-semibold text-center text-black leading-[60px]">D<br />I<br />A<br />R<br />Y</h1>
    </header>
    <main>
      <form class="flex flex-col items-center gap-2 mt-14 w-full">
        <div class="max-w-full w-[239px] text-sm text-center whitespace-nowrap text-zinc-600">
          <label for="username" class="sr-only">Username</label>
          <input type="text" id="username" name="username" placeholder="Username" class="px-16 py-3.5 rounded-2xl bg-slate-300 text-black w-full">
        </div>
        <div class="max-w-full w-[239px] text-sm text-center whitespace-nowrap text-zinc-600">
          <label for="password" class="sr-only">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" class="px-16 py-3 rounded-2xl bg-slate-300 text-black w-full">
        </div>
        <button type="submit" class="mt-10 max-w-full w-[239px] px-16 py-5 rounded-2xl bg-slate-300 text-sm text-center text-black whitespace-nowrap">LOGIN</button>
      </form>
      <button class="mt-10 max-w-full w-[239px] px-5 py-2 text-sm text-center text-black whitespace-nowrap bg-transparent" tabindex="0">Signup</button>
    </main>
  </section>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
</style>