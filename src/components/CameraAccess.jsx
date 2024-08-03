import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";

const CameraAccess = () => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <>
      <h1>Camera Accesss</h1>
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="50%"
        />
        <button onClick={capture}>Capture photo</button>
      </div>
    </>
  );
};

export default CameraAccess;
