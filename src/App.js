import React from "react";
// 1. Import style mặc định (Bắt buộc để có giao diện đẹp)
import "@livekit/components-styles";
// 2. Import các component cần thiết
import { LiveKitRoom, VideoConference } from "@livekit/components-react";

function App() {
  // === ĐIỀN THÔNG TIN BẠN VỪA LẤY Ở BƯỚC 1 VÀO ĐÂY ===

  // Dòng wss://... lấy ở Dashboard
  const LIVEKIT_URL = "wss://nhom6-thu4ca3-voh0dtp2.livekit.cloud";

  // Đoạn mã dài loằng ngoằng bạn vừa Generate
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzAxOTYwNDUsImlkZW50aXR5IjoiNyIsImlzcyI6IkFQSU5ocXdheG13UFdvdSIsIm5iZiI6MTc3MDE5NTE0NSwic3ViIjoiNyIsInZpZGVvIjp7ImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJ0aHU0LWNhQ2hpZXUiLCJyb29tSm9pbiI6dHJ1ZX19.EqH7xVMPGqLYZmW9R89Oz4-jO5blCMNhqp5_4tzms2Q";

  // Nếu thiếu thông tin thì hiện thông báo
  if (
    LIVEKIT_URL === "wss://your-project.livekit.cloud" ||
    !TOKEN.startsWith("ey")
  ) {
    return (
      <div style={{ padding: 20, color: "red" }}>
        Bạn chưa điền URL hoặc Token vào code!
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "#111" }}>
      <LiveKitRoom
        video={true}
        audio={true}
        token={TOKEN}
        serverUrl={LIVEKIT_URL}
        connect={true}
        data-lk-theme="default"
      >
        {/* VideoConference là component "All-in-one". 
           Nó tự động phát hiện số lượng người để chia Grid.
        */}
        <VideoConference />
      </LiveKitRoom>
    </div>
  );
}

export default App;
