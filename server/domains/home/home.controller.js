// Action methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  const iconSet = ['⭐', '🖖', '🐈', '🔨', '😎', '🎶'];
  const icon = iconSet[Math.floor(Math.random() * iconSet.length)];
  res.render('index', { title: 'DWPCII-2023A', icon });
};
export default {
  home,
};
