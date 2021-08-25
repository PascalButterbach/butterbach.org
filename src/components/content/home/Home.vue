<template>
  <div class="container">
    <div class="row m-0 p-0">
      <div class="col-lg-6 col-md-12">
        <div class="container about">
          <h4>Hi, ich bin</h4>
          <h2>Pascal Butterbach</h2>
          <h4>aus Bielefeld</h4>
          <div class="about-box">
            <p id="mySpan" class="run-animation">{{ arr[0] }}</p>
          </div>

          <!-- <div id="contact_btn">
            <a href="#Contact" class="butti-btn mt-3">Kontaktiere mich!</a>
          </div> -->
        </div>
      </div>
      <div class="col-lg-6 d-none d-lg-block p-0 m-0">
        <img class="profile mt-5" />

        <div class="trapez trapez-animation tri-1 d-none d-lg-block">
          <img />
        </div>
        <div class="trapez trapez-animation tri-2 d-none d-lg-block">
          <img />
        </div>
        <div class="trapez trapez-animation tri-3 d-none d-lg-block">
          <img />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      arr: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    };
  },
  methods: {
    loop() {
      let span = document.getElementById("mySpan");

      span.classList.remove("run-animation");
      void span.offsetWidth;
      span.classList.add("run-animation");

      this.arr.push(this.arr.shift());
    },
  },
  mounted: function () {
    setInterval(() => {
      this.loop();
    }, 2500);
  },
};
</script>

<style scoped>
h2 {
  font-weight: 600;
  letter-spacing: 1px;
}

#contact_btn {
  margin-top: 15%;
}

.about-box::before {
  content: "";
  position: absolute;
  width: 250px;
  height: 45px;
  margin-top: 30px;
  margin-bottom: 45px;
  margin-left: -18px;
  background: var(--text-color-accent);
  transform: rotate(-3deg);
  padding: 0.2px;
  background-clip: content-box;
}

.about-box:hover::before {
  transform: scale(1.1) rotate(-3deg);
  transition: all 0.2s linear;
}

.about {
  margin: 25% 15%;
}

#mySpan {
  color: var(--text-color-opposite);
  display: inline-block;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  margin-top: 37px;
  margin-bottom: 45px;
  padding: 5px;
  transform: rotate(-3deg);
}

div {
  z-index: 5;
}

.run-animation {
  position: relative;
  animation: span-animation 2.5s ease-out;
}

@keyframes span-animation {
  from {
    left: 120px;
    opacity: 0.2;
  }

  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    margin-left: 100px;
    opacity: 0.25;
  }
  to {
    margin-left: 0;
    opacity: 1;
  }
}

div {
  overflow: hidden;
}

.tri-1 img {
  content: var(--tri-1);
  width: 170px;
}

.tri-2 img {
  content: var(--tri-2);
  width: 270px;
}

.tri-3 img {
  content: var(--tri-3);
  width: 440px;
  transform: rotate(180deg);
}

.tri-1 {
  position: absolute;
  top: 17%;
  left: 60%;
  z-index: -1;
  animation: jumping 7s ease-in-out infinite alternate;
}

.tri-2 {
  position: absolute;
  top: 23%;
  left: 71%;
  z-index: -1;
  animation: jumping 21s ease-in-out infinite alternate;
}
.tri-3 {
  position: absolute;
  top: 32%;
  left: 52%;
  z-index: -1;
  animation: jumping 14s ease-in-out infinite alternate;
}

@keyframes jumping {
  0% {
    transform: translateY(10px) translateX(0) rotate(0) scale(1);
    opacity: 1;
  }
  20% {
    transform: translateY(20px) translateX(10px) rotate(-20deg) scale(0.8);
    opacity: 0;
  }
  40% {
    transform: translateY(15px) translateX(-15px) rotate(30deg) scale(0.65);
    opacity: 1;
  }
  40% {
    transform: translateY(-15px) translateX(-25px) rotate(10deg) scale(0.3);
    opacity: 0;
  }
  80% {
    transform: translateY(-30px) translateX(20px) rotate(-20deg) scale(0.75);
    opacity: 1;
  }
  100% {
    transform: translateY(15px) translateX(15px) rotate(0) scale(0.95);
    opacity: 0;
  }
}

img.profile {
  margin-left: 5%;
  content: var(--profile);
}
</style>