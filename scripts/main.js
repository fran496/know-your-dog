// This function hides the introduction and tinted background from the web page when user clicks on it
function hideIntroduction() {
  $("#introductory-text").click(function() {
    $(this).hide();
    $("#variable-background").removeClass("tinted-background");
  });
}

// This function recognizes the dog that the user clicked on and changes the background according to that dog
function changeBackground() {
  let background = $("#variable-background");
  let backgroundClass = background.attr("class");
  $("nav .dog-face").click(function() {
    let dogId = $(this).attr("id");
    addDogBackground(background, dogId);
  });
}

function addDogBackground(background, dogId) {
  if (dogId === "corgi-face") {
    background.removeClass("samoyed shiba");
    background.toggleClass("corgi");
  }
  else if (dogId === "samoyed-face") {
    background.removeClass("shiba corgi");
    background.toggleClass("samoyed");
  }
  else if (dogId === "shiba-face") {
    background.removeClass("corgi samoyed");
    background.toggleClass("shiba");
  }
}


$(hideIntroduction);
$(changeBackground);
