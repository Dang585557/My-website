<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>เว็บไซต์โทนสีฟ้าทันสมัย</title>
  <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>เว็บไซต์ของ Dang</h1>
    <nav>
      <a href="#">หน้าแรก</a>
      <a href="#">เกี่ยวกับเรา</a>
      <a href="#">ติดต่อ</a>
    </nav>
  </header>

  <section class="content">
    <h2>ยินดีต้อนรับ!</h2>
    <p>นี่คือเว็บไซต์โทนสีฟ้าทันสมัยที่คุณสามารถพัฒนาต่อได้</p>
    <button>คลิกเลย</button>
  </section>

  <footer>
    <p>© 2025 Dang. สงวนลิขสิทธิ์</p>
  </footer>
</body>
</html>body {
  font-family: 'Kanit', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #e6f7ff;
  color: #333;
}

header {
  background-color: #00aaff;
  color: white;
  padding: 20px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

.content {
  text-align: center;
  padding: 50px 20px;
}

button {
  background-color: #0077cc;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #005fa3;
}

footer {
  background-color: #00aaff;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
