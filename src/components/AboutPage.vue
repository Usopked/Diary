<template>
  <div class="flex flex-col px-6 mt-8 w-full">
    <div class="text-sm text-center text-black">Write Anything</div>
    <div class="flex flex-col justify-center mt-1.5">
      <div class="flex flex-col justify-center">
        <div
          class="shrink-0 bg-white border border-solid border-slate-300 h-[697px]"
        ></div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center self-end mt-2.5 max-w-full text-sm text-center whitespace-nowrap text-zinc-600 w-[107px]"
    >
      <div class="flex flex-col justify-center">
        <button style="padding: 10px 20px; width: 100px; height: 50px;" @click="navigate('/helloworld')">POST!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate(path) {
      this.$router.push(path); 
    },
  },
};
</script>