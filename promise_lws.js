const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: "Project Kickoff",
            time: "10:00 AM",
            location: "Conference Room A"
        };
        resolve(meetingDetails);
    }
    else {
        reject(new Error("Meeting already scheduled!"));
    }
});

meeting
    .then(details => {
        console.log(JSON.stringify(details));
    })
    .catch(error => {
        console.error("Error:", error.message);
    });