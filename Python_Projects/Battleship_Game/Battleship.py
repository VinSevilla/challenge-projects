from textwrap import dedent

class MenuNavigation:
    def main(self):
        print(dedent("""
        ------------------------------------------------------------------------------------------------------------

        .______        ___   .___________.___________. __       _______     _______. __    __   __  .______   
        |   _  \      /   \  |           |           ||  |     |   ____|   /       ||  |  |  | |  | |   _  \  
        |  |_)  |    /  ^  \ `---|  |----`---|  |----`|  |     |  |__     |   (----`|  |__|  | |  | |  |_)  | 
        |   _  <    /  /_\  \    |  |        |  |     |  |     |   __|     \   \    |   __   | |  | |   ___/  
        |  |_)  |  /  _____  \   |  |        |  |     |  `----.|  |____.----)   |   |  |  |  | |  | |  |      
        |______/  /__/     \__\  |__|        |__|     |_______||_______|_______/    |__|  |__| |__| | _|       

        ------------------------------------------------------------------------------------------------------------                                                                                                                                                                                                                  
        """))
        print("Welcome to BATTLESHIP!")
        print("Please enter the correct number for the corresponding action.")
        print("""
        1. View rules

        2. Play against AI.

        3. Play with a friend.
        """)


    def rules(self):
        print()
        print(dedent("""
                                                      RULES
        -------------------------------------------------------------------------------------------------------
       
        1. Objective: The goal of Battleship is to sink all of your opponent's ships before they sink yours.
        
        2. Each player places a set number of ships on their grid without showing their opponent. Ships vary 
           in size and occupy a set number of consecutive spaces either horizontally or vertically.

        3. Players take turns guessing coordinates on the opponent's grid to find and sink their ships. 
           Each turn, a player announces a target coordinate (e.g., "B4").

        4. If the target coordinate is occupied by an opponent's ship, it's a "hit." Otherwise, it’s a "miss." 
           Mark hits and misses on your own grid for reference.

        5. When all cells of a particular ship are hit, that ship is considered "sunk."

        6. The first player to sink all of their opponent's ships wins.

        -------------------------------------------------------------------------------------------------------
        """))
        
    def game_mode(self):
        while True:
            try:
                userInput = int(input(dedent("""
                SELECT GAME MODE
                ----------------

                1.) Standard 
                    (Regular battleship rules on a 10x10 grid)

                2.) Standoff
                    (Both players each with a one cell ship on a 3x3 grid.)

                User: 
                """)))
                if userInput in [1, 2]:
                    return userInput
                else:
                    print("Invalid choice, please choose 1 or 2.")
            except ValueError:
                print("Invalid input! Please enter a number.")
        
    def play_with_friends_instructions(self,username):
        print(dedent(f"""
        ${username} please enter the coordinates range of the corresponding size cell ships
        """))


#Player class with name  and  their ship  orientation
class Player:
    def __init__(self, name, board_orientation = [['_' for _ in range(10)] for _ in range(10)] ):
        self.name = name[0].upper() + name[1:len(name)]
        self.board_orientation  =  board_orientation
    
    def display_board(self):
        print(f"{self.name}'s Board:")

        # Column headers (1-10)
        print("   " + " ".join(str(num) for num in range(1, 11)))
        
        # Row headers (A-J) and board content
        row_labels = "ABCDEFGHIJ"
        for i, row in enumerate(self.board_orientation):
            print(row_labels[i] + "  " + " ".join(str(cell) for cell in row))
        
    def set_ships(self):
        # Define ship sizes
        self.display_board()
        ships = {"Carrier": 5, "Battleship": 4, "Cruiser": 3, "Submarine": 3, "Destroyer": 2}
        ships_placed = 0
        row_labels = "ABCDEFGHIJ"

        while ships_placed < len(ships):
            print(f"\nPlacing {list(ships.keys())[ships_placed]} (Size: {ships[list(ships.keys())[ships_placed]]})")

            # Prompt for ship placement input
            row_input = input("Enter row (A-J): ").upper()
            if row_input in row_labels:
                x = row_labels.index(row_input)  # Convert row letter to index
            else:
                print("Invalid row input. Please enter a letter from A-J.")
                continue  # Restart the loop

            y = int(input("Enter column (1-10): ")) - 1  # Convert to 0-based index
            if y < 0 or y >= 10:
                print("Invalid column input. Please enter a number from 1-10.")
                continue  # Restart the loop

            direction = input("Enter direction (H for horizontal, V for vertical): ").upper()

            # Get the ship's size
            ship_size = ships[list(ships.keys())[ships_placed]]

            # Validate and place the ship
            if direction == 'H' and y + ship_size <= 10:
                if all(self.board_orientation[x][y + i] == '_' for i in range(ship_size)):  # Check if space is empty
                    for i in range(ship_size):
                        self.board_orientation[x][y + i] = 'S'  # Place the ship
                    ships_placed += 1
                    print("\nShip placed successfully!")
                else:
                    print("Invalid position: Overlapping with another ship.")
            elif direction == 'V' and x + ship_size <= 10:
                if all(self.board_orientation[x + i][y] == '_' for i in range(ship_size)):  # Check if space is empty
                    for i in range(ship_size):
                        self.board_orientation[x + i][y] = 'S'
                    ships_placed += 1
                    print("\nShip placed successfully!")
                else:
                    print("Invalid position: Overlapping with another ship.")
            else:
                print("Invalid position: Ship doesn't fit on the board. Try again.")

            # Display the board after each placement
            self.display_board()

        print("\nAll ships have been placed!")


        

class GameLogic:
    def __init__(self, play_with_friend, game_mode, player1, player2):
        self.play_with_friend = play_with_friend
        self.game_mode = game_mode
        #player1 obj with name/board_orientation
        self.player1 = player1
        #player2 obj with name/board_orientation
        self.player2 = player2
    
    #a board for the players to keep track of hits and misses 
    def turn(self):
 
    #if its a hit replace char with '*' miss replace with a 'x'
    def hit():
    
    #declare winner once all ships of oppenent has been replaced with a '*'
    #use a counter to count if  '*' == amount of total ship cells
    def end_game()


menu = MenuNavigation()
menu.main()
userInput = int(input("User: "))
game_mode = 0
play_with_friend = False
if userInput == 1:
    menu.rules()
elif userInput == 2:
    game_mode = menu.game_mode()
elif userInput == 3:
    game_mode = menu.game_mode()
    play_with_friend == True
    
    player1_username = input("Enter username for player1: ")
    player1 = Player(player1_username)
    menu.play_with_friends_instructions(player1.name)
    player1.set_ships()
    
    player2_username = input("Enter username for player2: ")
    player2 = Player(player2_username)
    print(f"${player2.name}'s Turn to set ships")
    player2.set_ships()
    
    game1 = gameLogic(play_with_friend,game_mode,player1,player2)

    
    #player2_username = int(input("Enter username for player2: "))
    #play_with_friend_game = GameLogic(play_with_friend, game_mode,)


