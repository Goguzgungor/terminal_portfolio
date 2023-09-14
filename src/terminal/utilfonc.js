export function getLastLoginMessage() {
    const currentDate = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const day = dayNames[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const time = currentDate.toLocaleTimeString();

    return `Last login: ${day} ${month} ${date} ${time}`;
}
