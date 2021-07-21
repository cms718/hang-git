export const questionData = [
  // EASY
  { 
    word: "init", 
    level: "easy", 
    hint: "initialise git" 
  },
  {
    word: "status",
    level: "easy",
    hint: "show which files have changed on your local version since the last commit",
  },
  {
    word: "pull",
    level: "easy",
    hint: "update what’s on your local version to match what’s on the GitHub version",
  },
  {
    word: "diff",
    level: "easy",
    hint: "show what has changed within files",
  },
  {
    word: "push",
    level: "easy",
    hint: "send any committed changes to the remote version of your branch",
  },

  // MEDIUM
  { 
    word: "clone <url>", 
    level: "medium", 
    hint: "make a local copy of a repo that’s on GitHub" 
  },
  { 
    word: "log", 
    level: "medium", 
    hint: "display the entire commit history" 
  },
  { 
    word: "add .", 
    level: "medium", 
    hint: "stage all changes in the current directory for the next commit" 
  },
  { 
    word: "commit -m “<message>”", 
    level: "medium", 
    hint: "commit the staged snapshot" 
  },
  { 
    word: "commit -am “<message>”", 
    level: "medium", 
    hint: "stage and commit changes in one step" 
  },


  // HARD
  {
    word: "branch",
    level: "medium",
    hint: "list all the branches in your repo",
  },
  {
    word: "branch z",
    level: "hard",
    hint: "create a new branch named 'z', but don’t move into it yet",
  },
  {
    word: "switch z",
    level: "hard",
    hint: "move to an existing branch named 'z'",
  },
  {
    word: "checkout -b z",
    level: "hard",
    hint: "create and begin working on a new branch 'z' in one step",
  },
  {
    word: "branch -d z",
    level: "hard",
    hint: "delete a branch named 'z' from your local version of the repo",
  },
];