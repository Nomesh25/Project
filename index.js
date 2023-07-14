//sidebar
const menuItems = document.querySelectorAll(".menu-item");

//,messages

const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
//remove active class for all menu items

//font wala kaam
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

//change colors

const colorPalette = document.querySelectorAll(".choose-color span");

//backkground
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

const logo = document.querySelector(".logo");

//action buttons changes
const feeds = document.querySelectorAll(".feed");
const heartButton = document.querySelectorAll(
  ".interaction-buttons span:nth-child(1)"
);
// Get the bookmarks button
const bookmarksButton = document.querySelectorAll(".bookmarks-button span");

//friend request cards
const requestCards = document.querySelectorAll(".request");

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(".notification-count").style.display = "none";
    }
  });
});

//MEssages

//search chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  //   console.log(val);
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

///theme customisation

//opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

//FONTS SIZE
//remove active and add
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });

  //change html font size by one click
});

//change primary colors
//remove active class from the ecisiting ones
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  Bg2.classList.add("active");

  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});
Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  Bg3.classList.add("active");

  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
Bg1.addEventListener("click", () => {
  Bg1.classList.add("active");

  Bg3.classList.remove("active");
  Bg2.classList.remove("active");
  window.location.reload();
});
//background change inn this
logo.addEventListener("click", () => {
  window.location.reload();
});

feeds.forEach((feed) => {
  // Get the heart button and bookmarks button within the current feed
  const heartButton = feed.querySelector(
    ".interaction-buttons span:nth-child(1)"
  );
  const bookmarksButton = feed.querySelector(".bookmarks-button span");

  // Add click event listener to the heart button
  heartButton.addEventListener("click", () => {
    // Toggle the color of the heart button
    if (heartButton.style.color === "red") {
      heartButton.style.color = ""; // Reset to the default color
    } else {
      heartButton.style.color = "red"; // Replace 'red' with your desired color
    }
  });

  // Add click event listener to the bookmarks button
  bookmarksButton.addEventListener("click", () => {
    // Toggle the color of the bookmarks button
    if (bookmarksButton.style.color === "black") {
      bookmarksButton.style.color = ""; // Reset to the default color
    } else {
      bookmarksButton.style.color = "gray";
    }
  });
});

//friend request card
requestCards.forEach((card) => {
  const acceptButton = card.querySelector(".btn.btn-primary");
  const declineButton = card.querySelector(".btn");

  // Add click event listener to the Decline button's parent container
  declineButton.parentElement.addEventListener("click", () => {
    card.remove(); // Remove the card from the DOM
  });

  // Add click event listener to the Accept button
  acceptButton.addEventListener("click", () => {
    const friendName = card.querySelector("h5").textContent;
    // Prompt a message with the friend's name
    const message = `Added ${friendName} to the list.`;
    alert(message);

    card.remove(); // Remove the current request card from the DOM
  });
});

// Get the create post form and feed container
const createPostForm = document.querySelector(".create-post");
const feedContainer = document.querySelector(".feeds");

// Add submit event listener to the create post form
createPostForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the entered post text
  const postInput = document.getElementById("create-post");
  const postText = postInput.value;

  if (postText.trim() !== "") {
    // Create a new feed element
    const newFeedItem = document.createElement("div");
    newFeedItem.classList.add("feed");

    // Construct the HTML structure for the new feed item
    newFeedItem.innerHTML = `
      <div class="head">
        <div class="user">
          <div class="profile-picture">
            <img src="./images/profile-1.jpg" alt="" />
          </div>
          <div class="info">
            <h3>Nomesh Patel</h3>
            <small>Home, Just now</small>
          </div>
        </div>
        <span class="edit"><i class="uil uil-ellipsis-h"></i></span>
      </div>
      <div class="text">${postText}</div>
      <div class="action-button">
        <div class="interaction-buttons">
          <span><i class="uil uil-heart"></i></span>
          <span><i class="uil uil-comment-alt"></i></span>
          <span><i class="uil uil-share-alt"></i></span>
        </div>
        <div class="bookmarks-button">
          <span><i class="uil uil-bookmark-full"></i></span>
        </div>
      </div>
      <div class="liked-by">
        <span><img src="./images/profile-1.jpg" alt="" /></span>
        <p>Liked by <b>You</b></p>
      </div>
      <div class="comments stext-muted">View all comments</div>
    `;

    // Prepend the new feed item to the feed container
    feedContainer.prepend(newFeedItem);

    // Reset the input value
    postInput.value = "";
  }
});
