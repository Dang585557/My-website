<div></div> class="container">
  <h1> ดาวน์โหลดวิดีโอ Facebook </h1>
  <input type="text" id="videoURL" placeholder="วางลิงก์วิดีโอ Facebook ที่นี่">
  <button onclick="simulateDownload()">ดึงวิดีโอ</button>
  <div id="result"></div>

  <div class="ads">
    <p>พื้นที่โฆษณาของคุณ ✨</p>
  </div>
</div>/* พื้นหลังแบบไล่สี */
body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #00b4d8, #90e0ef);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  color: #0077b6;
}

.container {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
  width: 90%;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
function simulateDownload() {
  const url = document.getElementById('videoURL').value.trim();
  const result = document.getElementById('result');

  if (!url) {
    result.innerHTML = '<p style="color:red;">กรุณาวางลิงก์ก่อน</p>';
    return;
  }

  // จำลองคุณภาพวิดีโอ
  result.innerHTML = `
    <h3>เลือกระดับความคมชัด:</h3>
    <a class="download-btn" href="https://example.com/video-720p.mp4" target="_blank">720p</a>
    <a class="download-btn" href="https://example.com/video-1080p.mp4" target="_blank">1080p</a>
    <a class="download-btn" href="https://example.com/video-4k.mp4" target="_blank">4K</a>
  `;
}
