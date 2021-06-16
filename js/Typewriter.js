const textOne = document.getElementById("text-1");
const textTwo = document.getElementById("text-2");
const textThree = document.getElementById("text-3");

const write = function (str, onCompletion, textArea) {
  let text = str;
  let currStr = 0;
  // console.log(text);

  const loop = function () {
    textArea.textContent = text.substring(0, currStr);
    if (currStr === text.length) {
      setTimeout(onCompletion, 750);
      return;
    }
    currStr++;

    setTimeout(loop, 60);
  };
  loop();
};

const erase = function (str, onCompletion, textArea) {
  let text = str;
  let currStr = text.length;
  // console.log(text);

  const loop = function () {
    textArea.textContent = text.substring(0, currStr);

    if (currStr === 0) {
      setTimeout(onCompletion, 50);
      return;
    }
    currStr--;

    setTimeout(loop, 50);
  };
  loop();
};

const typerWriter = function () {
  write(
    "The details are not",
    () => {
      write(
        "only the details",
        () => {
          write(
            "They make the design",
            () => {
              erase(
                "They make the design",
                () => {
                  erase(
                    "only the details",
                    () => {
                      erase("The details are not", () => {}, textOne);
                    },
                    textTwo
                  );
                },
                textThree
              );
            },
            textThree
          );
        },
        textTwo
      );
    },
    textOne
  );
};
