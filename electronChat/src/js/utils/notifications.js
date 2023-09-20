export default {
  setup() {
    if (!("Notification" in window)) {
      console.error("노티를 지원하지 않는 브라우저 입니다.");
    } else if (Notification.permission === "granted") {
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Permission has been granted!");
        }
      });
    }
  },

  show({ title, body }) {
    new Notification(title, { body });
  },
};
