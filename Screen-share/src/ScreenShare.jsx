import { useState, useEffect, useRef } from 'react';
import RecordRTC from 'recordrtc';

const ScreenShare = () => {
  const [stream, setStream] = useState(null);
  const [isSharing, setIsSharing] = useState(false);
  const [recording, setRecording] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const videoRef = useRef(null);

  const startSharing = async () => {
    try {
      const newStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      setStream(newStream);
      setIsSharing(true);
      startRecording(newStream);
    } catch (error) {
      console.error('Error sharing the screen:', error);
    }
  };

  const stopSharing = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setIsSharing(false);
      stopRecording();
    }
  };

  const startRecording = (stream) => {
    const recorder = RecordRTC(stream, {
      type: 'video',
      mimeType: 'video/webm',
      disableLogs: true,
      video: {
        width: 1280,
        height: 720,
      },
    });
    recorder.startRecording();
    setRecording(recorder);
  };

  const stopRecording = () => {
    if (recording) {
      recording.stopRecording(() => {
        const blob = recording.getBlob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      });
    }
  };

  const downloadVideo = () => {
    if (recording) {
      const blob = recording.getBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'screen-record.webm';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="screen-share-container">
      <div className="screen-share-buttons">
        <button onClick={isSharing ? stopSharing : startSharing}>
          {isSharing ? 'Stop Sharing' : 'Share Screen and Audio'}
        </button>
      </div>
      {stream && (
        <div className="screen-share-video-container">
          <video
            ref={videoRef}
            autoPlay
            controls
            className="screen-share-video"
          />
          {videoUrl && (
            <div className="screen-share-download">
              <button onClick={downloadVideo}>Download Recorded Video</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScreenShare;


// import React, { useState, useEffect, useRef } from 'react';
// import RecordRTC from 'recordrtc';

// const ScreenShare = () => {
//   const [stream, setStream] = useState(null);
//   const [isSharing, setIsSharing] = useState(false);
//   const [recording, setRecording] = useState(null);
//   const [videoUrl, setVideoUrl] = useState(null);
//   const videoRef = useRef(null);

//   const startSharing = async () => {
//     try {
//       const newStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
//       setStream(newStream);
//       setIsSharing(true);
//       startRecording(newStream);
//     } catch (error) {
//       console.error('Error sharing the screen:', error);
//     }
//   };

//   const stopSharing = () => {
//     if (stream) {
//       stream.getTracks().forEach((track) => track.stop());
//       setStream(null);
//       setIsSharing(false);
//       stopRecording();
//     }
//   };

//   const startRecording = (stream) => {
//     const recorder = RecordRTC(stream, {
//       type: 'video',
//       mimeType: 'video/webm',
//       disableLogs: true,
//       video: {
//         width: 1280,
//         height: 720,
//       },
//     });
//     recorder.startRecording();
//     setRecording(recorder);
//   };

//   const stopRecording = () => {
//     if (recording) {
//       recording.stopRecording(() => {
//         const blob = recording.getBlob();
//         const url = URL.createObjectURL(blob);
//         setVideoUrl(url);
//       });
//     }
//   };

//   const downloadVideo = () => {
//     if (recording) {
//       recording.save('screen-record.webm');
//     }
//   };

//   useEffect(() => {
//     if (stream && videoRef.current) {
//       videoRef.current.srcObject = stream;
//     }
//   }, [stream]);

//   return (
//     <div>
//       <button onClick={isSharing ? stopSharing : startSharing}>
//         {isSharing ? 'Stop Sharing' : 'Share Screen and Audio'}
//       </button>
//       {stream && (
//         <div>
//           <video
//             ref={videoRef}
//             autoPlay
//             controls
//             style={{ maxWidth: '80%', maxHeight: '80%' }}
//           />
//         </div>
//       )}
//       {videoUrl && (
//         <div>
//           <button onClick={downloadVideo}>Download Recorded Video</button>
//           {/* <video
//             src={videoUrl}
//             controls
//             style={{ maxWidth: '80%', maxHeight: '80%' }}
//           /> */}
//         </div>
//       )}
//       <p> Here the Video URL <a href={videoUrl}>{videoUrl}</a>  </p>
//     </div>
//   );
// };

// export default ScreenShare;

