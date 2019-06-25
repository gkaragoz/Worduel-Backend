function getDateTimeFormatted (date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ':' + seconds + '..' + milliseconds + ' ' + ampm;
    return "[" + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime + "] ";
  }

  function getCurrentDateTimeFormatted() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ':' + seconds + '..' + milliseconds + ' ' + ampm;
    return "[" + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime + "] ";
  }

module.exports = {
    getDateTimeFormatted: getDateTimeFormatted,
    getCurrentDateTimeFormatted: getCurrentDateTimeFormatted
};