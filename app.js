// Get the user's location using Geolocation API
function getLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        callback(location);
      }, function(error) {
        alert("Unable to retrieve location.");
        callback(null);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      callback(null);
    }
  }
  
  // Function to send emergency alert
  function sendAlert() {
    getLocation(function(location) {
      if (location) {
        fetch('/send-alert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: 'emergency',
            location: location
          })
        }).then(response => {
          if (response.ok) {
            alert("Emergency alert sent successfully!");
          } else {
            alert("Failed to send alert.");
          }
        });
      }
    });
  }
  
  // Function to send silent alert
  function sendSilentAlert() {
    getLocation(function(location) {
      if (location) {
        fetch('/send-alert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: 'silent',
            location: location
          })
        }).then(response => {
          if (response.ok) {
            console.log("Silent alert sent.");
          } else {
            console.log("Failed to send silent alert.");
          }
        });
      }
    });
  }
  