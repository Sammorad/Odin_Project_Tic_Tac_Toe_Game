# Tic-Tac-Toe Game

An interactive, fully functional Tic-Tac-Toe game built with vanilla JavaScript as part of The Odin Project curriculum.

## 🎮 Overview

This project demonstrates core web development concepts including DOM manipulation, event handling, game logic implementation, and object-oriented programming principles. The game features a clean, intuitive interface where two players can compete in a classic game of Tic-Tac-Toe.

## ✨ Features

- **Interactive Click-Based Gameplay:** Players click grid cells to place their markers (X and O)
- **Real-Time Win Detection:** Automatically detects winning combinations across all 8 possible patterns (3 rows, 3 columns, 2 diagonals)
- **Automatic Player Toggling:** Seamlessly alternates between Player 1 (X) and Player 2 (O)
- **Draw Detection:** Accurately identifies draw conditions when all 9 moves are made without a winner
- **Input Validation:** Prevents players from selecting already-occupied slots
- **Game Reset:** Start new games instantly without page reload using the START button
- **Dynamic DOM Generation:** Game grid is created dynamically using JavaScript
- **Player Information Display:** Shows current players and their markers

## 🛠 Technologies Used

- **HTML5:** Semantic markup and page structure
- **CSS3:** Responsive grid layout and styling
- **JavaScript (ES6+):** Game logic, state management, and event handling
- **Object-Oriented Programming:** Constructor functions for player management
- **Git:** Version control and branching strategy

## 📂 Project Structure

```
Odin_Project_Tic_Tac_Toe_Game/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── javaScript.js   # Game logic and functionality
└── README.md       # Project documentation
```

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Sammorad/Odin_Project_Tic_Tac_Toe_Game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Odin_Project_Tic_Tac_Toe_Game
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server (recommended for best experience)

## 🎯 How to Play

1. Click the **START** button to initialize the game board
2. **Player 1 (X)** clicks any empty cell to place their marker
3. **Player 2 (O)** takes their turn by clicking an empty cell
4. Players alternate turns until one of these conditions is met:
   - A player gets three markers in a row (horizontally, vertically, or diagonally) → **Player Wins!**
   - All 9 cells are filled without a winner → **It's a Draw!**
5. Click **START** again to play another round

## 💡 Key Technical Highlights

### Object-Oriented Design
```javascript
function Users(name, marker) {
  this.name = name;
  this.marker = marker;
}
```
Implemented constructor functions to create reusable player objects with name and marker properties.

### Game State Management
- **board:** Array tracking all 9 cell states
- **currentPlayer:** Reference to the active player
- **moveCount:** Counter for draw detection
- **gameGrid:** DOM reference to game container

### Win Detection Algorithm
Comprehensive checking system validating all 8 possible winning combinations:
- 3 Rows: [0,1,2], [3,4,5], [6,7,8]
- 3 Columns: [0,3,6], [1,4,7], [2,5,8]
- 2 Diagonals: [0,4,8], [2,4,6]

### Event-Driven Architecture
Dynamic event listeners attached to game cells enabling interactive gameplay and real-time state updates.

## 🧠 Learning Outcomes

### Challenges Overcome

**1. Game Logic Implementation:**
- Initially, draw detection was triggering on every non-winning move
- Solution: Implemented move counter to only detect draws when all 9 moves are completed
- Key lesson: Proper state tracking is essential for complex game logic

**2. Event Listener Integration with Player Management:**
- Player 1 was incorrectly placing markers on every click
- Root cause: Comparing entire array objects instead of individual array elements
- Solution: Changed from `player1 === player1` to `currentPlayer === array[0]`
- Key lesson: Understanding object references vs. primitives is fundamental

### Skills Developed
- ✅ DOM manipulation and dynamic element creation
- ✅ Event handling and listener attachment
- ✅ Systematic debugging and problem-solving
- ✅ Object-oriented programming principles
- ✅ State management in interactive applications
- ✅ Git workflow with feature branches
- ✅ Algorithm implementation for game logic

## 🚀 Future Enhancements

- [ ] Enhanced UI with CSS animations and transitions
- [ ] Score tracking system across multiple games
- [ ] Single-player mode with AI opponent
- [ ] Difficulty levels for AI player
- [ ] Responsive design for mobile devices
- [ ] Sound effects and visual feedback
- [ ] Player name input customization
- [ ] Game statistics dashboard
- [ ] Undo/Redo functionality

## 📚 Resources & References

- [The Odin Project - Rock Paper Scissors Project](https://www.theodinproject.com/)
- [MDN Web Docs - JavaScript DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript.info - Event Listeners](https://javascript.info/events)

## 🤝 Contributing

This is a learning project. Feel free to fork, modify, and experiment with the code as part of your own learning journey!

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Sammorad** - Learning Web Development with The Odin Project

## 🙏 Acknowledgments

- The Odin Project for the excellent curriculum and project structure
- Community members who provided feedback and debugging support
- The incredible JavaScript and web development community

---

**Happy Coding! 🎮✨**

For questions, suggestions, or feedback, feel free to reach out or open an issue on GitHub.
