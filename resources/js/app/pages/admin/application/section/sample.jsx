import React from "react";

const PushNotification = () => {
  const handleNotify = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications.");
      return;
    }

    if (Notification.permission === "granted") {
      new Notification("Hello! 👋", {
        body: "This is a sample push notification!",
        icon: "/notification-icon.png", // Optional
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Welcome!", {
            body: "Thanks for enabling notifications.",
          });
        }
      });
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleNotify}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Show Notification
      </button>
    </div>
  );
};

export default PushNotification;
