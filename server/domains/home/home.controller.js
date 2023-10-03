// Action methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  const iconSet = ['⭐', '🖖', '🐈', '👽', '😎', '🎶', '🔱', '💻', '🐸'];
  const icon = iconSet[Math.floor(Math.random() * iconSet.length)];
  res.render('home/homeView', { icon });
};

const about = (req, res) => {
  res.render('home/aboutView');
};

const test = (_, res) =>
  res.render('user/registrationSuccessful', {
    backgroundColor: 'cyan darken-3',
  });

export default {
  home,
  about,
  test,
};
