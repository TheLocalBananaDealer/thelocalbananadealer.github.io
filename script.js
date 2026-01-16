function showVideo(type) {

    let links = {
        radio: "PASTE_RADIO_VIDEO_LINK_HERE",
        cash: "PASTE_CASH_VIDEO_LINK_HERE",
        api: "PASTE_API_VIDEO_LINK_HERE",
        vehicle: "PASTE_VEHICLE_VIDEO_LINK_HERE",
        team: "PASTE_TEAM_VIDEO_LINK_HERE",
        xp: "PASTE_XP_VIDEO_LINK_HERE"
    }

    let box = document.getElementById("videoBox");

    if (links[type].includes("PASTE")) {
        box.innerHTML = "<p>Video not added yet!</p>";
    } else {
        box.innerHTML = `<a href="${links[type]}" target="_blank">Watch Video Demo</a>`;
    }
}

