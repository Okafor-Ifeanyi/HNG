import moment from 'moment'

export const getTask = async(req, res, next) => {
    try {
    const slackName = req.query.slack_name;
     const track = req.query.track;

    // const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ssZ');
    const date = new Date()
    const utcTime = date.toISOString() 

    var currentDayOfWeek = date.getDay()

    // Create an array of day names for reference
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const githubFileUrl = `https://github.com/Okafor-Ifeanyi/HNG/`;
  const githubRepoUrl = `https://github.com/Okafor-Ifeanyi/HNG`;

  const response = {
    slack_name: slackName,
    current_day: daysOfWeek[currentDayOfWeek],
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200
  };
      res.status(200).json(response);
    } catch (error) {
        next(error)
    }
}