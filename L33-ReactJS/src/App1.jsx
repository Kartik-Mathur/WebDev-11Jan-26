import React from "react";

const App = () => {
  let name = "Aditya Malik";
  let time = 2;
  let randomNumber = Math.floor(Math.random() * 10);
  
  return (
    <div>
      Hello {time > 12 ? "Good Evening" : "Good Morning"} {name} -
      <span>How are you?</span>
      <div>
        Lucky Number: {randomNumber}
        <br />
        {randomNumber == 7 ? (
          <img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUya2lzODcxNTgzaW4wb3VmYWdvdWtoMnhtN2o1azdiZnlwdTN6NGZoNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IS6CvSgqzzv4T1LMDj/200.gif"></img>
        ) : (
          <img src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyaXB0aGt0dHVmb3k0NmFqN280Y21vcmdsN3RuOTRic3N5cnFoa3YxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eJ4j2VnYOZU8qJU3Py/giphy.gif" />
        )}
      </div>
    </div>
  );
};

export default App;
