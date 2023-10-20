<template>
  <div class="frame">
    <div class="center-content">
      <div id="main-container" class="image-container relative">
        <!-- Image 1 : Lamp -->
        <div class="overflow-hidden w-[961px] h-[598px] m-auto absolute inset-0">
          <img id="lamp-image" src="./assets/Lamp.png" class="custom-image grayscale" 
            @mouseover="onMainContainerHover()"
            @mouseout="onMainContainerOut()" />
        </div>

        <!-- Rectangle-1 -->
        <div id="rect-1" class="rectangle-1">
          <div class="w-[67px] h-[18px] transform bg-kuning transition duration-600 ease-out hover:translate-x-[64px]">
          </div>
        </div>

        <!-- Rectangle-2 -->
        <div id="rect-2" class="rectangle-2 bg-kuning ">
          <div class="w-[140px] h-[18px] -translate-x-full transition transform ease-in-out duration-600 absolute ">
          </div>
        </div>

        <!-- Rectangle-3 -->
        <div id="rect-3" class="rectangle-3 bg-kuning transition duration-200 delay-500">
          <div class="flex w-[67px] h-[18px]">
          </div>
        </div>

        <!-- Rectangle-4 -->
        <div id="rect-4" class="rectangle-4 bg-kuning transition duration-200 delay-500">
          <div class="flex w-[140px] h-[18px]">
          </div>
        </div>

        <!-- Image 2 : Paper -->
        <img src="./assets/Paper.png" class="mx-auto img-with-padding" />

        <!-- Image 3 : Window -->
        <img id="window-1" src="./assets/Window.png" class="mx-auto window-image" />

        <!-- Text 1 : 'We Create' -->
        <div id="text-1"
          class="absolute top-[113px] left-[178px] text-overlay delay-300 duration-300 transition-all cursor-default">
          <p class="text-white"
            style="color: #FFB800; font-family: Montserrat; font-size: 175px; font-style: normal; font-weight: 700; line-height: normal;">
            We Create</p>
        </div>

        <!-- Text 2: 'AWESOME THINGS' -->
        <div id="text-2" class="absolute top-[765px] text-2-overlay opacity-0 z-10" 
          @mouseover="onText2ContainerHover()"
          @mouseout="onText2ContainerOut()">
          <p class="text-white"
            style="color: #FFB800; font-family: Montserrat; font-size: 72px; font-style: normal; font-weight: 700; line-height: normal;">
            AWESOME THINGS</p>

        <!-- Box behind Text 2 -->
        <div id="box-1" class="box-behind"
          onclick='document.getElementById("window-1")'></div>
        </div>

        <!-- Arrow Image -->
        <div id="arrow-1" class="relative opacity-0 -top-[255px] left-[1300px] arrow-1-hover z-10">
          <img src="./assets/Arrow-Yellow.png">
        </div>



      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onMainContainerHover() {
      // alert("onMainContainerHover");
      var element1 = document.getElementById("lamp-image");
      element1.classList.add("scale-lamp-hover");
      element1.classList.remove("scale-lamp-out");
      element1.classList.add("grayscale-0");

      var element2 = document.getElementById("text-1");
      element2.classList.add("scale-text-1-hover");

      var element3 = document.getElementById("text-2");
      element3.style.opacity = 1;
      element3.style.transform = "translateX(222px)";

      var element4 = document.getElementById("arrow-1");
      element4.style.opacity = 1;
      element4.style.transform = "translateX(-280px)";

      // var rectangle1 = document.getElementById("rect-1");
      // rectangle1.style.opacity = 1;
      // rectangle1.style.transform = "translateX(-67px)";

      var rectangle2 = document.getElementById("rect-2");
      rectangle2.style.opacity = 1;
      rectangle2.style.transform = "translateX(-0px)";

      var rectangle3 = document.getElementById("rect-3");
      rectangle3.style.opacity = 1;
      rectangle3.style.transform = "translateX(67px)";

      var rectangle4 = document.getElementById("rect-4");
      rectangle4.style.opacity = 1;
      rectangle4.style.transform = "translateX(140px)";
    },
    onMainContainerOut() {
      // alert("onMainContainerOut");
      var element1 = document.getElementById("lamp-image");
      element1.classList.remove("scale-lamp-hover");
      element1.classList.add("scale-lamp-out");
      element1.classList.remove("grayscale-0");


      var element2 = document.getElementById("text-1");
      element2.classList.remove("scale-text-1-hover");

      var element3 = document.getElementById("text-2");
      element3.style.opacity = 0;
      element3.style.transform = "translateX(0)";

      var element4 = document.getElementById("arrow-1");
      element4.style.opacity = 0;
      element4.style.transform = "translateX(0)";

      // var rectangle1 = document.getElementById("rect-1");
      // rectangle1.style.opacity = 0;
      // rectangle1.style.transform = "translateX(0)";

      var rectangle2 = document.getElementById("rect-2");
      rectangle2.style.opacity = 0;
      rectangle2.style.transform = "translateX(0)";

      var rectangle3 = document.getElementById("rect-3");
      rectangle3.style.opacity = 0;
      rectangle3.style.transform = "translateX(0)";

      var rectangle4 = document.getElementById("rect-4");
      rectangle4.style.opacity = 0;
      rectangle4.style.transform = "translateX(0)";
    },
    onText2ContainerHover() {
      this.onMainContainerHover();
      document.getElementById("text-2").querySelector('p').style.color = "#FFFFFF";

      var arrowContainer = document.getElementById("arrow-1");
      var arrowImage = arrowContainer.querySelector('img');
      arrowImage.style.filter = "brightness(2) grayscale(1)";
    },
    onText2ContainerOut() {
      this.onMainContainerOut();
      document.getElementById("text-2").querySelector('p').style.color = "#FFB800";

      var arrowContainer = document.getElementById("arrow-1");
      var arrowImage = arrowContainer.querySelector('img');
      arrowImage.style.filter = "none";
    },
  }
};
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.frame {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;
}

.image-container {
  width: 1556px;
  height: 1037px;
}

.center-content {
  width: 100%;
  max-width: 1556px;
  position: relative;
}

.img-with-padding {
  margin-top: 6px;
  margin-left: 58px;
}

.custom-image {
  width: 961px;
  height: 598px;
  object-fit: cover;
}

.scale-lamp-hover {
  transform: scale(1.3);
  transform-origin: center center;
  transition: transform 0.8s ease;
}

.scale-lamp-out {
  transform: scale(1.0);
  transform-origin: center center;
  transition: transform 0.8s ease;
}

.scale-text-1-hover {
  transform: scale(1.05);
  transform-origin: top left;
  transition: transform 0.3s ease;
}

.text-2-overlay {
  transition: opacity 800ms ease 300ms, transform 600ms ease 500ms;
  position: relative;
  cursor: pointer;
}

.arrow-1-hover {
  transition: opacity 800ms ease 300ms, transform 600ms ease 500ms;
  cursor: pointer;
}

.box-behind {
  position: absolute;
  width: 1039px;
  height: 10rem;
  top: -37px;
  left: -44px;
  background-color: #FFB800;
  opacity: 0;
  transition: opacity 300ms ease;
  z-index: -1;
  border-radius: 1rem;
}

.rectangle-1 {
  position: absolute;
  width: 67px;
  height: 18px;
  top: 56px;
  left: 1221px;
  overflow: hidden;
}

.rectangle-2 {
  position: absolute;
  width: 140px;
  height: 18px;
  top: 56px;
  left: 1298px;
  overflow: hidden;
  opacity: 0;
}

.rectangle-3 {
  position: absolute;
  width: 67px;
  height: 18px;
  top: 962px;
  left: 108px;
  overflow: hidden;
  opacity: 0;
}

.rectangle-4 {
  position: absolute;
  width: 140px;
  height: 18px;
  top: 962px;
  left: 128px;
  overflow: hidden;
  opacity: 0;
}

.window-image {
  position: absolute;
  width: 1448px;
  height: 1086px;
  opacity: 1;
  transition: opacity 300ms ease;
}

.text-2-overlay:hover .box-behind,
.text-2-overlay:hover .arrow-1-hover {
  opacity: 1;
}
</style>
