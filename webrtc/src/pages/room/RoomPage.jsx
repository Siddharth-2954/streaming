import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams();

  const myMeeting = async () => {
    const appID = 385628964;
    const serverSecret = "bd023dea16eb5fe07131410cd9d1210f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString,
      "Kylian"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
}

export default RoomPage;
