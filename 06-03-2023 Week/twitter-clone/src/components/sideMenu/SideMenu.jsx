import "./index.css";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul>
        <li>
          <img
            src="https://img.icons8.com/material-outlined/256/home-page.png"
            alt="icon"
          />{" "}
          <p>Home</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios-filled/1x/hashtag-large.png"
            alt="icon"
          />{" "}
          <p>Explore</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/256/appointment-reminders.png"
            alt="icon"
          />{" "}
          <p>Notifications</p>
        </li>
        <li>
          <img src="https://img.icons8.com/ios/256/new-post.png" alt="icon" />{" "}
          <p>Messagges</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/material/256/bookmark-outline.png"
            alt="icon"
          />{" "}
          <p>Bookmarks</p>
        </li>
        <li>
          <img src="" alt="icon" /> <p>Lists</p>
        </li>
        <li>
          <img src="" alt="icon" /> <p>Profile</p>
        </li>
        <li>
          <img src="" alt="icon" /> <p>More</p>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
