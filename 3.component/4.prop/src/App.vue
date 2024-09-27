<template>
  <main>
    <div>
      <MessageItem v-for="message in messages" 
        :key="message.id"
        :sender="message.sender" 
        :msg="message.msg" 
        :time="message.time"/>
    </div>
  </main>
</template>
<script>
  import MessageItem from "./components/MessageItem.vue";
  
  export default {
    components: {
      MessageItem
    },
    data() {
      return {
        messages: [
          {
            id: 1,
            sender: 'Andy',
            msg: '妳好',
            time: '19:52'
          },
          {
            id: 2,
            sender: 'Jolin',
            msg: 'hi',
            time: '19:53'
          },
          {
            id: 3,
            sender: 'Andy',
            msg: '吃飯',
            time: '19:53'
          },
          {
            id: 4,
            sender: 'Jolin',
            msg: '不要',
            time: '19:57'
          }
        ]
      };
    }
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
  }

  body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(
      #212943 0.6000000000000001px,
      #0f141c 0.6000000000000001px
    );
    background-size: 12px 12px;
    color: white;
  }

  #app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
  }

  h1 {
    margin-bottom: 2em;
  }
</style>
