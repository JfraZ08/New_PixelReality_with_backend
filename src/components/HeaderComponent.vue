<script>
</script>
<template>
  <header>
      <nav>
        <ul>
          <li class="imgheader"><RouterLink to="/"><img src="../../public/images/Logo_PR.png" alt=""></RouterLink></li>
          <li class="homeheader"><RouterLink to="/">Accueil</RouterLink></li>
          <li class="enterpriseheader"><RouterLink to="/entreprise">L'entreprise</RouterLink></li>
          <li class="photographieheader"><RouterLink to="/photographie">Photographie</RouterLink></li>
          <li class="imagerieiaheader"><RouterLink to="/imagerieia">Imagerie IA</RouterLink></li>
          <li class="photogrammetrieheader"><RouterLink to="/photogrammetrie">Photogrammetrie</RouterLink></li>
          <li class="qrcodeheader"><RouterLink to="/qrcode">QR Codes</RouterLink></li>
          <li class="contactheader"><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
        
        
      </nav>
  </header>

  <RouterView />
</template>
<style>

header {
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: auto;
} 
nav {
  width: 1000px;
}
nav ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  width: 140px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-weight: bold;
}
header a {
  text-decoration: none;
  color: black;
}
.imgheader img {
  width: 80px;
  height: 100px;
}

.photographieheader {
  background-color: #FFD400;
}

.imagerieiaheader {
  background-color: #00CC00;
}

.photogrammetrieheader {
  background-color: #0099FF;
}

.qrcodeheader {
  background-color: #CC0000;
}
</style>
