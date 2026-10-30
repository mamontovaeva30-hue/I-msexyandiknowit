function show(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });

  document
    .getElementById(id)
    .classList.add("active");

}


function startGame() {

  show("chat");

  const messages =
    document.getElementById("messages");

  const choices =
    document.getElementById("choices");

  messages.innerHTML = "";
  choices.innerHTML = "";


  const story = [

    "Привет.",

    "Не пугайся.",

    "Я знаю, что ты сейчас одна.",

    "И я знаю, где ты живёшь.",

    "Не открывай дверь."

  ];


  story.forEach((text, index) => {

    setTimeout(() => {

      const bubble =
        document.createElement("div");

      bubble.className =
        "message incoming";

      bubble.textContent = text;

      messages.appendChild(bubble);

      messages.scrollTop =
        messages.scrollHeight;

    }, index * 900);

  });


  setTimeout(() => {

    const answers = [

      "Кто ты?",

      "Откуда ты знаешь, где я живу?"

    ];


    answers.forEach(text => {

      const button =
        document.createElement("button");

      button.className = "choice";

      button.textContent = text;


      button.onclick = () => {

        const reply =
          document.createElement("div");

        reply.className =
          "message outgoing";

        reply.textContent = text;

        messages.appendChild(reply);

        choices.innerHTML = "";


        setTimeout(() => {

          const answer =
            document.createElement("div");

          answer.className =
            "message incoming";

          answer.textContent =
            "Посмотри на фотографию.";

          messages.appendChild(answer);

          messages.scrollTop =
            messages.scrollHeight;

        }, 800);


        setTimeout(() => {

          const photoButton =
            document.createElement("button");

          photoButton.className =
            "choice";

          photoButton.textContent =
            "📸 ОТКРЫТЬ ФОТОГРАФИЮ";

          photoButton.onclick = () => {

            show("photo");

          };

          choices.appendChild(photoButton);

        }, 1600);

      };


      choices.appendChild(button);

    });

  }, story.length * 900 + 300);

}


function afterPhoto() {

  show("death");

}


function showVisitors() {

  show("visitors");


  const message =
    document.getElementById(
      "visitorMessage"
    );


  setTimeout(() => {

    message.textContent =
      "Подожди... список обновляется.";

  }, 2000);


  setTimeout(() => {

    const list =
      document.getElementById(
        "visitorList"
      );

    const newVisitor =
      document.createElement("div");

    newVisitor.className =
      "visitor danger";

    newVisitor.innerHTML =
      "<b>ЕВА</b><span>СЕЙЧАС</span>";

    list.appendChild(newVisitor);

  }, 4000);


  setTimeout(() => {

    message.textContent =
      "Почему рядом с твоим именем написано «СЕЙЧАС»?";

  }, 5000);


  setTimeout(() => {

    show("final");

  }, 8500);

}
