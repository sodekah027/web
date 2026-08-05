const C = [
    "trojan://sdnO9RtmczqJVx1uilYyLA@dewa.renaisand.my.id:443?security=tls&type=ws&headerType=&path=%2Ftrojan&host=dewa.renaisand.my.id&sni=dewa.renaisand.my.id&fp=ios#(gratisan)%20%5BTrojan%20-%20ws%5D%20TLS%20%E2%9C%85",
    "vmess://eyJhZGQiOiAiZGV3YS5yZW5haXNhbmQubXkuaWQiLCAiYWlkIjogIjAiLCAiZnAiOiAiaW9zIiwgImhvc3QiOiAiZGV3YS5yZW5haXNhbmQubXkuaWQiLCAiaWQiOiAiY2NiZmE4ODItZmQ5Yi00ZmRiLWJiMTktY2ZmYzAzMjRhYjllIiwgIm5ldCI6ICJ3cyIsICJwYXRoIjogIi92bWVzcyIsICJwb3J0IjogNDQzLCAicHMiOiAiKGdyYXRpc2FuKSBbVk1lc3MgLSB3c10gVExTIFx1MjcwNSIsICJzY3kiOiAiYXV0byIsICJzbmkiOiAiZGV3YS5yZW5haXNhbmQubXkuaWQiLCAidGxzIjogInRscyIsICJ0eXBlIjogIiIsICJ2IjogIjIifQ==",
    "vless://4b6e757d-841d-464b-a82a-cb5525264715@dewa.renaisand.my.id:443?security=tls&type=ws&headerType=&path=%2Fvless&host=dewa.renaisand.my.id&sni=dewa.renaisand.my.id&fp=ios#(gratisan)%20%5BVLESS%20-%20ws%5D%20TLS%20%E2%9C%85"
];

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
    const now = new Date();
    document.getElementById('clock').textContent = pad(now.getHours()) + ':' + pad(now.getMinutes());
    document.getElementById('lockDate').textContent = now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });
}

function copyCfg(i, btn) {
    navigator.clipboard.writeText(C[i]).then(function () {
        btn.classList.add('copied');
        btn.textContent = '✓ Tersalin!';
        setTimeout(function () {
            btn.classList.remove('copied');
            btn.textContent = '📋 Copy Config';
        }, 2000);
    });
}

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

function updateMusicUI() {
    const playing = !music.paused && !music.ended;
    musicBtn.classList.toggle('playing', playing);
    musicBtn.setAttribute('aria-label', playing ? 'Jeda Musik' : 'Putar Musik');
}

function playMusic() {
    music.volume = 0.5;
    music.play().then(updateMusicUI).catch(function () {});
}

function toggleMusic() {
    if (music.paused) {
        playMusic();
    } else {
        music.pause();
        updateMusicUI();
    }
}

musicBtn.addEventListener('click', toggleMusic);
music.addEventListener('play', updateMusicUI);
music.addEventListener('pause', updateMusicUI);
music.addEventListener('ended', updateMusicUI);

playMusic();
['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach(function (evt) {
    document.addEventListener(evt, function () {
        if (music.paused) playMusic();
    }, { once: true });
});

tick();
setInterval(tick, 1000);
