import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const resetHouseScores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    huffelpuff: 0,
  };
  const [currentHouseScores, setCurrentHouseScores] =
    useState(resetHouseScores);
  const [currentQuizPage, setCurrentQuizPage] = useState(1);
  const quiz = [
    {
      question: "When faced with a difficult decision, you:",
      gryffindorAnswer: "Charge ahead and tackle it head-on.",
      slytherinAnswer:
        "Weigh the benefits and choose the option that advances your status or goals.",
      ravenclawAnswer:
        "Analyze the situation and consider all options before deciding.",
      huffelpuffAnswer:
        "Consider what is fair and will do the most good for everyone involved.",
    },
    {
      question: "Which of these is your ultimate goal?",
      gryffindorAnswer:
        "To be brave and make a significant change in the world.",
      slytherinAnswer: "To gain power and influence.",
      ravenclawAnswer: "To acquire knowledge and wisdom.",
      huffelpuffAnswer: "To foster peace and help others.",
    },
    {
      question: "In a group project, you are likely to:",
      gryffindorAnswer:
        "Take the lead and rally everyone towards a common goal.",
      slytherinAnswer:
        "Strategize and position yourself to get the most credit.",
      ravenclawAnswer: "Contribute innovative ideas and solutions.",
      huffelpuffAnswer:
        "Ensure everyone is cooperating and their contributions are valued.",
    },
    {
      question: "If you found a wallet full of money, you would:",
      gryffindorAnswer: "Try to find the owner to return it immediately.",
      slytherinAnswer:
        "Keep it, or maybe take some money and return the wallet.",
      ravenclawAnswer:
        "Consider the ethical implications before deciding what to do.",
      huffelpuffAnswer: "Return it with all its contents intact.",
    },
    {
      question: "What drives you to succeed?",
      gryffindorAnswer: "The desire to prove your courage and integrity.",
      slytherinAnswer: "The pursuit of power and prestige.",
      ravenclawAnswer: "The quest for knowledge and understanding.",
      huffelpuffAnswer: "The need to make a positive difference in the world.",
    },
    {
      question: "During a conflict, you:",
      gryffindorAnswer: "Stand up and fight for what you believe is right.",
      slytherinAnswer:
        "Look for strategic advantages to turn the situation in your favor.",
      ravenclawAnswer: "Try to resolve the issue through dialogue and reason.",
      huffelpuffAnswer:
        "Work towards a fair and just resolution for all parties.",
    },
    {
      question: "What are you most likely to be remembered for?",
      gryffindorAnswer: "Your daring and adventurous spirit.",
      slytherinAnswer: "Your cunning and achievements.",
      ravenclawAnswer: "Your wisdom and unique ideas.",
      huffelpuffAnswer: "Your kindness and steadfastness.",
    },
    {
      question: "How do you tackle your work or school assignments?",
      gryffindorAnswer: "Dive right in with passion and determination.",
      slytherinAnswer: "Plan carefully to ensure you come out on top.",
      ravenclawAnswer:
        "Research thoroughly to understand the subject inside out.",
      huffelpuffAnswer: "Work diligently and cooperatively with others.",
    },
    {
      question: "Choose a pet to bring to Hogwarts:",
      gryffindorAnswer: "A brave and loyal dog.",
      slytherinAnswer: "A sleek and cunning snake.",
      ravenclawAnswer: "A wise and mysterious cat.",
      huffelpuffAnswer: "A hardworking and friendly badger.",
    },
    {
      question: "What motto do you live by?",
      gryffindorAnswer: "Do what is right, not what is easy.",
      slytherinAnswer: "Ends justify the means.",
      ravenclawAnswer: "Knowledge is the ultimate power.",
      huffelpuffAnswer: "Treat others with kindness and fairness.",
    },
  ];

  const resultDescription = {
    Gryffindor:
      "You are bold, passionate, and brave. You have a highly-defined sense of right and wrong, and you are not afraid to speak your mind or fight for what you want. Some of the wizarding world's best-known members of house Gryffindor are: Minerva McGonagall, Remus Lupin, Hermione Granger, Order of the Phoenix founder Albus Dumbledore, and of course, Harry Potter!",
    Slytherin:
      "You are sneaky, resourceful, and not afraid to bend the rules to your advantage. You consistently strive to get ahead, and will do everything you can to be in a position of power. Famous witches and wizards of house Slytherin have included: Professor Severus Snape, Professor Horace Slughorn, Bellatrix Lestrange, Draco Malfoy, and even he-who-must-not-be-named, Tom Riddle, aka Lord Voldemort himself!",
    Ravenclaw:
      "You are wise, perceptive, and quietly brilliant. You may not always be noticed right away, but you are widely respected for your humor and brains. Notable students who the sorting hat has placed in house Ravenclaw include: Luna Lovegood, wand shop founder Garrick Ollivander, and the inventor of Floo powder, Ignatia Wildsmith.",
    Hufflepuff:
      "You are reserved, rational, and down-to-earth. You work well with others, are a great team player, and you always take a stand against injustice. Honorable Hufflepuffs throughout history have included: Cedric Diggory, Professor Pomona Sprout, and many years ago - Newton 'Newt' Scamander, the well-known author of Fantastic Beasts and Where to Find Them.",
  };

  return (
    <QuizContext.Provider
      value={{
        currentHouseScores,
        setCurrentHouseScores,
        currentQuizPage,
        setCurrentQuizPage,
        quiz,
        resultDescription,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
