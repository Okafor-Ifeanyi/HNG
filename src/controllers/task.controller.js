export const getTask = async(req, res, next) => {
    try {
      // Fetches variable from the get request url passed in
      const slackName = req.query.slack_name;
      const track = req.query.track;

      // Create a new Date object to represent the current date and time
      const date = new Date()
      const utcTime = date.toISOString().slice(0, 19) + 'Z';

      // Use the getDay() method to get the current day of the week as an integer
      var currentDayOfWeek = date.getDay()

      // Create an array of day names for reference
      var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      const githubFileUrl = `https://github.com/Okafor-Ifeanyi/HNG/blob/main/src/app.js`;
      const githubRepoUrl = `https://github.com/Okafor-Ifeanyi/HNG`;

      // State all the attributes for the response
      const response = {
        slack_name: slackName,
        current_day: daysOfWeek[currentDayOfWeek], // => Use the currentDayOfWeek to get the day name
        utc_time: utcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200
      };

      // return respone in JSON format as requested
      return res.status(200).json(response);
    } catch (error) {
        next(error)
    }
}