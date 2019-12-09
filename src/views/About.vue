<template>
    <div>
        <AppHeader></AppHeader>
        <section class="intro">A long time ago, in a galaxy far,<br> far away....</section>
        <div class="fade"></div>

            <section class="star-wars">

            <div class="crawl">
              <div class="title">
                <h2>DGM 3790</h2>
                <h1>A New Hope</h1>
              </div>
                
                <p>It is a period of fear. Tired college students, striking from a hidden base, have won their first victory against Finals Week.</p><br>
                <p>During the battle, students managed to steal secret plans to Thor's ultimate weapon, VueJs, a framework with enough power to create or destroy an entire web application.</p><br>
                <p>Pursued by UVU's sinister agents, Julie Halversen races home aboard her starship to enjoy the holidays. She is the custodian of the stolen plans that can produce degrees for her and the galaxy. The fate of the next semester is in her hands...</p><br>
                
            </div>

            </section>
            
    </div>
</template>

<script>
import AppHeader from '../components/header';

export default {
    components: {
        AppHeader,
    },
}
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
}
.intro {
    position: absolute;
    top: 30%;
    left: 35%;
    z-index: 1;
    animation: intro 4s ease-out 1s;
    color: rgb(75, 213, 238);
    font-weight: 400;
    font-size: 300%;
    opacity: 0;
}

@keyframes intro {
    0% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
  opacity: .5;
  transition: 3s;
}

.star-wars {
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
}

.crawl {
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  animation: crawl 70s linear 6s;
  transition: opacity 5s ease-out;
}

.crawl > .title {
  font-size: 90%;
  text-align: center;
}

.crawl > .title h1 {
  margin: 0 0 100px;
  text-transform: uppercase;
}

@keyframes crawl {
  0% {
    top: 0;
    transform: rotateX(20deg)  translateZ(0);
  }
  100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}


</style>