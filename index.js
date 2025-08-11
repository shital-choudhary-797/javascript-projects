// const step1Btn = document.querySelector("#step-1-btn");
// const step2Btn = document.querySelector("#step-2-btn");
// const step3Btn = document.querySelector("#step-3-btn");

// const step1Content = document.querySelector("#step-1-content");
// const step2Content = document.querySelector("#step-2-content");
// const step3Content = document.querySelector("#step-3-content");

// step1Btn.addEventListener("click", () => {
//   step1Btn.classList.add("live");
//   step1Content.classList.add("live");

//   step2Btn.classList.remove("live");
//   step2Content.classList.remove("live");

//   step3Btn.classList.remove("live");
//   step3Content.classList.remove("live");
// });

// step2Btn.addEventListener("click", () => {
//   step2Btn.classList.add("live");
//   step2Content.classList.add("live");

//   step1Btn.classList.remove("live");
//   step1Content.classList.remove("live");

//   step3Btn.classList.remove("live");
//   step3Content.classList.remove("live");
// });

// step3Btn.addEventListener("click", () => {
//   step3Btn.classList.add("live");
//   step3Content.classList.add("live");

//   step2Btn.classList.remove("live");
//   step2Content.classList.remove("live");

//   step1Btn.classList.remove("live");
//   step1Content.classList.remove("live");
// });



const array = [];

    for (let i = 1; i <= 7; i++) {
      array.push({
        button: document.querySelector(`#step-${i}-btn`),
        content: document.querySelector(`#step-${i}-content`)
      })
    }

    for (let i = 0; i < array.length; i++) {
      const stepToAddLive = array[i];

      stepToAddLive.button.addEventListener('click', () => {
        stepToAddLive.button.classList.add('live');
        stepToAddLive.content.classList.add('live');

        for (let j = 0; j < array.length; j++) {
          if (i !== j) {
            const stepToRemoveLive = array[j];
            stepToRemoveLive.button.classList.remove('live');
            stepToRemoveLive.content.classList.remove('live');
          }
        }
      });
    }
