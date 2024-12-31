// import React, { useEffect, useRef } from "react";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { useParams } from "react-router-dom";

// function RoomPage() {
//   const { roomId } = useParams();
//   const meetingRef = useRef(null)

//   useEffect(() => {
//       const myMeeting = async () => {
//           const appID = 385628964;
//           const serverSecret = "bd023dea16eb5fe07131410cd9d1210f";
//           const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//               appID,
//       serverSecret,
//       roomId,
//       Date.now().toString,
//       "Kylian"
//     );
//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     zp.joinRoom({
//         container:meetingRef.current,
//         scenario:{
//             mode: ZegoUIKitPrebuilt.VideoConference,
//         }
//     })
// };
// myMeeting()
// },[roomId])

//   return <div><div ref={myMeeting} /></div>;
// }

// export default RoomPage;

import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    if (!roomId) {
      console.error("Room ID is missing.");
      return;
    }

    const initializeMeeting = async () => {
      const appID = 385628964;
      const serverSecret = "bd023dea16eb5fe07131410cd9d1210f"; // Replace with a secure server call for the token.
      
      // Generate Kit Token (Move this logic to your backend for better security)
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
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

    initializeMeeting();
  }, [roomId]);

  return <div ref={meetingRef} style={{ width: "100%", height: "100vh" }} />;
}

export default RoomPage;
