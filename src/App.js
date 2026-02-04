import React, { useState } from "react";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";

function App() {
  // 1. Thay URL Server của bạn vào đây (URL thì thường cố định)
  const LIVEKIT_URL = "wss://nhom6-thu4ca3-voh0dtp2.livekit.cloud";

  // 2. Tạo State để quản lý Token và trạng thái nhập liệu
  const [token, setToken] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  // Hàm xử lý khi bấm nút "Vào phòng"
  const handleJoin = () => {
    if (token.trim().length === 0) {
      alert("Vui lòng dán Token vào!");
      return;
    }
    setIsJoined(true);
  };

  // Hàm xử lý khi bấm nút "Rời phòng" hoặc bị ngắt kết nối
  const handleLeave = () => {
    setIsJoined(false);
    setToken(""); // Xóa token để nhập cái mới
  };

  // === MÀN HÌNH 1: NHẬP TOKEN ===
  if (!isJoined) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.card}>
          <h2>Tham gia phòng họp</h2>
          <p style={{ marginBottom: 10 }}>Dán Token của bạn vào đây:</p>

          <input
            type="text"
            placeholder="eyJhbGciOiJIUzI1NiIsIn..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleJoin} style={styles.button}>
            Vào phòng ngay
          </button>

          <p style={styles.note}>
            *Mẹo: Chạy lệnh <code>node token.js</code> để lấy token mới.
          </p>
        </div>
      </div>
    );
  }

  // === MÀN HÌNH 2: PHÒNG HỌP (LIVEKIT) ===
  return (
    <div style={styles.roomContainer}>
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={LIVEKIT_URL}
        connect={true}
        data-lk-theme="default"
        onDisconnected={handleLeave} // Khi rời phòng thì quay lại màn hình nhập
      >
        <VideoConference />
      </LiveKitRoom>
    </div>
  );
}

// CSS đơn giản cho đẹp mắt
const styles = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "400px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box", // Để padding không làm vỡ khung
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0066ff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  note: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#666",
  },
  roomContainer: {
    height: "100vh",
    width: "100vw",
  },
};

export default App;
