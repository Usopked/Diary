<template>
  <div id="app">
    <header>
      <h1>Diary</h1>
    </header>
    <div class="comments">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <textarea v-model="comment.text" placeholder="Write a reply..."></textarea>
        <button @click="replyToComment(comment.id)">Reply</button>
        <button @click="toggleLike(comment.id)">
          <i class="icon" :class="{ 'liked': comment.liked }">👍</i>
        </button>
      </div>
    </div>
    <footer>
      <nav>
        <button>📔</button>
        <button>👤</button>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        { id: 1, text: '', liked: false },
        { id: 2, text: '', liked: false },
        { id: 3, text: '', liked: false }
      ]
    };
  },
  methods: {
    replyToComment(id) {
      // 처리 로직을 여기에 추가하세요.
      console.log('Reply to comment: ', id);
    },
    toggleLike(id) {
      // 좋아요 상태를 토글합니다.
      const comment = this.comments.find(c => c.id === id);
      if (comment) comment.liked = !comment.liked;
    }
  }
};
</script>

<style scoped>
#app {
  max-width: 400px;
  margin: auto;
  font-family: sans-serif;
}

header {
  text-align: center;
}

.comment {
  margin-bottom: 1em;
}

.comment textarea {
  width: 100%;
  margin-bottom: 0.5em;
}

.comment button {
  margin-right: 0.5em;
}

.icon.liked {
  color: blue;
}

footer nav {
  display: flex;
  justify-content: space-around;
}
</style>
